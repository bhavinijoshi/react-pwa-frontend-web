import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Switch,
} from '@material-ui/core';

export class SwitchFormItemNotFast extends Component {
  render() {
    const {
      label,
      name,
      form,
      hint,
      inputProps,
      errorMessage,
      required,
      onChange,
      disabled,
      fullWidth
    } = this.props;

    const formHelperText =
      FormErrors.displayableError(
        form,
        name,
        errorMessage,
      ) || hint;

    return (
      <FormControl
        style={{ marginTop: '16px' }}
        required={required}
        fullWidth={fullWidth === false ? false : true}
        error={
          !!FormErrors.displayableError(
            form,
            name,
            errorMessage,
          )
        }
        component="fieldset"
      >
        <FormLabel component="legend">{label}</FormLabel>
        <Switch
          id={name}
          name={name}
          checked={form.values[name] || false}
          onChange={(e) => {
            form.setFieldValue(name, !!e.target.checked);
            form.setFieldTouched(name);
            onChange && onChange(e)
          }}
          color="secondary"
          disabled={disabled}
          {...inputProps}
        ></Switch>
        {formHelperText && (
          <FormHelperText style={{ marginTop: 0 }}>
            {formHelperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

SwitchFormItemNotFast.defaultProps = {};

SwitchFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

class SwitchFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <SwitchFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default SwitchFormItem;
