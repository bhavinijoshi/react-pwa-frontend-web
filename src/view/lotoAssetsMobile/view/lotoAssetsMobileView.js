import model from 'modules/asset/assetModel';
import React, { Component, Fragment } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import _ from 'lodash';
import DocumentViewItem from 'view/shared/view/DocumentViewItem';
import { Button, Grid, withStyles } from '@material-ui/core';
import TextAreaViewItem from 'view/shared/view/TextAreaViewItem';
import { ASSET_TYPES_IDS } from 'modules/asset/constants';
import { i18n } from 'i18n';
import { decryptText, getIconsForTable, getLocalizationForTable } from 'utils'
import Message from 'view/shared/message';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import MaterialTable from 'material-table';
import { getColumsForEnergyHierarchies } from './Columns';

const localization = getLocalizationForTable()
const tableIcons = getIconsForTable()
const EnergyHierarchiesColums = getColumsForEnergyHierarchies()
const { fields } = model;

const styles = (theme) => ({
    indentation: {
        paddingLeft: "20px"
    },
    downloadSetings: {
        '@media (min-width:600px)': {
            margin: "20px 0 0",
        },
        '@media (max-width:600px)': {
            margin: "0 0 16px"
        }
    },
    energyHierarchyData: {
        marginBottom: "16px"
    }
})
class lotoAssetsMobileView extends Component {
    state = {
        isLoading: false,
        tableData: []
    }

    static getDerivedStateFromProps(props, state) {
        const { record } = props
        if (record && (record.energyDistHierarchies?.length !== state.tableData.length)) {
            if (record.energyHierarchyOrders?.length && record.energyDistHierarchies?.length) { //sort energy hierarchies
                const tableData = record.energyDistHierarchies
                const tableDataUpdate = []

                //sort based on energyHierarchyOrders
                record.energyHierarchyOrders.forEach(element => {
                    let energyHierarchy = tableData.find(ele => ele.id === element)
                    energyHierarchy && tableDataUpdate.push(energyHierarchy)
                });

                //find remaining records and push them at the last
                const tableDataRemain = tableData.filter(ele => !record.energyHierarchyOrders.includes(ele.id)) || []
                tableDataRemain.forEach(element => {
                    tableDataUpdate.push(element)
                });

                return {
                    tableData: tableDataUpdate
                }
            }
            return {
                tableData: record.energyDistHierarchies || []
            }
        } else {
            return null
        }
    }

