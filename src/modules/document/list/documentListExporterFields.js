import model from 'modules/document/documentModel';

const { fields } = model;

export default [
  fields.id,
  fields.orgId,
  fields.orgPlantId,
  fields.orgSection,
  fields.orgAreaId,
  fields.orgSubAreaId,
  fields.docType,
  fields.name,
  fields.url,
  fields.tagList,
  fields.version,
  fields.createdAt,
  fields.updatedAt
];
