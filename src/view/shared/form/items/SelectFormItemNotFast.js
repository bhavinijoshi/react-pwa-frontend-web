import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import Select from 'react-select';
import { i18n } from 'i18n';
import {
  components as materialUiComponents,
  styles as materialUiStyles,
} from 'view/shared/form/items/shared/reactSelectMaterialUi';
import { withStyles } from '@material-ui/core/styles';

class SelectFormItemNotFast1 extends Component {
  value = () => {
    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.valueMultiple();
    } else {
      return this.valueOne();
    }
  };

  valueMultiple = () => {
    const { form, name, options } = this.props;

    if (form.values[name]) {
      return form.values[name].map((value) =>
        options.find((option) => option.value === value),
      );
    }

    return [];
  };

  valueOne = () => {
    const { form, name, options } = this.props;

    if (form.values[name]) {
      return options.find(
        (option) => option.value === form.values[name],
      );
    }

    return '';
  };

  handleSelect = (data) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);

    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.handleSelectMultiple(data);
    } else {
      return this.handleSelectOne(data);
    }
  };

  handleSelectMultiple = (values) => {
    const { form, name } = this.props;

    if (!values) {
      form.setFieldValue(name, []);
      return;
    }

    form.setFieldValue(
      name,
      values
        .map((data) => (data ? data.value : undefined))
        .filter(Boolean),
    );
  };

  handleSelectOne = (data) => {
    const { form, name } = this.props;

    if (!data) {
      form.setFieldValue(name, undefined);
      return;
    }

    form.setFieldValue(name, data.value);
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      options,
      errorMessage,
      required,
      mode,
      placeholder,
      isClearable,
      defaultValue,
      classes,
      isSearchable,
      value,
    } = this.props;

    const isInvalid = !!FormErrors.displayableError(
      form,
      name,
      errorMessage,
    );

    const controlStyles = {
      container: (provided) => ({
        ...provided,
        width: '100%',
        marginTop: '16px',
        marginBottom: '8px',
      }),
      control: (provided) => ({
        ...provided,
        borderColor: isInvalid ? 'red' : undefined,
      }),
    };

    return (
      <Select
        styles={controlStyles}
        classes={classes}
        value={value}
        onChange={(event) => {
          this.handleSelect(event);
          this.props.onChange && this.props.onChange(event);
        }}
        // {this.handleSelect}
        inputId={name}
        isSearchable={isSearchable}
        TextFieldProps={{
          label,
          required,
          variant: 'outlined',
          fullWidth: true,

          error: !!FormErrors.displayableError(
            form,
            name,
            errorMessage,
          ),
          helperText:
            FormErrors.displayableError(
              form,
              name,
              errorMessage,
            ) || hint,
          InputLabelProps: {
            shrink: true,
          },
        }}
        components={materialUiComponents}
        options={options}
        isMulti={mode === 'multiple'}
        placeholder={placeholder || ''}
        isClearable={isClearable}
        defaultValue={defaultValue}
        loadingMessage={() => i18n('autocomplete.loading')}
        noOptionsMessage={() =>
          i18n('autocomplete.noOptions')
        }
      />
    );
  }
}

SelectFormItemNotFast1.defaultProps = {
  required: false,
  isClearable: true,
  isSearchable: false,
  defaultvalue: null,
};

SelectFormItemNotFast1.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  defaultValue: PropTypes.object,
  value: PropTypes.object,
};

export default withStyles(materialUiStyles)(
  SelectFormItemNotFast1,
);
