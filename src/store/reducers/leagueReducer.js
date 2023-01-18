import { TYPES } from "../actionTypes";

const initialState = {
    league: {}
};

const leagueReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_LEAGUE:
            return {
                ...state
            };
        case TYPES.SET_LEAGUE:
            return {
                ...state,
                league: action.payload
            };
        default:
            return state;
    }
};

export default leagueReducer;
