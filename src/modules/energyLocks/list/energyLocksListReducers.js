import actions from 'modules/energyLocks/list/energyLocksListActions';

const INITIAL_PAGE_SIZE = 10;

const initialData = {
  rows: [],
  count: 0,
  loading: false,
  filter: {},
  pagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  sorter: {},
  selectedKeys: [],

  currentLocksRows: [],
  currentLocksCount: 0,
  currentLocksLoading: false,
  currentLocksFilter: {},
  currentLocksPagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  currentLocksSorter: {},

  lockHistoryRows: [],
  lockHistoryCount: 0,
  lockHistoryLoading: false,
  lockHistoryFilter: {},
  lockHistoryPagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  lockHistorySorter: {},
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESETED) {
    return {
      ...state,
      rows: [],
      count: 0,
      loading: false,
      filter: {},
      pagination: {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
      sorter: {},
      selectedKeys: [],
    };
  }

  if (type === actions.TOGGLE_ONE_SELECTED) {
    let selectedKeys = state.selectedKeys;

    const exists = selectedKeys.includes(payload);

    if (exists) {
      selectedKeys = selectedKeys.filter(
        (key) => key !== payload,
      );
    } else {
      selectedKeys = [payload, ...selectedKeys];
    }

    return {
      ...state,
      selectedKeys,
    };
  }

  if (type === actions.TOGGLE_ALL_SELECTED) {
    const isAllSelected =
      (state.rows || []).length ===
      (state.selectedKeys || []).length;

    return {
      ...state,
      selectedKeys: isAllSelected
        ? []
        : state.rows.map((row) => row.id),
    };
  }

  if (type === actions.CLEAR_ALL_SELECTED) {
    return {
      ...state,
      selectedKeys: [],
    };
  }

  if (type === actions.PAGINATION_CHANGED) {
    return {
      ...state,
      pagination: payload || {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
    };
  }

  if (type === actions.SORTER_CHANGED) {
    return {
      ...state,
      sorter: payload || {},
    };
  }

  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
      selectedKeys: [],
      filter: payload ? payload.filter : {},
      pagination:
        payload && payload.keepPagination
          ? state.pagination
          : {
            current: 1,
            pageSize: INITIAL_PAGE_SIZE,
          },
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
      count: payload.count,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      rows: [],
      count: 0,
    };
  }

  if (type === actions.EXPORT_STARTED) {
    return {
      ...state,
      exportLoading: true,
    };
  }

  if (type === actions.EXPORT_SUCCESS) {
    return {
      ...state,
      exportLoading: false,
    };
  }

  if (type === actions.EXPORT_ERROR) {
    return {
      ...state,
      exportLoading: false,
    };
  }

  if (type === actions.CURRENT_LOCKS_PAGINATION_CHANGED) {
    return {
      ...state,
      currentLocksPagination: payload || {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
    };
  }

  if (type === actions.CURRENT_LOCKS_SORTER_CHANGED) {
    return {
      ...state,
      currentLocksSorter: payload || {},
    };
  }

  if (type === actions.CURRENT_LOCKS_FETCH_STARTED) {
    return {
      ...state,
      currentLocksLoading: true,
      currentLocksFilter: payload ? payload.filter : {},
      currentLocksPagination:
        payload && payload.keepPagination
          ? state.currentLocksPagination
          : {
            current: 1,
            pageSize: INITIAL_PAGE_SIZE,
          },
    };
  }

  if (type === actions.CURRENT_LOCKS_FETCH_SUCCESS) {
    return {
      ...state,
      currentLocksLoading: false,
      currentLocksRows: payload.rows,
      currentLocksCount: payload.count,
    };
  }

  if (type === actions.CURRENT_LOCKS_FETCH_ERROR) {
    return {
      ...state,
      currentLocksLoading: false,
      currentLocksRows: [],
      currentLocksCount: 0,
    };
  }

  if (type === actions.LOCK_HISTORY_PAGINATION_CHANGED) {
    return {
      ...state,
      lockHistoryPagination: payload || {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
    };
  }

  if (type === actions.LOCK_HISTORY_SORTER_CHANGED) {
    return {
      ...state,
      lockHistorySorter: payload || {},
    };
  }

  if (type === actions.LOCK_HISTORY_FETCH_STARTED) {
    return {
      ...state,
      lockHistoryLoading: true,
      lockHistoryFilter: payload ? payload.filter : {},
      lockHistoryPagination:
        payload && payload.keepPagination
          ? state.lockHistoryPagination
          : {
            current: 1,
            pageSize: INITIAL_PAGE_SIZE,
          },
    };
  }

  if (type === actions.LOCK_HISTORY_FETCH_SUCCESS) {
    return {
      ...state,
      lockHistoryLoading: false,
      lockHistoryRows: payload.rows,
      lockHistoryCount: payload.count,
    };
  }

  if (type === actions.LOCK_HISTORY_FETCH_ERROR) {
    return {
      ...state,
      lockHistoryLoading: false,
      lockHistoryRows: [],
      lockHistoryCount: 0,
    };
  }

  if (type === actions.LOCK_HISTORY_RESETED) {
    return {
      ...state,
      lockHistoryRows: [],
      lockHistoryCount: 0,
      lockHistoryLoading: false,
      lockHistoryFilter: {},
      lockHistoryPagination: {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
      lockHistorySorter: {}
    };
  }

  return state;
};
