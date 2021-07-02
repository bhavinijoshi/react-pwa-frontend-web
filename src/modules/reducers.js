import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import menu from 'modules/menu/menuReducers';
import auth from 'modules/auth/authReducers';
import asset from "modules/asset/assetReducers";
import lotoTicketsMobileViewReducers from "modules/lotoTicketsMobileView/lotoTicketsMobileViewReducers";
import lotoTicketsMobileReducers from "modules/lotoTicketsMobile/lotoTicketsMobileReducers";
import document from "modules/document/documentReducers";
import energyLocks from "modules/energyLocks/energyLocksReducers";
import lotoAssets from "modules/lotoAssets/lotoAssetsReducers";
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    menu,
    auth,
    asset,
    lotoTicketsMobileViewReducers,
    lotoTicketsMobileReducers,
    document,
    energyLocks,
    lotoAssets
  });
