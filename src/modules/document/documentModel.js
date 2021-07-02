import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import FilesField from 'modules/shared/fields/filesField';

function label(name) {
  return i18n(`entities.document.fields.${name}`);
}

const DOC_TYPES = [
  { id: 'Pandemic', label: enumeratorLabel('docType', 'Pandemic') },
  { id: 'ArcFlash', label: enumeratorLabel('docType', 'ArcFlash') },
  { id: 'LOTO', label: enumeratorLabel('docType', 'LOTO') },
]

export const DOC_TYPES_IDS = {
  Pandemic: 'Pandemic',
  ArcFlash: 'ArcFlash',
  LOTO: 'LOTO',
}

function enumeratorLabel(name, value) {
  return i18n(`entities.document.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  orgId: new RelationToOneField('orgId', label('orgId'), {
    "required": true
  }),
  docCategory: new RelationToOneField('docCategory', label('docCategory'), { "required": true }),
  sourceId: new StringField('sourceId', label('sourceId')),
  docType: new EnumeratorField('docType', label('docType'), DOC_TYPES, {
    "required": true
  }),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  url: new FilesField('url', label('url'), 'document/url', {
    "required": true,
    formats: ['pdf']
  }),
  tagList: new StringField('tagList', label('tagList'), {}),
  version: new StringField('version', label('version'), {}),
  orgPlantId: new RelationToOneField('orgPlantId', label('orgPlantId'), {}),
  orgSection: new RelationToOneField('orgSection', label('orgSection'), {}),
  orgAreaId: new RelationToOneField('orgAreaId', label('orgAreaId'), {}),
  orgSubAreaId: new RelationToOneField('orgSubAreaId', label('orgSubAreaId'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export default {
  fields,
};
