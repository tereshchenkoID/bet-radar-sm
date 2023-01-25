import { TYPES } from "store/actionTypes";

const setUrl = (data) => {
    const r = () => {
        return localStorage.setItem("url", JSON.stringify({url: data}))
    }

    return {
        type: TYPES.SET_URL,
        payload: data || r
    };
};

export { setUrl };
