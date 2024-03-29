import {TYPES} from "store/actionTypes";

import {useRequest} from "hooks/useRequest";

export const loadEventMatchData = (id) => async dispatch => {
    const { get } = useRequest();

    try {
        const data = await get(`api/event/${id}`)

        dispatch({
            type: TYPES.SET_EVENT_MATCH,
            payload: data.results[0],
        })

        return data
    } catch (e) {
        console.log(e)
    }
};
