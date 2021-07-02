import * as yup from 'yup';
import getStore from 'modules/store';
import authSelectors from 'modules/auth/authSelectors';

export default class ExporterSchema {
  constructor(fields) {
    this.fields = fields;
    this.yupSchema = this.buildSchema();
  }

  get labels() {
    const hasPermissionToReadPlant = authSelectors.selectPermissionToReadPlant(getStore().getState())
    const hasPermissionToReadOrg = authSelectors.selectPermissionToReadOrg(getStore().getState())

    return this.fields.map((field) => {
      if (field.name === "orgPlantId" && !hasPermissionToReadPlant) return false
      if (field.name === "orgId" && !hasPermissionToReadOrg) return false
      return field.label
    }).filter(Boolean);
  }

  labelOf(name) {
    const field = this.fields.find(
      (field) => field.name === name,
    );

    if (field) {
      return field.label;
    }

    return name;
  }

  buildSchema() {
    const shape = {};
    const hasPermissionToReadPlant = authSelectors.selectPermissionToReadPlant(getStore().getState())
    const hasPermissionToReadOrg = authSelectors.selectPermissionToReadOrg(getStore().getState())

    this.fields.forEach((field) => {
      if (
        (field.name !== "orgPlantId" && field.name !== "orgId") ||
        (field.name === "orgPlantId" && hasPermissionToReadPlant) ||
        (field.name === "orgId" && hasPermissionToReadOrg)
      ) {
        shape[field.name] = field.forExport();
      }
    });

    return yup
      .object()
      .shape(shape)
      .noUnknown(true);
  }

  cast(row) {
    return this.yupSchema.cast(row);
  }
}
