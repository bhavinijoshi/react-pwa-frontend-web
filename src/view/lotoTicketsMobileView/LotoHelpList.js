import React, { Component } from 'react';
import { i18n } from 'i18n';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class LotoHelpList extends Component {
    render() {
        const { classes } = this.props
        function createData(step, description, state) {
            return { step, description, state };
        }
        const lockingDeviceTable = () => {
            const rows = [
                createData(i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row1.step'), i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row1.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row2.step'), i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row2.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row3.step'), i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row3.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row4.step'), i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row4.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row5.step'), i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row5.description'), i18n('entities.lotoTickets.helpTable.lockingDeviceTable.rows.row5.state')),
            ];
            return (
                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBorder} align="left" colSpan={2}> {i18n('entities.lotoTickets.helpTable.lockingDeviceTable.header.column1')} </TableCell>
                                <TableCell className={classes.tableBorder} align="left">{i18n('entities.lotoTickets.helpTable.lockingDeviceTable.header.column2')} </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, key) => (
                                <TableRow key={key}>
                                    <TableCell  className={classes.tableBorder +' '+classes.width10} align="left">
                                        {row.step}
                                    </TableCell>
                                    <TableCell  className={classes.tableBorder+' '+classes.width40} align="left">{row.description}</TableCell>
                                    <TableCell  className={classes.tableBorder+' '+classes.width50} align="left">{row.state}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
        const removingLockWithQRTable = () => {
            const rows = [
                createData(i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row1.step'), i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row1.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row2.step'), i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row2.description'), i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row2.state')),
                createData(i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row3.step'), i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row3.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row4.step'), i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.rows.row4.description'), ''),
                 ];
            return (
                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead >
                            <TableRow>
                                <TableCell className={classes.tableBorder} align="left" colSpan={2}>{i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.header.column1')} </TableCell>
                                <TableCell className={classes.tableBorder} align="left">{i18n('entities.lotoTickets.helpTable.removingLockWithQRTable.header.column2')}   </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, key) => (
                                <TableRow key={key}>
                                    <TableCell  className={classes.tableBorder+' '+classes.width10} align="left">
                                        {row.step}
                                    </TableCell>
                                    <TableCell  className={classes.tableBorder+' '+classes.width40} align="left">{row.description}</TableCell>
                                    <TableCell  className={classes.tableBorder+' '+classes.width50} align="left">{row.state}</TableCell>
                                 </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
        const removingLockManuallyTable = () => {
            const rows = [
                createData(i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row1.step'), i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row1.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row2.step'), i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row2.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row3.step'), i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row3.description'), ''),
                createData(i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row4.step'), i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row4.description'), i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row4.state')),
                createData(i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row5.step'), i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.rows.row5.description'), ''),
                  ];
            return (
                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBorder} align="left" colSpan={2}>{i18n('entities.lotoTickets.helpTable.removingLockManuallyTable.header.column1')} </TableCell>
                                <TableCell className={classes.tableBorder} align="left"> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, key) => (
                                <TableRow key={key}>
                                    <TableCell  className={classes.tableBorder+' '+classes.width10} align="left">
                                        {row.step}
                                    </TableCell>
                                    <TableCell className={classes.tableBorder+' '+classes.width40} align="left">{row.description}</TableCell>
                                    <TableCell className={classes.tableBorder+' '+classes.width50} align="left">{row.state}</TableCell>
                               </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
        return (
            <React.Fragment>
                {lockingDeviceTable()}
                {removingLockWithQRTable()}
                {removingLockManuallyTable()}
            </React.Fragment>
        );
    }
}
export default LotoHelpList;
