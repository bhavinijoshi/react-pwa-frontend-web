import { FastField } from 'formik';
import { i18n } from 'i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormErrors from 'view/shared/form/formErrors';
import AsyncSelect from 'react-select/async';
import {
  components as materialUiComponents,
  styles as materialUiStyles,
} from 'view/shared/form/items/shared/reactSelectMaterialUi';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AUTOCOMPLETE_SERVER_FETCH_SIZE = 50;

class AutocompleteFormItemNotFast extends Component {
  value = () => {
    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.valueMultiple();
    } else {
      return this.valueOne();
    }
  };

  valueMultiple = () => {
    const { form, name, mapper } = this.props;

    if (form.values[name]) {
      return form.values[name].map((value) =>
        mapper.toAutocomplete(value),
      );
    }

    return [];
  };

  valueOne = () => {
    const { form, name, mapper } = this.props;

    if (form.values[name]) {
      return mapper.toAutocomplete(form.values[name]);
    }

    return null;
  };

  handleSelect = (value) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);
    this.props.onClick && this.props.onClick()
    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.handleSelectMultiple(value);
    } else {
      return this.handleSelectOne(value);
    }
  };

  handleSelectMultiple = (values) => {
    const { form, name, mapper, onSelect } = this.props;
    if (!values) {
      form.setFieldValue(name, []);
      onSelect && onSelect([])
      return;
    }

    onSelect ? onSelect(values)
      :
      form.setFieldValue(
        name,
        values.map((value) => mapper.toValue(value)),
      );
  };

  handleSelectOne = (value) => {
    const { form, name, mapper, onSelect } = this.props;

    if (!value) {
      form.setFieldValue(name, '');
      onSelect && onSelect('')
      return;
    }
    let mappedValue = mapper.toValue(value)
    form.setFieldValue(name, mappedValue);
    //Only for device provisioning filter
    this.props.onSearch && this.props.onSearch(mappedValue);
    onSelect && onSelect(value)
  };

  handleSearch = async (value) => {
    const { fetchFn, mapper, limit } = this.props;

    try {
      const results = await fetchFn(
        value,
        limit ?? AUTOCOMPLETE_SERVER_FETCH_SIZE,
      );

      return results.map((result) =>
        mapper.toAutocomplete(result),
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  render() {
    const {
      form,
      label,
      name,
      hint,
      placeholder,
      autoFocus,
      inputProps,
      errorMessage,
      mode,
      required,
      isClearable,
      classes,
      isDisabled
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
        'div[class^="AutocompleteFormItem-valueContainer"]': { 'flexWrap': 'unset' },
        ...(this.props.showDropdownUpwards && {
          ".MuiPaper-root": {
            top: 'auto',
            bottom: '100%',
            marginBottom: '10px'
          }
        })
      }),
      control: (provided) => ({
        ...provided,
        borderColor: isInvalid ? 'red' : undefined,
      }),
      clearIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer'
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer'
      })
    };

    return (
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <AsyncSelect
          styles={controlStyles}
          classes={classes}
          inputId={name}
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
          defaultOptions={true}
          isMulti={mode === 'multiple' ? true : false}
          loadOptions={this.handleSearch}
          placeholder={placeholder || ''}
          autoFocus={autoFocus || undefined}
          onChange={this.handleSelect}
          value={this.value()}
          isClearable={isClearable}
          loadingMessage={() =>
            i18n('autocomplete.loading')
          }
          noOptionsMessage={() =>
            i18n('autocomplete.noOptions')
          }
          isDisabled={isDisabled}
          {...inputProps}
        />

        {this.props.showCreate &&
          this.props.hasPermissionToCreate ? (
            <IconButton
              style={{
                marginLeft: '16px',
                marginTop: '16px',
                marginBottom: '8px',
              }}
              color="secondary"
              onClick={this.props.onOpenModal}
            >
              <AddIcon />
            </IconButton>
          ) : null}
      </div>
    );
  }
}

AutocompleteFormItemNotFast.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  inputProps: PropTypes.object,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
  onSelect: PropTypes.func,
  onSearch: PropTypes.func,
  onClick: PropTypes.func,
  showDropdownUpwards: PropTypes.bool,
  isDisabled: PropTypes.bool,
  limit: PropTypes.number
};

class AutocompleteFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <AutocompleteFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default withStyles(materialUiStyles)(
  AutocompleteFormItem,
);
