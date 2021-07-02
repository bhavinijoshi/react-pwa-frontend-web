import model from 'modules/asset/assetModel';

const { fields } = model;

export default [
  fields.id,
  fields.orgId,
  fields.orgPlantId,
  fields.orgSectionId,
  fields.orgAreaId,
  fields.orgSubAreaId,
  fields.name,
  fields.description,
  fields.assetType,
  fields.createdAt,
  fields.updatedAt
];
