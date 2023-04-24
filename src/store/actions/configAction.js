import {TYPES} from "store/actionTypes";

export const configData = () => async dispatch => {

    try {
        const data = await fetch(`/config.json`)

        dispatch({
            type: TYPES.SET_CONFIG,
            payload: await data.json()
        })

        return data
    } catch (e) {
        console.log(e)
    }
};
