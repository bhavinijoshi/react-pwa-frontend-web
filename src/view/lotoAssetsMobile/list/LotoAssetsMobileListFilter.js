import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/lotoAssets/list/lotoAssetsListActions';
import selectors from 'modules/lotoAssets/list/lotoAssetsListSelectors';
import model from 'modules/asset/assetModel';
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
import OrgAreasAutocompleteFormItem from "view/autocomplete/OrgAreasAutocompleteFormItem";
import OrgSubAreasAutocompleteFormItem from "view/autocomplete/OrgSubAreasAutocompleteFormItem";
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.name,
  fields.orgAreaId,
  fields.orgSubAreaId,
  fields.lockStatus,
]);
class LotoAssetsMobileListFilter extends Component {

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
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
      <>
        <FilterWrapper>
          <Formik
            initialValues={this.initialFilter()}
            validationSchema={schema.schema}
            onSubmit={this.handleSubmit}
            render={(form) => {
              return (
                <Grid>

                  <form onSubmit={form.handleSubmit}>
                    <Grid container spacing={2}>

                      <Grid item lg={12} xs={12}>
                        <OrgAreasAutocompleteFormItem
                          key={form.values?.orgSectionId?.id}
                          name={fields.orgAreaId.name}
                          label={fields.orgAreaId.label}
                          form={form}
                        />
                      </Grid>
                      <Grid item lg={12} xs={12}>
                        <OrgSubAreasAutocompleteFormItem
                          key={form.values?.orgAreaId?.id}
                          name={fields.orgSubAreaId.name}
                          label={fields.orgSubAreaId.label}
                          form={form}
                        />
                      </Grid>
                      <Grid item lg={12} xs={12}>
                        <InputFormItem
                          name={fields.name.name}
                          label={fields.name.label}
                        />
                      </Grid>
                      <Grid item lg={12} xs={12}>
                        <SelectFormItem
                          name={fields.lockStatus.name}
                          label={fields.lockStatus.label}
                          options={fields.lockStatus.options.map(
                            (item) => ({
                              value: item.id,
                              label: item.label,
                            }),
                          )}
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
                </Grid>
              );
            }}
          />
        </FilterWrapper>
      </>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
    currentUser: authSelectors.selectCurrentUser(state),
  };
}

export default withRouter(connect(select)(LotoAssetsMobileListFilter));
