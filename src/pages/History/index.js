import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

import classNames from "classnames";

import {loadEventMatchData} from "store/actions/eventMatchAction";
import {setUrl} from "store/actions/urlAction";
import {convertTime} from 'helpers/convertTime'
import {checkData} from 'helpers/checkData'
import {fetchData} from "helpers/api";

import Scoreboard from "modules/Scoreboard";
import Loader from "components/Loader";
import Container from "components/Container";

import style from './index.module.scss';


const checkWinner = (data, home, away, id) => {
    const a = data.split('-')
    let r

    const h_i = (home === id) ? 0 : 1
    const a_i = (away === id) ? 0 : 1

    if (parseInt(a[h_i], 10) > parseInt(a[a_i], 10))
        r = 'w'
    else if(parseInt(a[h_i], 10) < parseInt(a[a_i], 10))
        r = 'l'
    else
        r = 'd'

    return r
}

const History = () => {
    let url = useParams()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {event} = useSelector((state) => state.eventMatch)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [h2h, setH2H] = useState({})

    useEffect(() => {
        if (loading) {
            dispatch(setUrl(url))
            checkData(event) && dispatch(loadEventMatchData(url.id))

            fetchData(`https://matchtracker.live/api/h2h/${url.id}`).then((data) => {
                setData(data.results)
                setLoading(false)
            })

            !checkData(event) &&
            setH2H ({
                home: event.home.id,
                away: event.away.id
            })
        }

    }, [event]);

    return (
        <div className={style.block}>
            {
                loading
                    ?
                    <Loader />
                    :
                    <>
                        <Container>
                            <Scoreboard event={event}/>
                        </Container>
                        <Container>
                            {
                                data.h2h &&
                                data.h2h.length > 0 &&
                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.h2h')}</div>
                                    <div className={style.table}>
                                        {
                                            data.h2h.map((el, idx) =>
                                                <div
                                                    className={style.row}
                                                    key={idx}
                                                >
                                                    <div className={style.cell}>
                                                        <p>{el.league.name}</p>
                                                    </div>
                                                    <div className={style.cell}>{convertTime(el.time)}</div>
                                                    <div className={style.cell}>
                                                        <div className={style.team}>
                                                            <span className={h2h.home === el.home.id ? style.l : style.d}>{el.home.name}</span>
                                                            <span>{t('interface.vs')}</span>
                                                            <span className={h2h.home === el.away.id ? style.l : style.d}>{el.away.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>
                                                        <div className={classNames(style.badge, style[checkWinner(el.ss, el.home.id, el.away.id, h2h.home)])}>
                                                            {
                                                                t(`interface.${checkWinner(el.ss, el.home.id, el.away.id, h2h.home)}`)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>{el.ss}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }
                            {
                                data.home &&
                                data.home.length > 0 &&
                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.home_history')}</div>
                                    <div className={style.table}>
                                        {
                                            data.home.map((el, idx) =>
                                                <div
                                                    className={style.row}
                                                    key={idx}
                                                >
                                                    <div className={style.cell}>
                                                        <p>{el.league.name}</p>
                                                    </div>
                                                    <div className={style.cell}>{convertTime(el.time)}</div>
                                                    <div className={style.cell}>
                                                        <div className={style.team}>
                                                            <span className={h2h.home === el.home.id ? style.l : style.d}>{el.home.name}</span>
                                                            <span>{t('interface.vs')}</span>
                                                            <span className={h2h.home === el.away.id ? style.l : style.d}>{el.away.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>
                                                        <div className={classNames(style.badge, style[checkWinner(el.ss, el.home.id, el.away.id, h2h.home)])}>
                                                            {
                                                                t(`interface.${checkWinner(el.ss, el.home.id, el.away.id, h2h.home)}`)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>{el.ss}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }
                            {
                                data.away &&
                                data.away.length > 0 &&
                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.away_history')}</div>
                                    <div className={style.table}>
                                        {
                                            data &&
                                            data.away.map((el, idx) =>
                                                <div
                                                    className={style.row}
                                                    key={idx}
                                                >
                                                    <div className={style.cell}>
                                                        <p>{el.league.name}</p>
                                                    </div>
                                                    <div className={style.cell}>{convertTime(el.time)}</div>
                                                    <div className={style.cell}>
                                                        <div className={style.team}>
                                                            <span className={h2h.away === el.home.id ? style.l : style.d}>{el.home.name}</span>
                                                            <span>{t('interface.vs')}</span>
                                                            <span className={h2h.away === el.away.id ? style.l : style.d}>{el.away.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>
                                                        <div className={classNames(style.badge, style[checkWinner(el.ss, el.home.id, el.away.id, h2h.away)])}>
                                                            {
                                                                t(`interface.${checkWinner(el.ss, el.home.id, el.away.id, h2h.away)}`)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>{el.ss}</div>
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

export default History;