    handleSaveToPC = async () => {
        try {
            const { record: { orgId, orgPlantId, id, _id, BLEGATEWAY } } = this.props
            this.setState({ isLoading: true })
            const password = BLEGATEWAY.Password ? await decryptText(BLEGATEWAY.Password) : ""
            this.setState({ isLoading: false })
            const fileData = JSON.stringify({
                orgId: orgId.id || orgId._id,
                orgPlantId: orgPlantId.id || orgPlantId._id,
                assetId: id || _id,
                bleGatewayPassword: password,
                debugMode: false,
                CheckWifiIPAddress: BLEGATEWAY?.CheckWifiIPAddress || '8.8.8.8'
            });
            const blob = new Blob([fileData], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'settings.json';
            link.href = url;
            link.click();
        } catch (error) {
            this.setState({ isLoading: false })
            Message.error(i18n('common.apiError') + " " + error)
        }
    }
    renderView() {
        const { record, classes } = this.props;
        const { isLoading, tableData } = this.state
        console.log("table data ", tableData);
        return (
            <Fragment>
                <Grid container>
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.id.label}
                            value={fields.id.forView(record.id)}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.name.label}
                            value={fields.name.forView(record.name)}
                        />
                    </Grid>
                    {record.ARCFLASH.description && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.description.label}
                            value={fields.description.forView(record.description)}
                        />
                    </Grid>}
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.assetCategory.label}
                            value={fields.assetCategory.forView(record.assetType?.assetCategory?.name)}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.assetType.label}
                            value={fields.assetType.forView(record.assetType?.name)}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.hasArcFlash.label}
                            value={fields.hasArcFlash.forView(record.hasArcFlash)}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.hasLOTO.label}
                            value={fields.hasLOTO.forView(record.hasLOTO)}
                        />
                    </Grid>

                    {!_.isEmpty(record.orgId) && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.orgId.label}
                            value={fields.orgId.forView(record.orgId.name)}
                        />
                    </Grid>
                    }
                    {!_.isEmpty(record.orgPlantId) && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.orgPlantId.label}
                            value={fields.orgPlantId.forView(record.orgPlantId.name)}
                        />
                    </Grid>
                    }

                    {!_.isEmpty(record.orgSectionId) && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.orgSectionId.label}
                            value={fields.orgSectionId.forView(record.orgSectionId.name)}
                        />
                    </Grid>}

                    {!_.isEmpty(record.orgAreaId) && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.orgAreaId.label}
                            value={fields.orgAreaId.forView(record.orgAreaId.name)}
                        />
                    </Grid>}
                    {!_.isEmpty(record.orgSubAreaId) && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.orgSubAreaId.label}
                            value={fields.orgSubAreaId.forView(record.orgSubAreaId.name)}
                        />
                    </Grid>}
                    {Boolean(record.documents?.length) && <Grid item lg={4} md={6} xs={12}>
                        <DocumentViewItem
                            label={fields.documents.label}
                            value={fields.documents.forView(record.documents)}
                        />
                    </Grid>}
                    {record.lotoNote && <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.lotoNote.label}
                            value={fields.lotoNote.forView(record.lotoNote)}
                        />
                    </Grid>}
                    {(record.lockoutApplicationProcess || record.lockoutRemovalProcess) && <Grid container>
                        {record.lockoutApplicationProcess && <Grid item xs={12}>
                            <TextViewItem
                                label={fields.lockoutApplicationProcess.label}
                                value={fields.lockoutApplicationProcess.forView(record.lockoutApplicationProcess)}
                            />
                        </Grid>}
                        {record.lockoutRemovalProcess && <Grid item xs={12}>
                            <TextViewItem
                                label={fields.lockoutRemovalProcess.label}
                                value={fields.lockoutRemovalProcess.forView(record.lockoutRemovalProcess)}
                            />
                        </Grid>}
                    </Grid>}
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.createdAt.label}
                            value={fields.createdAt.forView(record.createdAt)}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <TextViewItem
                            label={fields.updatedAt.label}
                            value={fields.updatedAt.forView(record.updatedAt)}
                        />
                    </Grid>
                </Grid>
                {Boolean(tableData?.length) && <div className={classes.energyHierarchyData}>
                    <MaterialTable
                        columns={EnergyHierarchiesColums}
                        data={tableData}
                        title={i18n('entities.asset.energySources')}
                        options={{
                            headerStyle: {
                                backgroundColor: '#2196f3',
                                color: 'white',
                            },
                        }}
                        icons={tableIcons}
                        localization={localization}
                    />
                </div>}

                {record.hasArcFlash && <h3>Arc Flash Properties</h3>}

                {Boolean(Object.entries(record.ARCFLASH || {}).length) && <div className={classes.indentation}>
                    <Grid container>
                        <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.deviceTypeId.label}
                                value={fields.deviceTypeId.forView(record.ARCFLASH.deviceTypeId.name)}
                            />
                        </Grid>
                        {record.ARCFLASH.incidentEnergy && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.incidentEnergy.label}
                            value={fields.incidentEnergy.forView(record.ARCFLASH.incidentEnergy + ' cal/cm2')}
                        /></Grid>}

                        {record.ARCFLASH.workingDistance && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.workingDistance.label}
                            value={fields.workingDistance.forView(record.ARCFLASH.workingDistance + ' cm')}
                        /></Grid>}

                        {record.ARCFLASH.afBoundary && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.afBoundary.label}
                            value={fields.afBoundary.forView(record.ARCFLASH.afBoundary + ' cm')}
                        /></Grid>}

                        {record.ARCFLASH.arcDuration && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.arcDuration.label}
                            value={fields.arcDuration.forView(record.ARCFLASH.arcDuration)}
                        /></Grid>}

                        {record.ARCFLASH.predictedArcingCurrent && <Grid item lg={4} md={6} xs={12}> <TextViewItem
                            label={fields.predictedArcingCurrent.label}
                            value={fields.predictedArcingCurrent.forView(record.ARCFLASH.predictedArcingCurrent)}
                        /></Grid>}

                        {record.ARCFLASH.shockHazard && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.shockHazard.label}
                            value={fields.shockHazard.forView(record.ARCFLASH.shockHazard + ' VAC')}
                        /></Grid>}

                        {record.ARCFLASH.limitedApproachBoundary && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.limitedApproachBoundary.label}
                            value={fields.limitedApproachBoundary.forView(record.ARCFLASH.limitedApproachBoundary + ' cm')}
                        /></Grid>}

                        {record.ARCFLASH.restrictedApproachBoundary && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.restrictedApproachBoundary.label}
                            value={fields.restrictedApproachBoundary.forView(record.ARCFLASH.restrictedApproachBoundary + ' cm')}
                        /></Grid>}

                        {record.ARCFLASH.prohibitedApproachBoundary && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.prohibitedApproachBoundary.label}
                            value={fields.prohibitedApproachBoundary.forView(record.ARCFLASH.prohibitedApproachBoundary + ' cm')}
                        /></Grid>}

                        {record.ARCFLASH.ppeCategory && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.ppeCategory.label}
                            value={fields.ppeCategory.forView(record.ARCFLASH.ppeCategory)}
                        />
                        </Grid>}
                        {record.ARCFLASH.standardsOrg && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.standardsOrg.label}
                            value={fields.standardsOrg.forView(record.ARCFLASH.standardsOrg)}
                        />
                        </Grid>}
                        {record.ARCFLASH.analysisBy && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.analysisBy.label}
                            value={fields.analysisBy.forView(record.ARCFLASH.analysisBy)}
                        />
                        </Grid>}
                        {record.ARCFLASH.analysisInitialDate && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.analysisInitialDate.label}
                            value={fields.analysisInitialDate.forView(record.ARCFLASH.analysisInitialDate)}
                        />
                        </Grid>}
                        {record.ARCFLASH.analysisLastUpdated && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.analysisLastUpdated.label}
                            value={fields.analysisLastUpdated.forView(record.ARCFLASH.analysisLastUpdated)}
                        />
                        </Grid>}
                        {record.ARCFLASH.analysisReviewDueDate && <Grid item lg={4} md={6} xs={12}><TextViewItem
                            label={fields.analysisReviewDueDate.label}
                            value={fields.analysisReviewDueDate.forView(record.ARCFLASH.analysisReviewDueDate)}
                        />
                        </Grid>}
                        {record.ARCFLASH.warningLabelImageUrl && <Grid item lg={4} md={6} xs={12}><ImagesViewItem
                            label={fields.warningLabelImageUrl.label}
                            value={fields.warningLabelImageUrl.forView(record.ARCFLASH.warningLabelImageUrl)}
                        /></Grid>}
                    </Grid>
                </div>
                }

                {record.assetType === ASSET_TYPES_IDS.BleGateway &&
                    <Grid container>
                        <Grid item md={2} sm={5} xs={12}>
                            <h3>BLE Gateway Properties</h3>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} className={classes.downloadSetings}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleSaveToPC}
                                disabled={isLoading}
                            >
                                {i18n(`entities.asset.view.downloadSetings`)}
                            </Button>
                        </Grid>
                    </Grid>}

                {Boolean(Object.entries(record.BLEGATEWAY || {}).length) && <div className={classes.indentation}>
                    <Grid container>
                        {record.BLEGATEWAY.CheckWifiIPAddress && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.CheckWifiIPAddress.label}
                                value={fields.CheckWifiIPAddress.forView(record.BLEGATEWAY.CheckWifiIPAddress)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.LastHeartbeat && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.LastHeartbeat.label}
                                value={fields.LastHeartbeat.forView(record.BLEGATEWAY.LastHeartbeat)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.ipaddress && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.ipaddress.label}
                                value={fields.ipaddress.forView(record.BLEGATEWAY.ipaddress)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.state && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.state.label}
                                value={fields.state.forView(record.BLEGATEWAY.state)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.hostname && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.hostname.label}
                                value={fields.hostname.forView(record.BLEGATEWAY.hostname)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.softwareVersion && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.softwareVersion.label}
                                value={fields.softwareVersion.forView(record.BLEGATEWAY.softwareVersion)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.osVersion && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.osVersion.label}
                                value={fields.osVersion.forView(record.BLEGATEWAY.osVersion)}
                            />
                        </Grid>}
                        {record.BLEGATEWAY.environmentVersion && <Grid item lg={4} md={6} xs={12}>
                            <TextAreaViewItem
                                label={fields.environmentVersion.label}
                                value={fields.environmentVersion.forView(record.BLEGATEWAY.environmentVersion)}
                            />
                        </Grid>}
                    </Grid>
                </div>
                }
            </Fragment>
        );
    }

    render() {
        const { record, loading } = this.props;

        if (loading || !record) {
            return <Spinner />;
        }

        return this.renderView();
    }
}

export default withStyles(styles)(lotoAssetsMobileView);
