import React, { Component, Fragment } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/auth/authActions';
import selectors from 'modules/auth/authSelectors';
import model from 'modules/auth/userModel';
import { connect } from 'react-redux';
import FormSchema from 'view/shared/form/formSchema';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import CheckboxFormItem from 'view/shared/form/items/CheckboxFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import CountryCodeAutocompleteFormItem from 'view/shared/form/items/CountryCodeAutocompleteFormItem';

const { fields } = model;

class ProfileFormPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.firstName,
    fields.lastName,
    fields.countryCode,
    fields.phoneNumber,
    fields.avatarsProfile,
    fields.roles,
    fields.twoFactorEnabled,
  ]);

  verifySchema = new FormSchema(fields.id, [
    fields.verifyCode,
  ]);

  handleSubmit = (values, formActions) => {
    const { dispatch } = this.props;
    if (values.twoFactorEnabled) {
      if (!values.countryCode) {
        formActions.setErrors({ countryCode: 'Country code is required for 2FA' })
        return;
      }
      if (!values.phoneNumber) {
        formActions.setErrors({ phoneNumber: 'Phone Number is required for 2FA' })
        return;
      } else {
        if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2,4}$/.test(values.phoneNumber)) {
          formActions.setErrors({ phoneNumber: 'Please enter a valid phone number' })
          return
        }
      }
    }
    dispatch(
      actions.doUpdateProfile(
        values.firstName,
        values.lastName,
        values.countryCode,
        values.phoneNumber,
        values.avatars,
        values.twoFactorEnabled || false
      ),
    );
  };

  doVerifyPhone = ({ verifyCode }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doVerifyPhone(verifyCode),
    );
  }

  doCancelVerifyCode = () => {
    const { dispatch } = this.props;
    dispatch(
      actions.doCancelVerifyCode(),
    );
  }

  initialValues = () => {
    const currentUser = this.props.currentUser;
    return this.schema.initialValues(currentUser);
  };

  renderForm() {
    const { saveLoading, twoFactorEnabled, verifyCodeLoading } = this.props;
    return (
      <FormWrapper>
        {twoFactorEnabled ?
          <Fragment>
            <Typography variant="body2" gutterBottom>Verify the code which we have sent to mobile number {twoFactorEnabled.mobile}</Typography>
            <Formik
              key="verifyCode-form"
              initialValues={{ verifyCode: null }}
              validationSchema={this.verifySchema.schema}
              onSubmit={this.doVerifyPhone}
              render={(form) => (
                <form onSubmit={form.handleSubmit}>
                  <InputNumberFormItem
                    name={fields.verifyCode.name}
                    label={fields.verifyCode.label}
                  />
                  <FormButtons>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      disabled={verifyCodeLoading}
                      startIcon={<VerifiedUserIcon />}
                    >
                      {i18n('entities.auth.verifyCode')}
                    </Button>
                    <Button
                      disabled={verifyCodeLoading}
                      onClick={this.doCancelVerifyCode}
                      type="button"
                      startIcon={<CloseIcon />}
                    >
                      {i18n('common.cancel')}
                    </Button>

                  </FormButtons>
                </form>
              )}
            />
          </Fragment> :
          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.handleSubmit}
            render={(form) => {
              return (
                <form onSubmit={form.handleSubmit}>
                  <ViewFormItem
                    name={fields.email.name}
                    label={fields.email.label}
                  />

                  <InputFormItem
                    name={fields.firstName.name}
                    label={fields.firstName.label}
                    autoComplete={fields.firstName.name}
                    autoFocus
                  />

                  <InputFormItem
                    name={fields.lastName.name}
                    label={fields.lastName.label}
                    autoComplete={fields.lastName.name}
                  />

                  <CountryCodeAutocompleteFormItem
                    name={fields.countryCode.name}
                    label={fields.countryCode.label}
                    form={form}
                  />

                  <InputNumberFormItem
                    name={fields.phoneNumber.name}
                    label={fields.phoneNumber.label}
                    autoComplete={fields.phoneNumber.name}
                  />

                  <Grid container>
                    <Grid item md={3} xs={12}>
                      <ImagesFormItem
                        name={fields.avatarsProfile.name}
                        label={fields.avatarsProfile.label}
                        path={fields.avatarsProfile.path(
                          this.props.currentUser
                            .authenticationUid,
                        )}
                        schema={{
                          size: fields.avatarsProfile.size,
                        }}
                        max={fields.avatarsProfile.max}
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <CheckboxFormItem
                        name={fields.twoFactorEnabled.name}
                        label={fields.twoFactorEnabled.label}
                        inputProps={{ color: "primary" }}
                      />
                    </Grid>
                  </Grid>

                  <FormButtons>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={saveLoading}
                      type="button"
                      onClick={form.handleSubmit}
                      startIcon={<SaveIcon />}
                    >
                      {i18n('common.save')}
                    </Button>

                    <Button
                      disabled={saveLoading}
                      onClick={form.handleReset}
                      type="button"
                      startIcon={<UndoIcon />}
                    >
                      {i18n('common.reset')}
                    </Button>

                    {this.props.onCancel ? (
                      <Button
                        disabled={saveLoading}
                        onClick={() => this.props.onCancel()}
                        type="button"
                        startIcon={<CloseIcon />}
                      >
                        {i18n('common.cancel')}
                      </Button>
                    ) : null}
                  </FormButtons>
                </form>
              );
            }}
          />}
      </FormWrapper>
    );
  }

  render() {
    return this.renderForm();
  }
}

function select(state) {
  return {
    saveLoading: selectors.selectLoadingUpdateProfile(state),
    currentUser: selectors.selectCurrentUser(state),
    twoFactorEnabled: selectors.selectEnable2FA(state),
    verifyCodeLoading: selectors.selectLoadingVerifyCode(state)
  };
}

export default connect(select)(ProfileFormPage);
