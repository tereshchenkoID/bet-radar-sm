import { TYPES } from "store/actionTypes";

const initialState = {
    url: {}
};

const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_URL:
            return {
                ...state
            };
        case TYPES.SET_URL:
            return {
                ...state,
                url: action.payload
            };
        default:
            return state;
    }
};

export default urlReducer;
