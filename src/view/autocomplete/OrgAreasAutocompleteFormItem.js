import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import OrgAreasService from 'modules/orgAreas/orgAreasService';
import { connect } from 'react-redux';
import selectors from 'modules/orgAreas/orgAreasSelectors';

class OrgAreasAutocompleteFormItem extends Component {


  fetchFn = (value, limit) => {
    const { form, name } = this.props
    form.setFieldValue(name, undefined)
    return OrgAreasService.listAutocomplete(value, limit, form?.values?.orgSectionId?.id);
  };

  mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      const value = originalValue.id;
      let label = originalValue.label;

      if (originalValue['name']) {
        label = originalValue['name'];
      }

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

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  render() {
    const { form, ...rest } = this.props;

    return (
      <React.Fragment>
        <AutocompleteFormItem
          {...rest}
          fetchFn={this.fetchFn}
          mapper={this.mapper}
        />

      </React.Fragment>
    );
  }
}

const select = (state) => ({
  hasPermissionToCreate: selectors.selectPermissionToCreate(
    state,
  ),
});

export default connect(select)(
  OrgAreasAutocompleteFormItem,
);
