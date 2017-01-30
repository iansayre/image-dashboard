/* REDUCER.JS
 * @AUTHOR Ian Sayre 10/10/16
 */

import { combineReducers } from 'redux';
import AdsReducer from './AdsReducer';
import AdModalReducer from './AdModalReducer';
import AlertReducer from './AlertReducer';
import AuthReducer from './AuthReducer';
import FilterReducer from './FilterReducer';
import HelpModalReducer from './HelpModalReducer';
import MarkupModalReducer from './MarkupModalReducer';
import NetworkModalReducer from './NetworkModalReducer';
import { routerReducer as routing } from 'react-router-redux';

const adQualityApp = combineReducers({
  ads: AdsReducer,
  adModal: AdModalReducer,
  alerts: AlertReducer,
  auth: AuthReducer,
  adFilter: FilterReducer,
  helpModal: HelpModalReducer,
  markupModal: MarkupModalReducer,
  networkModal: NetworkModalReducer,
  routing
});

export default adQualityApp;
