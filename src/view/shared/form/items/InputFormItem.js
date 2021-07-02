import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { TextField } from '@material-ui/core';

export class InputFormItemNotFast extends Component {
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
      disabled,
      onChange
    } = this.props;

    return (
      <TextField
        id={name}
        type={type}
        label={label}
        required={required}
        margin="normal"
        fullWidth
        variant="outlined"
        disabled={disabled}
        onChange={(event) => {
          form.handleChange(event);
          // form.setFieldValue(name, event.target.value);
          form.setFieldTouched(name);
        }}
        //if onChange is passed from parent
        {...(onChange && {
          onChange
        })}
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

InputFormItemNotFast.defaultProps = {
  type: 'text',
  required: false,
};

InputFormItemNotFast.propTypes = {
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
  disabled: PropTypes.bool
};

class InputFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <InputFormItemNotFast
            form={form}
            onChange={this.props.onChange}
            {...this.props}
          />
        )}
      />
    );
  }
}

export default InputFormItem;
