import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';

function label(name) {
  return i18n(`entities.energyLocks.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.energyLocks.enumerators.${name}.${value}`);
}

const LOCK_STATUS = [
  { id: 'Locked', label: enumeratorLabel('lockStatus', 'locked') },
  { id: 'Locked and Tagged', label: enumeratorLabel('lockStatus', 'lockedAndTagged') },
  { id: 'Unlocked', label: enumeratorLabel('lockStatus', 'unlocked') },
]

const fields = {
  id: new IdField('id', label('id')),
  orgId: new RelationToOneField('orgId', label('orgId')),
  orgPlantId: new RelationToOneField('orgPlantId', label('orgPlantId')),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  assetId: new StringField('assetId', label('assetId'), {
    "required": true
  }),
  assetIdFilter: new RelationToOneField('assetId', label('assetId'), {
    "required": true
  }),
  locks: new StringField('locks', label('locks')),
  energyDistHierarchyId: new RelationToOneField('energyDistHierarchyId', label('energyDistHierarchyId'), {
    "required": true
  }),
  lastLockDate: new DateTimeField(
    'lastLockDate',
    label('lastLockDate'),
  ),
  employeeId: new RelationToOneField('employeeId', label('employeeId'), {
    "required": true
  }),
  lockIdentifierNum: new StringField('lockIdentifierNum', label('lockIdentifierNum'), {
    "required": true
  }),
  lockStatus: new EnumeratorField('lockStatus', label('lockStatus'), LOCK_STATUS, {
    "required": true
  }),
  date: new DateTimeField(
    'date',
    label('date'),
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
};

export default {
  fields, LOCK_STATUS
};
