import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';

export default class RelationToOneField extends GenericField {
  constructor(
    name,
    label,
    { required = false } = {},
    customValue = null // Use this key when you need custom key in return in place of default 'id' (for form)
  ) {
    super(name, label);

    this.required = required;
    this.customValue = customValue
  }

  forView(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value;
  }

  forForm() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }
        if (this.customValue) {
          return originalValue[this.customValue];
        }
        return originalValue.id || originalValue._id;
      });

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forFilter() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }
        if (this.customValue) {
          return originalValue[this.customValue];
        }
        return originalValue.id || originalValue._id;
      });
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || (!originalValue.id && !originalValue._id)) {
          return null;
        }
        if (this.customValue) {
          return originalValue[this.customValue];
        }
        return originalValue.id || originalValue._id;
      });
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
