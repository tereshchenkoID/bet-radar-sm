import { TYPES } from "../actionTypes";

const initialState = {
    h2h: {}
};

const h2hReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_H2H:
            return {
                ...state
            };
        case TYPES.SET_H2H:
            return {
                ...state,
                h2h: action.payload
            };
        default:
            return state;
    }
};

export default h2hReducer;
