import { TYPES } from "../actionTypes";

const initialState = {
    event: {}
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_EVENT:
            return {
                ...state
            };
        case TYPES.SET_EVENT:
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
};

export default eventReducer;
