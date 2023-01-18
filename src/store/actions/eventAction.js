import { TYPES } from "../actionTypes";

const setEvent = (data) => {
    return {
        type: TYPES.SET_EVENT,
        payload: data
    };
};

export { setEvent };
