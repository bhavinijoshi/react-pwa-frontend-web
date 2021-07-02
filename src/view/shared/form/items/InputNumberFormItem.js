import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { TextField } from '@material-ui/core';

export class InputNumberFormItemNotFast extends Component {
  render() {
    const {
      label,
      name,
      form,
      hint,
      type,
      placeholder,
      autoFocus,
      autoComplete,
      inputProps,
      errorMessage,
      required,
      onChange,
      disabled
    } = this.props;

    return (
      <TextField
        id={name}
        type={type}       //type number is not working on firefox and safari
        pattern="[1-9]"   //so used type text with pattern
        label={label}
        required={required}
        margin="normal"
        fullWidth
        variant="outlined"
        disabled={disabled}
        onChange={(event) => {
          form.handleChange(event);
          form.setFieldValue(name, event.target.value);
          form.setFieldTouched(name);
          onChange && onChange(event.target.value)
        }}
        value={form.values[name] || ''}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        InputLabelProps={{
          shrink: true,
        }}
        error={
          !!FormErrors.displayableError(
            form,
            name,
            errorMessage,
          )
        }
        helperText={
          FormErrors.displayableError(
            form,
            name,
            errorMessage,
          ) || hint
        }
        {...inputProps}
      />
    );
  }
}

InputNumberFormItemNotFast.defaultProps = {
  type: 'text',
  required: false,
};

InputNumberFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

class InputNumberFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <InputNumberFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default InputNumberFormItem;
