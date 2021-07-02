import list from 'modules/document/list/documentListReducers';
import view from "modules/document/view/documentViewReducers";
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  view
});
