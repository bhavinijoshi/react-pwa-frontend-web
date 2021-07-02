import AssetService from 'modules/asset/assetService';
import selectors from 'modules/asset/list/assetListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/asset/list/assetListExporterFields';
import Errors from 'modules/shared/error/errors';
import Exporter from 'modules/shared/exporter/exporter';

const prefix = 'ASSET_LIST';

const actions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  BLEGATEWAY_FETCH_STARTED: `${prefix}_BLEGATEWAY_FETCH_STARTED`,
  ARCFLASH_FETCH_STARTED: `${prefix}_ARCFLASH_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_VIEW: `${prefix}_TOGGLE_VIEW`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doToggleView(row) {
    return {
      type: actions.TOGGLE_VIEW,
      payload: row
    }
  },

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

  doReset: (doNotCallApi, initialFilter = {}) => async (dispatch) => {
    dispatch({
      type: actions.RESETED,
    });

    !doNotCallApi && dispatch(actions.doFetch(initialFilter));
  },

  doResetBleGateway: (doNotCallApi, initialFilter = {}) => async (dispatch) => {
    dispatch({
      type: actions.RESETED,
    });

    !doNotCallApi && dispatch(actions.doFetchBleGateway(initialFilter));
  },

  doResetArcFlash: (doNotCallApi, initialFilter = {}) => async (dispatch) => {
    dispatch({
      type: actions.RESETED,
    });

    !doNotCallApi && dispatch(actions.doFetchArcFlash(initialFilter));
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
      const response = await AssetService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.asset.exporterFileName'),
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
      const response = await AssetService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState())
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

  doFetchBleGateway: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.BLEGATEWAY_FETCH_STARTED,
        payload: { filter, keepPagination },
      });
      const { checkUpdate, ...restFilter } = filter
      const response = await AssetService.list(
        restFilter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
        checkUpdate
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

  doFetchArcFlash: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.ARCFLASH_FETCH_STARTED,
        payload: { filter, keepPagination },
      });
      const response = await AssetService.list(
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

  doResetRows: () => async (
    dispatch
  ) => {
    dispatch({
      type: actions.FETCH_ERROR,
    });
  }
};

export default actions;
