import { createSelector } from 'reselect';

const selectRaw = (state) => state.asset.list;

const selectToggleView = createSelector(
  [selectRaw],
  (raw) => raw.isShowView,
);

const selectRowToView = createSelector(
  [selectRaw],
  (raw) => raw.selectedRowToView
);

const selectLoading = createSelector(
  [selectRaw],
  (raw) => raw.loading,
);

const selectExportLoading = createSelector(
  [selectRaw],
  (raw) => raw.exportLoading,
);

const selectRows = createSelector(
  [selectRaw],
  (raw) => raw.rows,
);

const selectCount = createSelector(
  [selectRaw],
  (raw) => raw.count,
);

const selectHasRows = createSelector(
  [selectCount],
  (count) => count > 0,
);

const selectSorter = createSelector(
  [selectRaw],
  (raw) => raw.sorter || {},
);

const selectOrderBy = createSelector(
  [selectRaw],
  (raw) => {
    const sorter = raw.sorter;

    if (!sorter) {
      return null;
    }

    if (!sorter.columnKey) {
      return null;
    }

    let direction =
      sorter.order === 'desc' ? 'DESC' : 'ASC';

    return `${sorter.columnKey}_${direction}`;
  },
);

const selectFilter = createSelector(
  [selectRaw],
  (raw) => {
    return raw.filter;
  },
);

const selectBleGatewayFilter = createSelector(
  [selectRaw],
  (raw) => {
    return raw.bleGatewayFilter;
  },
);

const selectArcFlashFilter = createSelector(
  [selectRaw],
  (raw) => {
    return raw.arcFlashFilter;
  },
);

const selectLimit = createSelector(
  [selectRaw],
  (raw) => {
    const pagination = raw.pagination;
    return pagination.pageSize;
  },
);

const selectOffset = createSelector(
  [selectRaw],
  (raw) => {
    const pagination = raw.pagination;

    if (!pagination || !pagination.pageSize) {
      return 0;
    }

    const current = pagination.current || 1;

    return (current - 1) * pagination.pageSize;
  },
);

const selectPagination = createSelector(
  [selectRaw, selectCount],
  (raw, count) => {
    return {
      ...raw.pagination,
      total: count,
    };
  },
);

const selectSelectedKeys = createSelector(
  [selectRaw],
  (raw) => {
    return raw.selectedKeys;
  },
);

const selectSelectedRows = createSelector(
  [selectRaw, selectRows],
  (raw, rows) => {
    return rows.filter((row) =>
      raw.selectedKeys.includes(row.id),
    );
  },
);

const selectIsAllSelected = createSelector(
  [selectRows, selectSelectedKeys],
  (rows, selectedKeys) => {
    return rows.length === selectedKeys.length;
  },
);

export default {
  selectToggleView,
  selectRowToView,
  selectLoading,
  selectRows,
  selectCount,
  selectOrderBy,
  selectLimit,
  selectFilter,
  selectBleGatewayFilter,
  selectArcFlashFilter,
  selectOffset,
  selectPagination,
  selectSelectedKeys,
  selectSelectedRows,
  selectHasRows,
  selectExportLoading,
  selectIsAllSelected,
  selectSorter,
};
