import { TYPES } from "../actionTypes";

const setLeague = (data) => {
    return {
        type: TYPES.SET_LEAGUE,
        payload: data
    };
};

export { setLeague };
