import { TYPES } from "store/actionTypes";

const initialState = {
    table: null
};

const leagueTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_LEAGUE_TABLE:
            return {
                ...state
            };
        case TYPES.SET_LEAGUE_TABLE:
            return {
                ...state,
                table: action.payload
            };
        default:
            return state;
    }
};

export default leagueTableReducer;
