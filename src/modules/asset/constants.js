import { i18n } from 'i18n';

function enumeratorLabel(name, value) {
    return i18n(`entities.asset.enumerators.${name}.${value}`);
}

export const ASSET_TYPES = [
    // { id: 'ArcFlash', label: enumeratorLabel('assetType', 'ArcFlash') },
    { id: 'BleGateway', label: enumeratorLabel('assetType', 'BleGateway') },
    { id: 'BleBeacon', label: enumeratorLabel('assetType', 'BleBeacon') }
]

export const ASSET_TYPES_IDS = {
    // ArcFlash: "ArcFlash",
    BleGateway: "BleGateway",
    BleBeacon: "BleBeacon"
}
