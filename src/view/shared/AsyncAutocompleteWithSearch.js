/** 
Autocomplete Async Component 
->No form required
->has server-side searching
->has default option selection
**/
import React, { Component } from 'react';
import { i18n } from 'i18n';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import {
    components as materialUiComponents,
    styles as materialUiStyles,
} from 'view/shared/form/items/shared/reactSelectMaterialUi';
import { withStyles } from '@material-ui/core/styles';

const AUTOCOMPLETE_SERVER_FETCH_SIZE = 50;

class AutocompleteWithoutForm extends Component {
    state = {
        selectedValue: this.props.defaultOption || ''
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
            label,
            name,
            placeholder,
            autoFocus,
            inputProps,
            mode,
            required,
            isClearable,
            classes,
            TextFieldProps,
            cacheOptions,
            containerStyles
        } = this.props;

        const controlStyles = {
            container: (provided) => ({
                ...provided,
                width: '100%',
                'div[class^="AutocompleteWithoutForm-valueContainer"]': { 'flexWrap': 'unset' },
                ...containerStyles,
            }),
            control: (provided) => ({
                ...provided,
                borderColor: undefined,
            }),
            clearIndicator: (provided) => ({
                ...provided,
                cursor: 'pointer'
            }),
            dropdownIndicator: (provided) => ({
                ...provided,
                cursor: 'pointer'
            }),
            valueContainer: (provided, state) => {
                console.log("provided", provided);
                return {
                    ...provided,
                    'flexWrap': 'unset',
                    padding: '50px'
                }
            },
        };
        return (
            <AsyncSelect
                cacheOptions={cacheOptions || true}
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
                {...inputProps}
            />
        );
    }
}

AutocompleteWithoutForm.defaultProps = {
    isClearable: true,
    mode: 'default',
    required: false,
};

AutocompleteWithoutForm.propTypes = {
    fetchFn: PropTypes.func.isRequired,
    mapper: PropTypes.object.isRequired,
    required: PropTypes.bool,
    mode: PropTypes.string,
    TextFieldProps: PropTypes.object,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    isClearable: PropTypes.bool,
    inputProps: PropTypes.object,
    showCreate: PropTypes.bool,
    hasPermissionToCreate: PropTypes.bool,
    onSelect: PropTypes.func,
    defaultOption: PropTypes.object,
    containerStyles: PropTypes.object,
    limit: PropTypes.number
};

export default withStyles(materialUiStyles)(
    AutocompleteWithoutForm,
);