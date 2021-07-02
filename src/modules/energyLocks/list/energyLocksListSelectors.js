import { createSelector } from 'reselect';

const selectRaw = (state) => state.energyLocks.list;

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

const selectCurrentLocksLoading = createSelector(
  [selectRaw],
  (raw) => raw.currentLocksLoading,
);

const selectCurrentLocksRows = createSelector(
  [selectRaw],
  (raw) => raw.currentLocksRows
);

const selectCurrentLocksCount = createSelector(
  [selectRaw],
  (raw) => raw.currentLocksCount,
);

const selectCurrentLocksHasRows = createSelector(
  [selectCurrentLocksCount],
  (count) => count > 0,
);

const selectCurrentLocksSorter = createSelector(
  [selectRaw],
  (raw) => raw.currentLocksSorter || {},
);

const selectCurrentLocksPagination = createSelector(
  [selectRaw, selectCurrentLocksCount],
  (raw, count) => {
    return {
      ...raw.currentLocksPagination,
      total: count,
    };
  },
);

const selectCurrentLocksFilter = createSelector(
  [selectRaw],
  (raw) => {
    return raw.currentLocksFilter;
  },
);

const selectCurrentLocksOrderBy = createSelector(
  [selectRaw],
  (raw) => {
    const sorter = raw.currentLocksSorter;

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

const selectCurrentLocksLimit = createSelector(
  [selectRaw],
  (raw) => {
    const pagination = raw.currentLocksPagination;
    return pagination.pageSize;
  },
);

const selectCurrentLocksOffset = createSelector(
  [selectRaw],
  (raw) => {
    const pagination = raw.currentLocksPagination;

    if (!pagination || !pagination.pageSize) {
      return 0;
    }

    const current = pagination.current || 1;

    return (current - 1) * pagination.pageSize;
  },
);

const selectLockHistoryLoading = createSelector(
  [selectRaw],
  (raw) => raw.lockHistoryLoading,
);

const selectLockHistoryRows = createSelector(
  [selectRaw],
  (raw) => raw.lockHistoryRows
);

const selectLockHistoryCount = createSelector(
  [selectRaw],
  (raw) => raw.lockHistoryCount,
);

const selectLockHistoryHasRows = createSelector(
  [selectLockHistoryCount],
  (count) => count > 0,
);

const selectLockHistorySorter = createSelector(
  [selectRaw],
  (raw) => raw.lockHistorySorter || {},
);

const selectLockHistoryPagination = createSelector(
  [selectRaw, selectLockHistoryCount],
  (raw, count) => {
    return {
      ...raw.lockHistoryPagination,
      total: count,
    };
  },
);

const selectLockHistoryFilter = createSelector(
  [selectRaw],
  (raw) => {
    return raw.lockHistoryFilter;
  },
);

const selectLockHistoryOrderBy = createSelector(
  [selectRaw],
  (raw) => {
    const sorter = raw.lockHistorySorter;

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

const selectLockHistoryLimit = createSelector(
  [selectRaw],
  (raw) => {
    const pagination = raw.lockHistoryPagination;
    return pagination.pageSize;
  },
);

const selectLockHistoryOffset = createSelector(
  [selectRaw],
  (raw) => {
    const pagination = raw.lockHistoryPagination;

    if (!pagination || !pagination.pageSize) {
      return 0;
    }

    const current = pagination.current || 1;

    return (current - 1) * pagination.pageSize;
  },
);

export default {
  selectLoading,
  selectRows,
  selectCount,
  selectOrderBy,
  selectLimit,
  selectFilter,
  selectOffset,
  selectPagination,
  selectSelectedKeys,
  selectSelectedRows,
  selectHasRows,
  selectExportLoading,
  selectIsAllSelected,
  selectSorter,
  selectCurrentLocksLoading,
  selectCurrentLocksRows,
  selectCurrentLocksCount,
  selectCurrentLocksFilter,
  selectCurrentLocksPagination,
  selectCurrentLocksSorter,
  selectCurrentLocksHasRows,
  selectCurrentLocksOrderBy,
  selectCurrentLocksLimit,
  selectCurrentLocksOffset,
  selectLockHistoryLoading,
  selectLockHistoryRows,
  selectLockHistoryCount,
  selectLockHistoryFilter,
  selectLockHistoryPagination,
  selectLockHistorySorter,
  selectLockHistoryHasRows,
  selectLockHistoryOrderBy,
  selectLockHistoryLimit,
  selectLockHistoryOffset
};
