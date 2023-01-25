import { TYPES } from "store/actionTypes";

const initialState = {
    event: {}
};

const eventMatchReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_EVENT_MATCH:
            return {
                ...state
            };
        case TYPES.SET_EVENT_MATCH:
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
};

export default eventMatchReducer;
