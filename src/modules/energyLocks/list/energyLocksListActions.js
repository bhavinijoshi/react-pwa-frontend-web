import EnergyLocksService from 'modules/energyLocks/energyLocksService';
import selectors from 'modules/energyLocks/list/energyLocksListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/energyLocks/list/energyLocksListExporterFields';
import Errors from 'modules/shared/error/errors';
import Exporter from 'modules/shared/exporter/exporter';

const prefix = 'ENERGYLOCKS_LIST';

const actions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  CURRENT_LOCKS_FETCH_STARTED: `${prefix}_CURRENT_LOCKS_FETCH_STARTED`,
  CURRENT_LOCKS_FETCH_SUCCESS: `${prefix}_CURRENT_LOCKS_FETCH_SUCCESS`,
  CURRENT_LOCKS_FETCH_ERROR: `${prefix}_CURRENT_LOCKS_FETCH_ERROR`,

  CURRENT_LOCKS_PAGINATION_CHANGED: `${prefix}_CURRENT_LOCKS_PAGINATION_CHANGED`,
  CURRENT_LOCKS_SORTER_CHANGED: `${prefix}_CURRENT_LOCKS_SORTER_CHANGED`,

  LOCK_HISTORY_FETCH_STARTED: `${prefix}_LOCK_HISTORY_FETCH_STARTED`,
  LOCK_HISTORY_FETCH_SUCCESS: `${prefix}_LOCK_HISTORY_FETCH_SUCCESS`,
  LOCK_HISTORY_FETCH_ERROR: `${prefix}_LOCK_HISTORY_FETCH_ERROR`,

  LOCK_HISTORY_PAGINATION_CHANGED: `${prefix}_LOCK_HISTORY_PAGINATION_CHANGED`,
  LOCK_HISTORY_SORTER_CHANGED: `${prefix}_LOCK_HISTORY_SORTER_CHANGED`,

  LOCK_HISTORY_RESETED: `${prefix}_LOCK_HISTORY_RESETED`,

  doClearAllSelected() {
    return {
      type: actions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: actions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: actions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: (filter) => async (dispatch) => {
    dispatch({
      type: actions.RESETED,
    });

    dispatch(actions.doFetch(filter));
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: actions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await EnergyLocksService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.energyLocks.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: actions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: actions.PAGINATION_CHANGED,
      payload: pagination,
    });

    const filter = selectors.selectFilter(getState());

    dispatch(actions.doFetch(filter, true));
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: actions.SORTER_CHANGED,
      payload: sorter,
    });

    const filter = selectors.selectFilter(getState());

    dispatch(actions.doFetch(filter, true));
  },

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.FETCH_STARTED,
        payload: { filter, keepPagination },
      });

      const response = await EnergyLocksService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: actions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.FETCH_ERROR,
      });
    }
  },

  doFetchCurrentLocks: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.CURRENT_LOCKS_FETCH_STARTED,
        payload: { filter, keepPagination },
      });

      const response = await EnergyLocksService.listCurrentLocks(
        filter,
        selectors.selectCurrentLocksOrderBy(getState()),
        selectors.selectCurrentLocksLimit(getState()),
        selectors.selectCurrentLocksOffset(getState()),
      );
      dispatch({
        type: actions.CURRENT_LOCKS_FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.CURRENT_LOCKS_FETCH_ERROR,
      });
    }
  },

  doChangePaginationCurrentLocks: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: actions.CURRENT_LOCKS_PAGINATION_CHANGED,
      payload: pagination,
    });

    const filter = selectors.selectCurrentLocksFilter(getState());

    dispatch(actions.doFetchCurrentLocks(filter, true));
  },

  doChangeSortCurrentLocks: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: actions.CURRENT_LOCKS_SORTER_CHANGED,
      payload: sorter,
    });

    const filter = selectors.selectCurrentLocksFilter(getState());

    dispatch(actions.doFetchCurrentLocks(filter, true));
  },

  doFetchLockHistory: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.LOCK_HISTORY_FETCH_STARTED,
        payload: { filter, keepPagination },
      });

      const response = await EnergyLocksService.listLockHistory(
        filter,
        selectors.selectLockHistoryOrderBy(getState()),
        selectors.selectLockHistoryLimit(getState()),
        selectors.selectLockHistoryOffset(getState()),
      );

      dispatch({
        type: actions.LOCK_HISTORY_FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.LOCK_HISTORY_FETCH_ERROR,
      });
    }
  },

  doChangePaginationLockHistory: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: actions.LOCK_HISTORY_PAGINATION_CHANGED,
      payload: pagination,
    });

    const filter = selectors.selectLockHistoryFilter(getState());

    dispatch(actions.doFetchLockHistory(filter, true));
  },

  doChangeSortLockHistory: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: actions.LOCK_HISTORY_SORTER_CHANGED,
      payload: sorter,
    });

    const filter = selectors.selectLockHistoryFilter(getState());

    dispatch(actions.doFetchLockHistory(filter, true));
  },

  doResetLockHistory: () => async (dispatch) => {
    dispatch({
      type: actions.LOCK_HISTORY_RESETED,
    });

    dispatch(actions.doFetchLockHistory());
  },

};

export default actions;
