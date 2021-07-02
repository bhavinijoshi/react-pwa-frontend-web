import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import ImporterRowStatus from 'view/shared/importer/ImporterRowStatus';
import Pagination from 'view/shared/table/Pagination';
import TableCellCustom from 'view/shared/table/TableCellCustom';
import {
  TableBody,
  TableRow,
  TableCell,
  Table,
  Box,
  TableHead,
} from '@material-ui/core';
import authSelectors from 'modules/auth/authSelectors';

export default (selectors, actions, fields, extraFields) => {
  class ImporterList extends Component {

    componentWillUnmount() {
      const { dispatch } = this.props;
      dispatch(actions.doReset())
    }

    labelDisplayedRows = (from, to, count) => {
      const {
        importedRowsCount,
        pendingRowsCount,
        errorRowsCount,
      } = this.props;
      return i18n(
        'importer.total',
        importedRowsCount,
        pendingRowsCount,
        errorRowsCount,
      );
    };

    doChangeSort = (columnKey) => {
      const { dispatch, sorter, rows } = this.props;

      const order =
        sorter.columnKey === columnKey &&
          sorter.order === 'asc'
          ? 'desc'
          : 'asc';

      dispatch(
        actions.doChangeSort(rows, {
          columnKey,
          order,
        }),
      );
    };

    doChangePagination = (pagination) => {
      const { dispatch } = this.props;
      dispatch(actions.doChangePagination(pagination));
    };

    getAllowedImportFields = (importFields, hasPermissionToReadOrg, hasPermissionToReadPlant) => {
      importFields = importFields.filter(function (field) { return field !== undefined; });
      return importFields.filter(field => {
        if (field.name === "orgPlantId" && !hasPermissionToReadPlant) return false
        if (field.name === "orgId" && !hasPermissionToReadOrg) return false
        return true
      })
    }

    render() {
      const {
        currentPageRows,
        pagination,
        sorter,
        hasPermissionToReadOrg,
        hasPermissionToReadPlant
      } = this.props;
      const allowedImportFields = this.getAllowedImportFields(fields, hasPermissionToReadOrg, hasPermissionToReadPlant)
      const allowedExtraImportFields = this.getAllowedImportFields(extraFields, hasPermissionToReadOrg, hasPermissionToReadPlant)
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
                    onSort={this.doChangeSort}
                    hasRows={true}
                    sorter={sorter}
                    name="_line"
                    label={i18n('importer.line')}
                  />
                  {allowedImportFields.map((schemaItem) => (
                    <TableCellCustom
                      key={schemaItem.name}
                      onSort={this.doChangeSort}
                      hasRows={true}
                      sorter={sorter}
                      name={schemaItem.name}
                      label={schemaItem.label}
                    />
                  ))}
                  {allowedExtraImportFields.map((schemaItem) => (
                    <TableCellCustom
                      key={schemaItem.name}
                      onSort={this.doChangeSort}
                      hasRows={true}
                      sorter={sorter}
                      name={schemaItem.name}
                      label={schemaItem.label}
                    />
                  ))}
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={true}
                    sorter={sorter}
                    name="_status"
                    label={i18n('importer.status')}
                  />
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPageRows.map((row) => (
                  <TableRow key={row._line}>
                    <TableCell>{row._line}</TableCell>
                    {allowedImportFields.map((schemaItem) => (
                      <TableCell key={schemaItem.name}>
                        {row[schemaItem.name]}
                      </TableCell>
                    ))}
                    {allowedExtraImportFields.map((schemaItem) => (
                      <TableCell key={schemaItem.name}>
                        {row[schemaItem.name]}
                      </TableCell>
                    ))}
                    <TableCell>
                      <ImporterRowStatus
                        value={row._status}
                        errorMessage={row._errorMessage}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          <Pagination
            onChange={this.doChangePagination}
            pagination={pagination}
            labelDisplayedRows={this.labelDisplayedRows}
          />
        </React.Fragment>
      );
    }
  }

  function select(state) {
    return {
      rows: selectors.selectRows(state),
      currentPageRows: selectors.selectCurrentPageRows(
        state,
      ),
      pendingRowsCount: selectors.selectPendingRowsCount(
        state,
      ),
      errorRowsCount: selectors.selectErrorRowsCount(state),
      importedRowsCount: selectors.selectImportedRowsCount(
        state,
      ),
      sorter: selectors.selectSorter(state),
      pagination: selectors.selectPagination(state),
      hasPermissionToReadPlant: authSelectors.selectPermissionToReadPlant(state),
      hasPermissionToReadOrg: authSelectors.selectPermissionToReadOrg(state),
    };
  }

  return connect(select)(ImporterList);
};
