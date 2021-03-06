import { i18n } from 'i18n';
import StringField from 'modules/shared/fields/stringField';
import IntegerField from 'modules/shared/fields/integerField'
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import ImagesField from 'modules/shared/fields/imagesField';
import BooleanField from 'modules/shared/fields/booleanField';
import StringArrayField from 'modules/shared/fields/stringArrayField';
import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';
import Roles from 'security/roles';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

class RolesField extends StringArrayField {
  constructor(name, label, config) {
    super(name, label, config);
    this.options = Roles.selectOptions;
  }

  get filteredOptions() {
    return Roles.optionsAccordingToRole()
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
            .map((value) => Roles.labelOf(value))
            .join(' ')
          : null,
      );
  }
}

class EmailsField extends StringArrayField {
  forForm() {
    let yupChain = yup
      .array()
      .label(this.label)
      .of(
        yup
          .string()
          .email(i18n('user.validations.email'))
          .label(i18n('user.fields.email'))
          .max(255)
          .required(),
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}

function label(name) {
  return i18n(`user.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  orgId: new RelationToOneField('orgId', label('orgId'), {}),
  orgPlantId: new RelationToOneField('orgPlantId', label('orgPlantId'), {}),
  firstName: new StringField(
    'firstName',
    label('firstName'),
    {
      max: 80,
    },
  ),
  authenticationUid: new StringField(
    'authenticationUid',
    label('authenticationUid'),
  ),
  lastName: new StringField('lastName', label('lastName'), {
    max: 175,
  }),
  password: new StringField('password', label('password'), {
    required: true,
  }),
  passwordIAM: new StringField('password', label('password'), {}),
  verifyCode: new IntegerField('verifyCode', label('verifyCode'), {
    required: true,
    // min: 6,
    // max: 8
  }),
  fullName: new StringField('fullName', label('fullName')),
  email: new StringField('email', label('email'), {
    required: true,
    max: 255,
  }),
  role: new EnumeratorField(
    'role',
    label('role'),
    Roles.selectOptions,
  ),
  twoFactorEnabled: new BooleanField(
    'twoFactorEnabled',
    label('twoFactorEnabled'),
  ),
  rememberMe: new BooleanField(
    'rememberMe',
    label('rememberMe'),
  ),
  disabledAsStatus: new BooleanField(
    'disabled',
    label('status'),
    {
      noLabel: i18n('user.enabled'),
      yesLabel: i18n('user.disabled'),
    },
  ),
  disabled: new BooleanField(
    'disabled',
    label('disabled'),
    {
      noLabel: i18n('user.enabled'),
      yesLabel: i18n('user.disabled'),
    },
  ),
  countryCode: new StringField(
    'countryCode',
    label('countryCode'),
    {},
  ),
  phoneNumber: new StringField(
    'phoneNumber',
    label('phoneNumber'),
    {
      max: 10,
    },
  ),
  orgPlant: new EnumeratorField('orgPlant', label('orgPlant'), [

  ], {
    'required': true
  }),
  employeeNum: new StringField('employeeNum', label('employeeNum'), {
    required: true,
    max: 175,
  }),
  orgPrefix: new StringField('orgPrefix', label('orgPrefix'), {
    required: true,
    max: 175,
  }),
  avatarsIam: new ImagesField(
    'avatars',
    label('avatars'),
    'user/avatars/iam',
    { max: 1 },
  ),
  avatarsProfile: new ImagesField(
    'avatars',
    label('avatars'),
    (id) => `user/avatars/profile/${id}`,
    { max: 1 },
  ),
  employee: new RelationToManyField('employee', label('employee'), {
    // required: true,
  },
    // "email"
  ),
  emails: new EmailsField('emails', label('emails'), {
    required: true,
  }),
  rolesRequired: new RolesField('roles', label('roles'), {
    required: true,
  }),
  roles: new RolesField('roles', label('roles')),
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
  roleUser: new GenericField('roleUser', label('roleUser')),
  status: new EnumeratorField('status', label('status'), [
    {
      id: 'enabled',
      label: i18n('user.enabled'),
    },
    {
      id: 'disabled',
      label: i18n('user.disabled'),
    },
  ]),
};

export default {
  fields,
};
