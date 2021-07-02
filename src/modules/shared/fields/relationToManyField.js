import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';

export default class RelationToManyField extends GenericField {
  constructor(
    name,
    label,
    {
      required = false,
      min = undefined,
      max = undefined,
    } = {},
    customValue = null // Use this key when you need custom key in return in place of default 'id' (for form)
  ) {
    super(name, label);

    this.required = required;
    this.min = min;
    this.max = max;
    this.customValue = customValue

    if (required && (!min || min < 1)) {
      this.min = 1;
    }
  }

  forView(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value;
  }

  forFilter() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return [];
        }
        if (this.customValue) {
          return originalValue.map((item) => item[this.customValue]);
        }
        return originalValue.map((item) => item.id);
      });
  }

  forForm() {
    let yupChain = yup
      .array()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return [];
        }
        if (this.customValue) {
          return originalValue.map((item) => item[this.customValue]);
        }
        return originalValue.map((item) => item.id);
      });

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return null;
        }
        if (this.customValue) {
          return originalValue.map((item) => item[this.customValue]);
        }
        return originalValue
          .map((value) => value.id)
          .join(' ');
      });
  }

  forImport() {
    let yupChain = yup
      .array()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return originalValue
          .trim()
          .split(' ')
          .map((value) => {
            return value;
          });
      });

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }
}
