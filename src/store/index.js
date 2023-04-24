import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import urlReducer from "./reducers/urlReducer";
import eventMatchReducer from "./reducers/eventMatchReducer";
import configReducer from "./reducers/configReducer";
import leagueTableReducer from "./reducers/leagueTableReducer";

const allReducer = combineReducers({
    url: urlReducer,
    config: configReducer,
    eventMatch: eventMatchReducer,
    table: leagueTableReducer
});


const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const middleware = applyMiddleware(thunk);
const store = createStore(allReducer, composeEnhancers(middleware))

export default store;

