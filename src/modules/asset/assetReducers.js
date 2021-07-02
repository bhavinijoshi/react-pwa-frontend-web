import list from 'modules/asset/list/assetListReducers';
import view from 'modules/asset/view/assetViewReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  view,
});
