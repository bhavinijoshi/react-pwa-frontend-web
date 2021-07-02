import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import { countryCodes } from '../../../../modules/shared/constants/countryCodes';

class CountryCodeAutocompleteFormItem extends Component {
    state = {
        modalVisible: false,
    };

    fetchFn = (value, limit) => {
        if (value.includes('+')) {
            value = value.split('+')[1]
        }
        return countryCodes.filter(code => code.includes(value))
    };

    mapper = {
        toAutocomplete(originalValue) {
            if (!originalValue) {
                return undefined;
            }
            let value = originalValue
            let label = "+" + originalValue;

            return {
                key: value,
                value,
                label,
            };
        },
        toValue(originalValue) {
            if (!originalValue) {
                return undefined;
            }

            return originalValue.value
        },
    };

    render() {
        const { form, ...rest } = this.props;

        return (
            <React.Fragment>
                <AutocompleteFormItem
                    {...rest}
                    form={form}
                    fetchFn={this.fetchFn}
                    mapper={this.mapper}
                />
            </React.Fragment>
        );
    }
}

export default CountryCodeAutocompleteFormItem

