import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import integerField from 'modules/shared/fields/integerField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';

function label(name) {
  return i18n(`entities.lotoTickets.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.lotoTickets.enumerators.${name}.${value}`);
}

const TICKET_STATUS = [
  { id: 'Scheduled', label: enumeratorLabel('ticketStatus', 'Scheduled') },
  { id: 'InProgress', label: enumeratorLabel('ticketStatus', 'InProgress') },
  { id: 'Completed', label: enumeratorLabel('ticketStatus', 'Completed') },
  { id: 'Cancelled', label: enumeratorLabel('ticketStatus', 'Cancelled') },
]

export const TICKET_STATUS_IDS = {
  Scheduled: 'Scheduled',
  InProgress: 'InProgress',
  Completed: 'Completed',
  Cancelled: 'Cancelled'
}

const ALERT_TYPES = [
  { id: 'EMAIL', label: enumeratorLabel('lotoAlertTypes', 'EMAIL') },
  { id: 'SMS', label: enumeratorLabel('lotoAlertTypes', 'SMS') },
]

const fields = {
  id: new IdField('id', label('id')),
  orgId: new RelationToOneField('orgId', label('orgId'), {
    "required": true
  }),
  orgPlantId: new RelationToOneField('orgPlantId', label('orgPlantId'), {
    "required": true
  }),
  employeeId: new RelationToOneField('employeeId', label('employeeId'), {}),
  ticketNum: new integerField('ticketNum', label('ticketNum')),
  description: new StringField('description', label('description'), {}),
  reasonId: new RelationToOneField('reasonId', label('reasonId'), {
    "required": true
  }),
  scheduledStartDate: new DateTimeField('scheduledStartDate', label('scheduledStartDate'), { "required": true }),
  scheduledEndDate: new DateTimeField('scheduledEndDate', label('scheduledEndDate'), { "required": true }),
  assetsList: new RelationToManyField('assetsList', label('assetsList'), {
    "required": true
  }),
  employeesList: new RelationToManyField('employeesList', label('employeesList'), {
    "required": true
  }),
  ticketStatus: new EnumeratorField('ticketStatus', label('ticketStatus'), TICKET_STATUS, { "required": true }),
  type: new EnumeratorField('type', label('type'), ALERT_TYPES, {}),
  address: new StringField('address', label('address'), {}),
  requiredPPE: new RelationToManyField('requiredPPE', label('requiredPPE'), {}),
  requiredBarriers: new RelationToManyField('requiredBarriers', label('requiredBarriers'), {}),
  approvalList: new RelationToManyField('approvalList', label('approvalList'), {}),
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
  lastLockDate: new DateTimeField(
    'lastLockDate',
    label('lastLockDate'),
  ),
};

export default {
  fields
};
