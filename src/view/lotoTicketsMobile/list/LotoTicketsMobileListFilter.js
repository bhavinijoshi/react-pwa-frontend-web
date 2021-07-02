import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/lotoTicketsMobile/list/lotoTicketsListMobileActions';
import selectors from 'modules/lotoTicketsMobile/list/lotoTicketsListMobileSelectors';
import model from 'modules/lotoTicketsMobile/lotoTicketsMobileModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import FilterWrapper, {
  FilterButtons,
} from 'view/shared/styles/FilterWrapper';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import { Button, Grid } from '@material-ui/core';
import authSelectors from 'modules/auth/authSelectors';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.ticketNum,
  fields.ticketStatus,
]);

class LotoTicketsMobileListFilter extends Component {
  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    // valuesToSubmit['employeeId'] = currentUser.employeeId
    // getHistory().push('/mobile/lototickets/view');
    dispatch(actions.doFetch(valuesToSubmit));
    this.props.closeFilterDrawer()
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
    this.props.closeFilterDrawer()
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <Grid container spacing={2}>

                  <Grid item lg={12} md={12} xs={12}>
                    <InputFormItem
                      name={fields.ticketNum.name}
                      label={fields.ticketNum.label}
                    />
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                    <SelectFormItem
                      name={fields.ticketStatus.name}
                      label={fields.ticketStatus.label}
                      options={fields.ticketStatus.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      form={form}
                    />
                  </Grid>

                </Grid>
                <FilterButtons>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={loading}
                    startIcon={<SearchIcon />}
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => this.handleReset(form)}
                    disabled={loading}
                    startIcon={<UndoIcon />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </FilterButtons>
              </form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
    currentUser: authSelectors.selectCurrentUser(state),
  };
}

export default withRouter(connect(select)(LotoTicketsMobileListFilter));
