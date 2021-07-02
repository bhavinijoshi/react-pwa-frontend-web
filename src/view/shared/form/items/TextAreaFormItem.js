import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { TextField } from '@material-ui/core';

export class TextAreaFormItemNotFast extends Component {
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
      rows,
      disabled,
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
        onChange={(event) => {
          form.setFieldValue(name, event.target.value);
          form.setFieldTouched(name);
        }}
        value={form.values[name] || ''}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        rows={rows || 4}
        disabled={disabled || false}
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

TextAreaFormItemNotFast.defaultProps = {
  type: 'text',
  required: false,
};

TextAreaFormItemNotFast.propTypes = {
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
  rows: PropTypes.number,
  disabled: PropTypes.bool
};

class TextAreaFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <TextAreaFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default TextAreaFormItem;
