import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import FilesField from 'modules/shared/fields/filesField';
import BooleanField from 'modules/shared/fields/booleanField';
// import { PPE_CATEGORY } from 'modules/arcFlashStandards/constants';
import model from 'modules/energyLocks/energyLocksModel';
const { LOCK_STATUS } = model;
function label(name) {
  return i18n(`entities.asset.fields.${name}`);
}

// const ppeCategories = PPE_CATEGORY.map(ppe => {
//   return { id: ppe.id, label: ppe.label }
// })

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true,
  }),
  description: new StringField('description', label('description'), {}),
  assetType: new RelationToOneField('assetType', label('assetType'), {
    "required": true
  }),
  assetCategory: new RelationToOneField('assetCategory', label('assetCategory')),
  orgId: new RelationToOneField('orgId', label('orgId'), {
    "required": true
  }),
  orgPlantId: new RelationToOneField('orgPlantId', label('orgPlantId'), {
    "required": true
  }),
  orgSectionId: new RelationToOneField('orgSectionId', label('orgSectionId'), {}),
  orgAreaId: new RelationToOneField('orgAreaId', label('orgAreaId'), {}),
  orgSubAreaId: new RelationToOneField('orgSubAreaId', label('orgSubAreaId'), {}),
  hasArcFlash: new BooleanField('hasArcFlash', label('hasArcFlash')),
  hasLOTO: new BooleanField('hasLOTO', label('hasLOTO')),
  lotoNote: new StringField('lotoNote', label('lotoNote')),
  lockoutApplicationProcess: new StringField('lockoutApplicationProcess', label('lockoutApplicationProcess')),
  lockoutRemovalProcess: new StringField('lockoutRemovalProcess', label('lockoutRemovalProcess')),
  //---------------------------------ARCFLASH---------------------------------
  deviceTypeId: new RelationToOneField('deviceTypeId', label('deviceTypeId'), {}),
  incidentEnergy: new DecimalField('incidentEnergy', label('incidentEnergy'), {}),
  workingDistance: new DecimalField('workingDistance', label('workingDistance'), {}),
  afBoundary: new DecimalField('afBoundary', label('afBoundary'), {}),
  shockHazard: new DecimalField('shockHazard', label('shockHazard'), {}),
  // ppeCategory: new EnumeratorField('ppeCategory', label('ppeCategory'), ppeCategories),
  standardsOrg: new RelationToOneField('standardsOrg', label('standardsOrg'), {}),
  analysisBy: new StringField('analysisBy', label('analysisBy'), {}),
  analysisInitialDate: new DateTimeField('analysisInitialDate', label('analysisInitialDate')),
  analysisLastUpdated: new DateTimeField('analysisLastUpdated', label('analysisLastUpdated')),
  analysisReviewDueDate: new DateTimeField('analysisReviewDueDate', label('analysisReviewDueDate')),
  warningLabelImageUrl: new FilesField('warningLabelImageUrl', label('warningLabelImageUrl'), 'arcFlashAssets/warningLabelUrl', {}),
  limitedApproachBoundary: new DecimalField('limitedApproachBoundary', label('limitedApproachBoundary'), {}),
  restrictedApproachBoundary: new DecimalField('restrictedApproachBoundary', label('restrictedApproachBoundary'), {}),
  prohibitedApproachBoundary: new DecimalField('prohibitedApproachBoundary', label('prohibitedApproachBoundary'), {}),
  predictedArcingCurrent: new DecimalField('predictedArcingCurrent', label('predictedArcingCurrent'), {}),
  arcDuration: new DecimalField('arcDuration', label('arcDuration'), {}),
  documents: new RelationToManyField('documents', label('documents'), {}),
  productType: new RelationToOneField('productType', label('productType'), {}),
  //----------------------------------------------------------------------
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
  //---------------------------------BLE GATEWAY---------------------------------
  Password: new StringField(
    'Password',
    label('Password')
  ),
  LastHeartbeat: new DateTimeField(
    'LastHeartbeat',
    label('LastHeartbeat')
  ),
  ipaddress: new StringField(
    'ipaddress',
    label('ipaddress')
  ),
  state: new StringField(
    'state',
    label('state')
  ),
  hostname: new StringField(
    'hostname',
    label('hostname')
  ),
  softwareVersion: new StringField(
    'softwareVersion',
    label('softwareVersion')
  ),
  environmentVersion: new StringField(
    'environmentVersion',
    label('environmentVersion')
  ),
  osVersion: new StringField(
    'osVersion',
    label('osVersion')
  ),
  latitude: new DecimalField(
    'latitude',
    label('Latitude')
  ),
  longitude: new DecimalField(
    'longitude',
    label('Longitude')
  ),
  xValue: new DecimalField(
    'xValue',
    label('X')
  ),
  yValue: new DecimalField(
    'yValue',
    label('Y')
  ),
  geoSubSiteId: new RelationToOneField('geoSubSiteId', label('location'), {}),
  deviceType: new StringField('deviceType', label('deviceType'), {
  }),
  deviceTypeName: new StringField('deviceTypeName', label('deviceTypeName'), {}),
  softwareUpdateStatus: new BooleanField(
    'updateAvailable',
    label('softwareUpdateStatus'),
    {
      noLabel: i18n('entities.asset.upToDate'),
      yesLabel: i18n('entities.asset.updateAvailable'),
    },
  ),
  CheckWifiIPAddress: new StringField(
    'CheckWifiIPAddress',
    label('CheckWifiIPAddress')
  ),
  //----------------------------------------------------------------------
  //---------------------------------Asset Mapping---------------------------------
  assetIdRequired: new RelationToOneField('assetId', label('assetId'), { "required": true }),
  onlyUnmapped: new BooleanField('onlyUnmapped', label('onlyUnmapped')),
  //----------------------------------------------------------------------
  //---------------------------------Energy Hierarchy---------------------------------
  selectedId: new StringField('selectedId', label('selectedId')),
  selectedAssets: new RelationToManyField('selectedAssets', label('selectedAssets')),
  selectedAsset: new RelationToOneField('selectedAsset', label('selectedAsset')),
  color: new StringField('color', label('color')),
  energyAssetType: new RelationToOneField('assetType', label('assetType')),
  isIsolationPoint: new BooleanField('isIsolationPoint', label('isIsolationPoint')),
  energySourceDesc: new RelationToOneField('energySourceDesc', label('energySourceDesc')),
  energySourceLocation: new RelationToOneField('energySourceLocation', label('energySourceLocation')),
  lockoutMethod: new RelationToOneField('lockoutMethod', label('lockoutMethod')),
  lockoutDevice: new RelationToOneField('lockoutDevice', label('lockoutDevice')),
  //---------------------------------LOTO Asset---------------------------------
  locks: new StringField('locks', label('locks')),
  lockStatus: new EnumeratorField('overallLockStatus', label('lockStatus'), LOCK_STATUS, {
    "required": true
  }),
  lotoHazardId: new RelationToOneField('lotoHazardId', label('lotoHazardId')),

};

export default {
  fields
};