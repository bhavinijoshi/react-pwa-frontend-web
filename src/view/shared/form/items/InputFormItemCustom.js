import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { TextField } from '@material-ui/core';

export class InputFormItemCustomNotFast extends Component {
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
        // onChange={this.props.onChange}
        onChange={(event) => {
          form.setFieldValue(name, event.target.value);
          form.setFieldTouched(name);
          this.props.onChange(event);
        }}
        value={this.props.value}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        InputLabelProps={{
          shrink: true,
        }}
        {...inputProps}
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
      />
    );
  }
}

InputFormItemCustomNotFast.defaultProps = {
  type: 'text',
  required: false,
};

InputFormItemCustomNotFast.propTypes = {
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
  value: PropTypes.string,
};

// class InputFormItemCustom extends Component {
//   render() {
//     return (
//       <FastField
//         name={this.props.name}
//         render={({ form }) => (
//           <InputFormItemCustomNotFast
//             {...this.props}
//             form={form}
//             onChange={this.props.onChange}
//           />
//         )}
//       />
//     );
//   }
// }

export default InputFormItemCustomNotFast;
