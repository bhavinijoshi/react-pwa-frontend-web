import React from "react";
import ColoredChip from "view/shared/ColoredChip";
import { i18n } from 'i18n'
import { Checkbox } from "@material-ui/core";
import EnergyTypesViewItem from 'view/shared/view/EnergyTypesViewItem'
import EnergyHierarchyViewItem from "view/shared/view/EnergyHierarchyViewItem";
import AssetViewItem from "view/shared/view/AssetViewItem";
export const getColumsForEnergyHierarchies = (
    isEditAssetPage
) => {
    return [
        { title: i18n('entities.energyHierarchy.fields.energyType'), sorting: false, render: rowData => <EnergyTypesViewItem value={rowData['energyType']} /> },
        { title: i18n('entities.asset.energyHierarchy'), sorting: false, render: rowData => <EnergyHierarchyViewItem value={rowData} /> },
        { title: i18n('entities.asset.fields.upstreamId'), sorting: false, render: rowData => <AssetViewItem value={rowData['rootAsset']} /> },
        {
            title: i18n('entities.asset.fields.isIsolationPoint'), sorting: false, field: 'isIsolationPoint',
            render: rowData => <ColoredChip
                color={rowData['isIsolationPoint'] ? 'green' : 'red'}
                label={rowData['isIsolationPoint'] ? 'Yes' : 'No'}
            />,
            ...(isEditAssetPage && {
                editComponent: props => (
                    <Checkbox
                        checked={props.value || false}
                        onChange={(e) => {
                            const newRowData = { ...props.rowData };
                            newRowData.isIsolationPoint = !!e.target.checked
                            props.onRowDataChange(newRowData)
                        }}
                        color="secondary"
                    />
                )
            })
        },
        { title: i18n('entities.asset.fields.energySourceDesc'), sorting: false, field: 'energySourceDesc', render: rowData => rowData.energySourceDesc?.name || '-', },
        {
            title: i18n('entities.asset.fields.energySourceLocation'),
            sorting: false,
            field: 'energySourceLocation',
            render: rowData => rowData.energySourceLocation?.name || '-',
        },
        {
            title: i18n('entities.asset.fields.lockoutMethod'),
            sorting: false,
            field: 'lockoutMethod',
            render: rowData => rowData.lockoutMethod?.name || '-',
        },
        {
            title: i18n('entities.asset.fields.lockoutDevice'),
            sorting: false,
            field: 'lockoutDevice',
            render: rowData => rowData.lockoutDevice?.name || '-',
        },
    ];
};