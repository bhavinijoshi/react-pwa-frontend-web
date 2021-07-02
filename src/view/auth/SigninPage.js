import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import Content from 'view/auth/styles/Content';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import SigninPageWrapper from 'view/auth/styles/SigninPageWrapper';
import I18nFlags from 'view/layout/I18nFlags';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import FormSchema from 'view/shared/form/formSchema';
import {
  Checkbox,
  FormControlLabel,
  Box,
  Button,
  Typography,
} from '@material-ui/core';

const { fields } = model;

class SigninPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rememberMe: null
    }
  }
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
    fields.rememberMe,
  ]);
  verifySchema = new FormSchema(fields.id, [
    fields.verifyCode,
  ]);
  componentDidMount() {
    this.clearErrorMessage();
  }

  handleChange(event, form) {
    if (this.props.errorMessage) {
      this.clearErrorMessage();
    }

    form.handleChange(event);
  }

  clearErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearErrorMessage());
  };

  initialValues = () => {
    return { email: '', password: '', rememberMe: true };
  };

  doSubmit = ({ email, password, rememberMe }) => {
    const { dispatch } = this.props;
    this.setRememberMe(rememberMe)
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe
      ),
    );
  };

  doVerify = ({ verifyCode }) => {
    const { rememberMe } = this.state
    const { dispatch } = this.props;
    dispatch(
      actions.doVerifyCode(verifyCode, rememberMe),
    );
  }

  doResendCode = () => {
    const { dispatch } = this.props;
    dispatch(
      actions.doResendCode()
    );
  }

  setRememberMe = (rememberMe) => {
    this.setState({ rememberMe })
  }

  render() {
    const { twoFactorEnabled, verifyCodeLoading, resendCodeLoading } = this.props
    return (
      <SigninPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>
          {twoFactorEnabled ?
            <Fragment>
              <Typography variant="h6" style={{ marginBottom: '20px' }}>Verify Your Mobile Number</Typography>
              <Typography variant="body2" gutterBottom>Verify the code which we have sent to mobile number ******{twoFactorEnabled?.mobile}</Typography>
              <Formik
                key="verifyCode-form"
                initialValues={{ verifyCode: null }}
                validationSchema={this.verifySchema.schema}
                onSubmit={this.doVerify}
                render={(form) => (
                  <form onSubmit={form.handleSubmit}>
                    <InputNumberFormItem
                      name={fields.verifyCode.name}
                      label={fields.verifyCode.label}
                    />
                    <Button
                      style={{ marginTop: '8px' }}
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      size="large"
                      disabled={verifyCodeLoading}
                    >
                      {i18n('entities.auth.verifyCode')}
                    </Button>
                    <OtherActions>
                      <MaterialLink
                        component="button"
                        onClick={() => {
                          this.doResendCode();
                        }}
                        disabled={resendCodeLoading}
                      >
                        {i18n('entities.auth.resendCode')}
                      </MaterialLink>
                    </OtherActions>
                  </form>
                )}
              />
            </Fragment> :
            <Formik
              key="login-form"
              initialValues={this.initialValues()}
              validationSchema={this.schema.schema}
              onSubmit={this.doSubmit}
              render={(form) => (
                <form onSubmit={form.handleSubmit}>
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

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          id={fields.rememberMe.name}
                          name={fields.rememberMe.name}
                          checked={form.values.rememberMe}
                          onChange={form.handleChange}
                          color="primary"
                        />
                      }
                      label={fields.rememberMe.label}
                    />

                    <MaterialLink
                      style={{ marginBottom: '8px' }}
                      component={Link}
                      to="/auth/forgot-password"
                    >
                      {i18n('entities.auth.forgotPassword')}
                    </MaterialLink>
                  </Box>

                  <Button
                    style={{ marginTop: '8px' }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    size="large"
                    disabled={this.props.loading}
                  >
                    {i18n('entities.auth.signin')}
                  </Button>

                  <OtherActions>
                    <MaterialLink
                      component={Link}
                      to="/auth/signup"
                    >
                      {i18n('entities.auth.createAnAccount')}
                    </MaterialLink>
                  </OtherActions>

                  <I18nFlags style={{ marginTop: '24px' }} />
                </form>
              )}
            />}
        </Content>
      </SigninPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
  twoFactorEnabled: selectors.selectEnable2FA(state),
  verifyCodeLoading: selectors.selectLoadingVerifyCode(state),
  resendCodeLoading: selectors.selectLoadingResendCode(state)
});

export default connect(select)(SigninPage);
