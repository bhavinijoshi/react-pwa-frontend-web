import { Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { i18n } from 'i18n';
import actions from 'modules/document/list/documentListActions';
import selectors from 'modules/document/list/documentListSelectors';
import model from 'modules/document/documentModel';
import documentSelectors from 'modules/document/documentSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'view/shared/table/Pagination';
import Spinner from 'view/shared/Spinner';
import TableCellCustom from 'view/shared/table/TableCellCustom';
// import FilesListView from 'view/shared/table/FileListView';
// import DocumentCategoriesListItem from 'view/documentCategories/list/DocumentCategoriesListItem';

const { fields } = model;

class DocumentListTable extends Component {
  state = {
    recordIdToDestroy: null,
  };

  doChangeSort = (columnKey) => {
    const { dispatch, sorter } = this.props;

    const order =
      sorter.columnKey === columnKey &&
        sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        columnKey,
        order,
      }),
    );
  };

  doChangePagination = (pagination) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePagination(pagination));
  };

  render() {
    const {
      pagination,
      rows,
      loading,
      sorter,
      hasRows
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
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.docCategory.name}
                  label={fields.docCategory.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.name.name}
                  label={fields.name.label}
                />
                <TableCellCustom
                  label={fields.url.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.tagList.name}
                  label={fields.tagList.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.version.name}
                  label={fields.version.label}
                />
                <TableCellCustom
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.createdAt.name}
                  label={fields.createdAt.label}
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
                      {fields.docCategory.forView(
                        row[fields.docCategory.name]
                      )}

                    </TableCell>
                    <TableCell>
                      {fields.name.forView(
                        row[fields.name.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {/* <FilesListView value={row[fields.url.name]} /> */}
                    </TableCell>
                    <TableCell>
                      {fields.tagList.forView(
                        row[fields.tagList.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.version.forView(
                        row[fields.version.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.createdAt.forView(
                        row[fields.createdAt.name],
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
    loading:
      selectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasRows: selectors.selectHasRows(state),
    sorter: selectors.selectSorter(state),
    isAllSelected: selectors.selectIsAllSelected(state),
    hasPermissionToEdit: documentSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: documentSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(DocumentListTable);
