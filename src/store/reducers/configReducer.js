import { TYPES } from "store/actionTypes";

const initialState = {
    config: {}
};

const configReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_CONFIG:
            return {
                ...state
            };
        case TYPES.SET_CONFIG:
            return {
                ...state,
                config: action.payload
            };
        default:
            return state;
    }
};

export default configReducer;
