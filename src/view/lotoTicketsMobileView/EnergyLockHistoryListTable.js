import { Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { i18n } from 'i18n';
import actions from 'modules/energyLocks/list/energyLocksListActions';
import selectors from 'modules/energyLocks/list/energyLocksListSelectors';
import model from 'modules/energyLocks/energyLocksModel';
import energyLocksSelectors from 'modules/energyLocks/energyLocksSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'view/shared/table/Pagination';
import Spinner from 'view/shared/Spinner';
import TableCellCustom from 'view/shared/table/TableCellCustom';
import EmployeeListItem from 'view/shared/view/EmployeeViewItem';
import energyLockActions from 'modules/energyLocks/list/energyLocksListActions';
import authSelectors from 'modules/auth/authSelectors';
const { fields } = model;
class EnergyLockHistoryListTable extends Component {

  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    dispatch(energyLockActions.doFetchLockHistory({ "employeeId": currentUser.employeeId }));
  }

  doChangeSort = (columnKey) => {
    const { dispatch, sorter } = this.props;

    const order =
      sorter.columnKey === columnKey &&
        sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSortLockHistory({
        columnKey,
        order,
      }),
    );
  };

  doChangePagination = (pagination) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePaginationLockHistory(pagination));
  };

  render() {
    const {
      pagination,
      rows,
      loading,
      sorter,
      hasRows,
    } = this.props;
    return (
      <React.Fragment>
        <Box
          style={{
            display: 'block',
            width: '100%',
            overflowX: 'auto',
          }}
        >
          <Table
            style={{
              borderRadius: '5px',
              border: '1px solid rgb(224, 224, 224)',
              borderCollapse: 'initial',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCellCustom
                  onSort={() => this.doChangeSort(fields.energyDistHierarchyId.name + '.name')}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.energyDistHierarchyId.name}
                  label={fields.energyDistHierarchyId.label}
                />
                <TableCellCustom
                  onSort={() => this.doChangeSort(fields.assetId.name + '.name')}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.assetId.name}
                  label={fields.assetId.label}
                />
                <TableCellCustom
                  onSort={() => this.doChangeSort(fields.employeeId.name + '.lastName')}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.employeeId.name}
                  label={fields.employeeId.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.lockIdentifierNum.name}
                  label={fields.lockIdentifierNum.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.lockStatus.name}
                  label={fields.lockStatus.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.date.name}
                  label={fields.date.label}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={100}>
                    <Spinner />
                  </TableCell>
                </TableRow>
              )}
              {!loading && !hasRows && (
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
              {!loading &&
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      {row.energyDistHierarchyId.name}
                    </TableCell>
                    <TableCell>
                      {row.assetId.name}
                    </TableCell>
                    <TableCell>
                      <EmployeeListItem value={row[fields.employeeId.name]} />
                    </TableCell>
                    <TableCell>
                      {fields.lockIdentifierNum.forView(
                        row[fields.lockIdentifierNum.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.lockStatus.forView(
                        row[fields.lockStatus.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.date.forView(
                        row[fields.date.name],
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
        <Pagination
          onChange={this.doChangePagination}
          pagination={pagination}
        />
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLockHistoryLoading(state),
    rows: selectors.selectLockHistoryRows(state),
    pagination: selectors.selectLockHistoryPagination(state),
    filter: selectors.selectLockHistoryFilter(state),
    hasRows: selectors.selectLockHistoryHasRows(state),
    sorter: selectors.selectLockHistorySorter(state),
    hasPermissionToEdit: energyLocksSelectors.selectPermissionToEdit(state),
    currentUser: authSelectors.selectCurrentUser(state),
  };
}

export default connect(select)(EnergyLockHistoryListTable);
