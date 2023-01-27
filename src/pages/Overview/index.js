import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

import classNames from "classnames";

import {loadEventMatchData} from "store/actions/eventMatchAction";
import {setUrl} from "store/actions/urlAction";
import {checkData} from "helpers/checkData";

import Scoreboard from "modules/Scoreboard";
import Container from "components/Container";
import Loader from "components/Loader";
import Scale from "./Scale";

import Table1 from "./1";   // Football
import Table13 from "./13"; // Tennis
import Table17 from "./17"; // Hockey
import Table18 from "./18"; // Basketball
import Table78 from "./78"; // Handball
import Table91 from "./91"; // Volleyball

import style from './index.module.scss';

const getTable = (event) => {

    switch (event.sport_id) {
        case '1':
            return <Table1 data={event} />
        case '13':
            return <Table13 data={event} />
        case '17':
            return <Table17 data={event} />
        case '18':
            return <Table18 data={event} />
        case '78':
            return <Table78 data={event} />
        case '91':
            return <Table91 data={event} />
        default:
            return <Table18 data={event} />
    }
}

const Overview = () => {
    let url = useParams()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {event} = useSelector((state) => state.eventMatch)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            dispatch(setUrl(url))
            dispatch(loadEventMatchData(url.id)).then(() => {
                setLoading(false)
            })
        }
    }, []);

    return (
        <div className={style.block}>
            {
                (checkData(event) && loading)
                    ?
                        <Loader />
                    :
                    <>
                        {
                            console.log(event)
                        }
                        <Container>
                            <Scoreboard event={event} />
                        </Container>
                        <Container>
                            <div className={style.panel}>
                                <div className={style.sort}>{t('interface.stats')}</div>
                                {
                                    getTable(event)
                                }
                            </div>
                            {
                                event.stats &&
                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.events')}</div>
                                    <div className={style.table}>
                                        {
                                            Object.keys(event.stats).map(key =>
                                                <Scale
                                                    text={key}
                                                    home={event.stats[key][0]}
                                                    away={event.stats[key][1]}
                                                    key={key}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            }
                            {
                                event.events &&
                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.summary')}</div>
                                    <div className={classNames(style.table, style.reverse)}>
                                        {
                                            event.events.map((el, idx) =>
                                                <div
                                                    key={idx}
                                                    className={style.row}
                                                >
                                                    <div className={style.cell}>{el.text}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }
                        </Container>
                    </>
            }
        </div>
    );
}

export default Overview;
