import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import queryString from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'view/auth/styles/Content';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import SignupPageWrapper from 'view/auth/styles/SignupPageWrapper';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

import SelectFormItemNotFast1 from 'view/shared/form/items/SelectFormItemNotFast';
import InputFormItemCustomNotFast from 'view/shared/form/items/InputFormItemCustom';

const { fields } = model;
class SignupPage extends Component {
  //constructor(props) {
  // super(props);
  // this.state = {orgPrefix:''};
  //}

  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
    //fields.orgPlant,
    fields.employeeNum,
    fields.orgPrefix,
  ]);

  componentDidMount() {
    this.clearErrorMessage();
    this.clearOrganizationErrorMessage();
  }

  // handleChange(event, form) {
  //   if (this.props.errorMessage) {
  //     this.clearErrorMessage();
  //     this.clearOrganizationErrorMessage();
  //   }
  //   form.handleChange(event);
  // }

  clearErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearErrorMessage());
  };
  clearOrganizationErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearOrganizationErrorMessage());
  };
  clearOrganizationPlantErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(
      actions.doClearOrganizationPlantErrorMessage(),
    );
  };
  clearEmployeeNumberErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearEmployeeNumberErrorMessage());
  };
  initialValues = () => {
    return {
      email: this.emailFromInvitation() || '',
      password: '',
      orgPlant: '',
      employeeNum: '',
      orgPrefix: '',
    };
  };

  emailFromInvitation = () => {
    return queryString.parse(this.props.location.search)
      .email;
  };

  doSubmit = ({
    email,
    password,
    orgPlant,
    employeeNum,
  }) => {
    this.clearErrorMessage();
    this.clearEmployeeNumberErrorMessage();
    this.clearOrganizationPlantErrorMessage();
    this.clearOrganizationErrorMessage();
    const { dispatch } = this.props;
    const orgId = this.props.organization.id;
    const selectedPlant = this.props.plantDefaultValue
      .value;
    dispatch(
      actions.doRegisterEmailAndPassword(
        email,
        password,
        selectedPlant,
        employeeNum,
        orgId,
      ),
    );
  };

  // handleorgPrefixChange = (e) => {
  //   if (this.props.errorMessage) {
  //     this.clearErrorMessage();
  //   }

  //   const { dispatch } = this.props;

  //   dispatch(
  //     actions.doHandleOrgPrefixChange(e.target.value),
  //   );
  // };

  doHandleOrganizationChange = (e) => {
    if (this.props.organizationNotExist) {
      this.clearOrganizationErrorMessage();
    }
    const { dispatch } = this.props;

    dispatch(
      actions.doHandleOrgPrefixChange(e.target.value),
    );
  };
  doHandleEmployeeNumberChange = (e) => {
    if (this.props.employeeNumberError) {
      this.clearEmployeeNumberErrorMessage();
    }
  };
  doHandlePlantSelectChange = (e) => {
    if (this.props.orgPlantNotFound) {
      this.clearOrganizationPlantErrorMessage();
    }
    const { dispatch } = this.props;

    dispatch(actions.doHandlePlantSelectChange(e));
  };
  doFindOrganization = (orgPrefix) => {
    try {
      this.clearOrganizationPlantErrorMessage();

      const { dispatch } = this.props;
      dispatch(
        actions.doFetchOrganization(this.props.orgPrefix),
      );
    } catch (error) {
      return;
    }
    this.forceUpdate();
  };
  doHandleSwitchToSignInPage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSwitchToSignInPage())
  };

  render() {
    return (
      <SignupPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.doSubmit}
            render={(form) => (
              <form
                onSubmit={form.handleSubmit}
                onChange={form.handleChange}
              >
                <InputFormItemNotFast
                  name={fields.email.name}
                  label={fields.email.label}
                  autoComplete={fields.email.name}
                  autoFocus
                  errorMessage={this.props.errorMessage}
                  form={form}
                />

                <InputFormItem
                  name={fields.password.name}
                  label={fields.password.label}
                  autoComplete={fields.password.name}
                  type="password"
                />

                <InputFormItemCustomNotFast
                  // id={fields.orgPrefix.name}
                  name={fields.orgPrefix.name}
                  label={fields.orgPrefix.label}
                  required={fields.orgPrefix.required}
                  autoComplete={fields.orgPrefix.name}
                  autoFocus
                  errorMessage={
                    this.props.organizationNotExist
                  }
                  onChange={this.doHandleOrganizationChange}
                  form={form}
                />
                <Button
                  style={{ marginTop: '16px' }}
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={this.props.loading}
                  onClick={this.doFindOrganization}
                >
                  {'Find'}
                </Button>
                <SelectFormItemNotFast1
                  //name={fields.orgPlant.name}
                  //label={fields.orgPlant.label}
                  name={this.props.orgPlants.name}
                  label={this.props.orgPlants.label}
                  //options={fields.orgPlant.options.map(
                  options={this.props.orgPlants.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  value={this.props.plantDefaultValue}
                  //disabled={this.props.loading}
                  required={this.props.orgPlants.required}
                  //required={fields.orgPlant.required}
                  errorMessage={this.props.orgPlantNotFound}
                  onChange={this.doHandlePlantSelectChange}
                  form={form}
                />
                <InputFormItemCustomNotFast
                  name={fields.employeeNum.name}
                  label={fields.employeeNum.label}
                  autoComplete={fields.employeeNum.name}
                  autoFocus
                  errorMessage={
                    this.props.employeeNumberError
                  }
                  onChange={
                    this.doHandleEmployeeNumberChange
                  }
                  required={true}
                  form={form}
                />
                <Button
                  style={{ marginTop: '16px' }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                  disabled={this.props.loading}
                >
                  {i18n('entities.auth.signup')}
                </Button>

                <OtherActions>
                  <MaterialLink
                    component={Link}
                    to="/auth/signin"
                    onClick={this.doHandleSwitchToSignInPage}
                  >
                    {i18n('entities.auth.alreadyHaveAnAccount')}
                  </MaterialLink>
                </OtherActions>
              </form>
            )}
          />
        </Content>
      </SignupPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
  orgPlants: selectors.selectOrganizationPlants(state),
  orgPrefix: selectors.selectOrgPrefix(state),
  organization: selectors.selectOrganization(state),
  employeeNumberError: selectors.selectErrorMessageEmployeeNumber(
    state,
  ),
  orgPlantNotFound: selectors.selectErrorMessageOrgPlant(
    state,
  ),
  organizationNotExist: selectors.selectErrorMessageOrganization(
    state,
  ),
  plantDefaultValue: selectors.selectPlantDefaultValue(
    state,
  ),
});

export default connect(select)(SignupPage);
