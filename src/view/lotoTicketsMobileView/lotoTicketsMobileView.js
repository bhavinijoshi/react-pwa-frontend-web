import model from 'modules/lotoTicketsMobileView/lotoTicketsMobileViewsModel';
import React, { Component, Fragment } from 'react';
import Spinner from 'view/shared/Spinner';
import { MUITabs, TabPanel } from 'view/shared/MUITabPanel';
import { Grid } from '@material-ui/core';
import { i18n } from 'i18n';
import TextViewItem from 'view/shared/view/TextViewItem';
import EmployeeViewItem from 'view/shared/view/EmployeeViewItem';
import TextViewListItem from 'view/shared/view/TextViewListItem';
import _ from 'lodash';
import LotoHelpList from "view/lotoTicketsMobileView/LotoHelpList";
import LotoCurrentLocksList from "view/lotoTicketsMobileView/LotoCurrentLocksList";
import EnergyLockHistoryListTable from 'view/lotoTicketsMobileView/EnergyLockHistoryListTable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const { fields } = model;
class LotoTicketsMobileView extends Component {
    state = {
        selectedIndex: 0,
    }
    handleTabChange = (_, selectedIndex) => {
        this.setState({ selectedIndex })
    }
    createData(asset, note) {
        return { asset, note };
    }
    lotoNotesTable = (asset) => {
        let rows = [];
        rows = asset.map((row) => {
            return this.createData(row.name, row.lotoNote)
        })
        const { classes } = this.props
        return (
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableBorder} align="left" > {i18n('entities.lotoTickets.asset')} </TableCell>
                            <TableCell className={classes.tableBorder} align="left">{i18n('entities.lotoTickets.note')} </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length <= 0 && (
                            <TableRow>
                                <TableCell colSpan={100}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {i18n('table.noData')}
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                        {rows.map((row, key) => (
                            <TableRow key={key}>
                                <TableCell className={classes.tableBorder + ' ' + classes.width40} align="left">{row.asset}</TableCell>
                                <TableCell className={classes.tableBorder + ' ' + classes.width50} align="left">{row.note}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    createDocumentData(name, url) {
        return { name, url };
    }
    doumentsTable = (documents) => {
        let rows = [];
        rows = documents.map((row) => {
            return this.createDocumentData(row.name, row.url)
        })
        const { classes } = this.props
        return (
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableBorder} align="left" > {i18n('entities.lotoTickets.documentName')} </TableCell>
                            <TableCell className={classes.tableBorder} align="left">{i18n('entities.lotoTickets.documentUrl')} </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length <= 0 && (
                            <TableRow>
                                <TableCell colSpan={100}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {i18n('table.noData')}
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                        {rows.map((row, key) => (
                            <TableRow key={key}>
                                <TableCell className={classes.tableBorder + ' ' + classes.width40} align="left">{row.name}</TableCell>
                                <TableCell className={classes.tableBorder + ' ' + classes.width50} align="left">
                                    {row.url.map((value, key) => (
                                        <>
                                            <a href={value.publicUrl} target="_blank">{value.name}</a>
                                            <span> {row.url.length === (key + 1) || row.url.length === 1 ? '' : ' , '}</span>
                                        </>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    renderView() {
        const { record,
            classes
        } = this.props;
        return (
            <Fragment>
                <MUITabs
                    selectedIndex={this.state.selectedIndex}
                    onChange={(_, selectedIndex) => this.handleTabChange(_, selectedIndex)}
                    tabNames={[
                        i18n('common.general'),
                        i18n('common.locks'),
                        i18n('common.lockHistory')
                    ]}
                />
                <TabPanel value={this.state.selectedIndex} index={0}>
                    <Grid container>
                        {!_.isEmpty(record.id) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.id.label}
                                value={fields.id.forView(record.id)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.ticketNum) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.ticketNum.label}
                                value={fields.ticketNum.forView(record.ticketNum)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.employeeId) && <Grid item lg={4} md={6} xs={12}>
                            <EmployeeViewItem
                                label={fields.employeeId.label}
                                value={fields.employeeId.forView(record.employeeId)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.ticketStatus) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.ticketStatus.label}
                                value={fields.ticketStatus.forView(record.ticketStatus)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.description) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.description.label}
                                value={fields.description.forView(record.description)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.reasonId.name) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.reasonId.label}
                                value={fields.reasonId.forView(record.reasonId.name)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.scheduledStartDate) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.scheduledStartDate.label}
                                value={fields.scheduledStartDate.forView(record.scheduledStartDate)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.scheduledEndDate) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.scheduledEndDate.label}
                                value={fields.scheduledEndDate.forView(record.scheduledEndDate)}
                            />
                        </Grid>}
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
                        {!_.isEmpty(record.assetsList) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewListItem
                                label={fields.assetsList.label}
                                value={fields.assetsList.forView(record.assetsList)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.employeesList) && <Grid item lg={4} md={6} xs={12}>
                            <EmployeeViewItem
                                label={fields.employeesList.label}
                                value={fields.employeesList.forView(record.employeesList)}
                            />
                        </Grid>
                        }
                        {!_.isEmpty(record.requiredPPE) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewListItem
                                label={fields.requiredPPE.label}
                                value={fields.requiredPPE.forView(record.requiredPPE)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.requiredBarriers) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewListItem
                                label={fields.requiredBarriers.label}
                                value={fields.requiredBarriers.forView(record.requiredBarriers)}
                            />
                        </Grid>
                        }
                        {!_.isEmpty(record.createdAt) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.createdAt.label}
                                value={fields.createdAt.forView(record.createdAt)}
                            />
                        </Grid>}
                        {!_.isEmpty(record.updatedAt) && <Grid item lg={4} md={6} xs={12}>
                            <TextViewItem
                                label={fields.updatedAt.label}
                                value={fields.updatedAt.forView(record.updatedAt)}
                            />
                        </Grid>}
                    </Grid>
                    <h4> {i18n('entities.lotoTickets.lotoNotes')}</h4>
                    {this.lotoNotesTable(record.assetsList)}
                    <h4> {i18n('entities.lotoTickets.documents')}</h4>
                    {this.doumentsTable(record.documents)}
                    <h4> {i18n('common.help')}</h4>
                    <LotoHelpList classes={classes} />
                </TabPanel>
                <TabPanel value={this.state.selectedIndex} index={1}>
                    <LotoCurrentLocksList record={record} recordId={this.props.recordId} classes={classes} />
                </TabPanel>
                <TabPanel value={this.state.selectedIndex} index={2}>
                    <EnergyLockHistoryListTable />
                </TabPanel>
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

export default LotoTicketsMobileView;
