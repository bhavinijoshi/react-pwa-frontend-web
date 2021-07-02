import actions from 'modules/lotoAssets/list/lotoAssetsListActions';
import _ from 'lodash'
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
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESETED) {
    return {
      ...initialData,
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
      offset: payload ? payload.offset + INITIAL_PAGE_SIZE : payload.offset,
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
    var rows = []
    if (_.isEmpty(state.filter)) {
      rows = (state.rows.length ? state.rows.concat(payload.rows) : payload.rows)
    } else {
      if (state.offset > INITIAL_PAGE_SIZE) {
        rows = (state.rows.length ? state.rows.concat(payload.rows) : payload.rows)
      } else {
        rows = payload.rows
      }
    }
    return {
      ...state,
      loading: false,
      rows: rows,
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
  return state;
};
