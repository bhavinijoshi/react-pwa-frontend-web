import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';

export default class StringArrayField extends GenericField {
  constructor(
    name,
    label,
    {
      required = false,
      min = undefined,
      max = undefined,
      delimiter = ' '
    } = {},
  ) {
    super(name, label);

    this.required = required;
    this.min = min;
    this.max = max;
    this.delimiter = delimiter;
  }

  forFormInitialValue(value) {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  }

  forForm() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label);

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

  forFilter() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return originalValue;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return [originalValue];
      });

    return yupChain;
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .label(this.label)
      .transform((value) =>
        Array.isArray(value)
          ? value
          : (value || '')
            .trim()
            .split(this.delimiter)
            .filter((item) => !!item)
            .map((item) => item.trim()),
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forExport() {
    let yupChain = yup.mixed().label(this.label);
    return yupChain;
  }
}
