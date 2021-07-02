import lotoTicketsMobileService from 'modules/lotoTicketsMobile/lotoTicketsMobileService';
import selectors from 'modules/lotoTicketsMobile/list/lotoTicketsListMobileSelectors';
import Errors from 'modules/shared/error/errors';

const prefix = 'LOTOTICKET_LIST';

const actions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,


  doReset: (doNotCallApi) => async (dispatch) => {
    dispatch({
      type: actions.RESETED,
    });

    !doNotCallApi && dispatch(actions.doFetch());
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
    const limit = selectors.selectLimit(getState());
    const offset = selectors.selectOffset(getState());
    dispatch(actions.doFetch(filter, limit, offset, true));
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: actions.SORTER_CHANGED,
      payload: sorter,
    });

    const filter = selectors.selectFilter(getState());
    const limit = selectors.selectLimit(getState());
    const offset = selectors.selectOffset(getState());
    dispatch(actions.doFetch(filter, limit, offset, true));
  },

  doFetch: (filter, limit = 10, offset = 0, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.FETCH_STARTED,
        payload: { filter, offset, keepPagination },
      });

      const response = await lotoTicketsMobileService.list(
        filter,
        selectors.selectOrderBy(getState()),
        // selectors.selectLimit(getState()),
        // selectors.selectOffset(getState()),
        limit,
        offset
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

};

export default actions;
