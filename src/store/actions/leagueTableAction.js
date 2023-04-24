import {TYPES} from "store/actionTypes";

import {useRequest} from "hooks/useRequest";

export const leagueTableAction = (id) => async dispatch => {
    const { get } = useRequest();

    try {
        const data = await get(`api/table/${id}`)

        dispatch({
            type: TYPES.SET_LEAGUE_TABLE,
            payload: data.results,
        })

        return data
    } catch (e) {
        console.log(e)
    }
};
