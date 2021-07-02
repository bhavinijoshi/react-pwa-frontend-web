import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Select from 'react-select';
import { i18n } from 'i18n';
import {
  components as materialUiComponents,
  styles as materialUiStyles,
} from 'view/shared/form/items/shared/reactSelectMaterialUi';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class AutocompleteInMemoryWithoutFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDataSource: [],
      loading: false,
      selectedValue: this.props.defaultOption || ''
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props?.defaultOption?.value !== state?.selectedValue?.value) {
      return {
        selectedValue: props.defaultOption
      }
    } else {
      return null
    }
  }
  async componentDidMount() {
    // await this.fetchAllResults();
  }

  value = () => {
    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.valueMultiple();
    } else {
      return this.valueOne();
    }
  };

  valueMultiple = () => {
    const { mapper } = this.props;
    const { selectedValue } = this.state
    if (selectedValue) {
      return selectedValue.map((value) =>
        mapper.toAutocomplete(value),
      );
    }
    return [];
  };

  valueOne = () => {
    const { mapper } = this.props;
    const { selectedValue } = this.state
    if (selectedValue) {
      return mapper.toAutocomplete(selectedValue);
    }
    return null;
  };

  handleSelect = (value) => {
    const { onSelect, mode } = this.props;
    onSelect && onSelect(value)
    if (mode === 'multiple') {
      return this.handleSelectMultiple(value);
    } else {
      return this.handleSelectOne(value);
    }
  };

  handleSelectMultiple = (values) => {
    const { mapper } = this.props;
    if (!values) {
      this.setState({ selectedValue: [] })
      return;
    }
    let mappedValue = values.map((value) => mapper.toValue(value))
    this.setState({ selectedValue: mappedValue })
  };

  handleSelectOne = (value) => {
    const { mapper } = this.props;
    if (!value) {
      this.setState({ selectedValue: '' })
      return;
    }
    let mappedValue = mapper.toValue(value)
    this.setState({ selectedValue: mappedValue })
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
      TextFieldProps,
    } = this.props;

    const { loading } = this.state;

    const hintOrLoading = loading
      ? i18n('autocomplete.loading')
      : hint;


    const controlStyles = {
      container: (provided) => ({
        ...provided,
        width: '100%',
        marginTop: '16px',
        marginBottom: '8px',
        'div[class^="AutocompleteInMemoryFormItem-valueContainer"]': { 'flexWrap': 'unset' },
      }),
      control: (provided) => ({
        ...provided,
        //  borderColor: isInvalid ? 'red' : undefined,
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
        <Select
          styles={controlStyles}
          classes={classes}
          inputId={name}
          TextFieldProps={{
            label,
            required,
            variant: 'outlined',
            fullWidth: true,
            InputLabelProps: {
              shrink: true,
            },
            ...TextFieldProps
          }}
          components={materialUiComponents}
          isMulti={mode === 'multiple' ? true : false}
          placeholder={placeholder || ''}
          autoFocus={autoFocus || undefined}
          onChange={this.handleSelect}
          value={this.value()}
          isClearable={isClearable}
          options={this.props.data}
          loadingMessage={() =>
            i18n('autocomplete.loading')
          }
          noOptionsMessage={() =>
            i18n('autocomplete.noOptions')
          }
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

AutocompleteInMemoryWithoutFormItemNotFast.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteInMemoryWithoutFormItemNotFast.propTypes = {
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
  TextFieldProps: PropTypes.object
};

class AutocompleteInMemoryFormItem extends Component {
  render() {
    return (
      <AutocompleteInMemoryWithoutFormItemNotFast
        {...this.props}
      />
    );
  }
}

export default withStyles(materialUiStyles)(
  AutocompleteInMemoryFormItem,
);
