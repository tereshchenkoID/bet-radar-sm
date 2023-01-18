import { TYPES } from "../actionTypes";

const setH2h = (data) => {
    return {
        type: TYPES.SET_H2H,
        payload: data
    };
};

export { setH2h };
