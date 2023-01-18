import { createStore, combineReducers } from "redux";

import eventReducer from "./reducers/eventReducer";
import h2hReducer from "./reducers/h2hReducer";
import leagueReducer from "./reducers/leagueReducer";

const allReducer = combineReducers({
    event: eventReducer,
    h2h: h2hReducer,
    league: leagueReducer
});


const store = createStore(allReducer)

export default store;
