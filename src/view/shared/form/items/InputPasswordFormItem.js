import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export class InputPasswordFormItemNotFast extends Component {
    state = {
        isShowPassword: false
    }

    handleClickShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const {
            label,
            name,
            form,
            hint,
            placeholder,
            autoFocus,
            autoComplete,
            inputProps,
            errorMessage,
            required,
            disabled,
            onChange
        } = this.props;

        const {
            isShowPassword
        } = this.state;

        return (
            <FormControl fullWidth variant="outlined" style={{ margin: '16px 0 8px' }}>
                <InputLabel htmlFor="password">{label}</InputLabel>
                <OutlinedInput
                    id={name}
                    type={isShowPassword ? 'text' : 'password'}
                    label={label}
                    required={required}
                    // margin="normal"
                    fullWidth
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
                    error={
                        !!FormErrors.displayableError(
                            form,
                            name,
                            errorMessage,
                        )
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                            >
                                {isShowPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    {...inputProps}
                />
                <FormHelperText id="component-helper-text">
                    {FormErrors.displayableError(
                        form,
                        name,
                        errorMessage,
                    ) || hint}
                </FormHelperText>
            </FormControl>
        );
    }
}

InputPasswordFormItemNotFast.defaultProps = {
    type: 'text',
    required: false,
};

InputPasswordFormItemNotFast.propTypes = {
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

class InputPasswordFormItem extends Component {
    render() {
        return (
            <FastField
                name={this.props.name}
                render={({ form }) => (
                    <InputPasswordFormItemNotFast
                        form={form}
                        onChange={this.props.onChange}
                        {...this.props}
                    />
                )}
            />
        );
    }
}

export default InputPasswordFormItem;
