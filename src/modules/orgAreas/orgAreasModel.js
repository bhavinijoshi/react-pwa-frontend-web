import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.orgAreas.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  description: new StringField('description', label('description'), {}),
  orgId: new RelationToOneField('orgId', label('orgId'), {
    "required": true
  }),
  orgPlantId: new RelationToOneField('orgPlantId', label('orgPlantId'), {
    "required": true
  }),
  orgSectionId: new RelationToOneField('orgSectionId', label('orgSectionId'), {
    "required": true
  }),
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
