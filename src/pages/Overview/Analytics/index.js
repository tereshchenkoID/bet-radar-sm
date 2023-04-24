import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import {setUrl} from "store/actions/urlAction";
import {fetchData} from "helpers/api";

import style from './index.module.scss';

const getAverageStats = (data, h2h, side, type) => {
    const id = h2h[side]
    let c = 0

    data.map(el => {
        const a = el.ss.split('-')

        if (type === 'GOALS') {
            let i = el['home'].id === id ? 0 : 1
            c += parseInt(a[i], 10)
        }
        if (type === 'HALF_GOALS') {
            let i = el['home'].id === id ? 0 : 1
            if (i === 0) {
                c += parseInt(a[i], 10)
            }
        }
        else if (type === 'HALF_LOSTS') {
            const h_i = (el['home'].id === id) ? 0 : 1
            const a_i = (el['away'].id === id) ? 0 : 1

            if (el[side].id === id) {

                if (parseInt(a[h_i], 10) > parseInt(a[a_i], 10)) {
                    c += 1
                }
            }
        }
        else if (type === 'LOSTS') {
            const h_i = (el['home'].id === id) ? 0 : 1
            const a_i = (el['away'].id === id) ? 0 : 1

            if (parseInt(a[h_i], 10) > parseInt(a[a_i], 10)) {
                c += 1
            }
        }

        return true
    })

    return (c / data.length) || 0
}

const Analytics = ({event}) => {
    const { t } = useTranslation();
    let url = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [avg, setAvg] = useState(null)

    useEffect(() => {
        dispatch(setUrl(url))

        fetchData(`api/h2h/${url.id}`).then((data) => {
            const d = data.results
            const h2h = {
                home: event.home.id,
                away: event.away.id
            }

            setAvg({
                home: {
                    HALF_GOALS: getAverageStats(d.home, h2h, 'home', 'HALF_GOALS'),
                    GOALS: getAverageStats(d.home, h2h, 'home', 'GOALS'),
                    HALF_LOSTS: getAverageStats(d.home, h2h, 'home', 'HALF_LOSTS'),
                    LOSTS: getAverageStats(d.home, h2h, 'home', 'LOSTS')
                },
                away: {
                    HALF_GOALS: getAverageStats(d.away, h2h, 'away', 'HALF_GOALS'),
                    GOALS: getAverageStats(d.away, h2h, 'away', 'GOALS'),
                    HALF_LOSTS: getAverageStats(d.away, h2h, 'away', 'HALF_LOSTS'),
                    LOSTS: getAverageStats(d.away, h2h, 'away', 'LOSTS')
                },
            })

            setLoading(false)
        })
    }, [event]);

    return (
        <div className={style.block}>
            {
                !loading &&
                    <>
                        <div className={style.row}>
                            <div className={style.cell} />
                            <div className={style.cell}>{t('stats.avg_half_goals')}</div>
                            <div className={style.cell}>{t('stats.avg_goals')}</div>
                            <div className={style.cell}>{t('stats.avg_half_losts')}</div>
                            <div className={style.cell}>{t('stats.avg_losts')}</div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cell}>{t('interface.home')}</div>
                            <div className={style.cell}>{avg.home.HALF_GOALS.toFixed(2)}</div>
                            <div className={style.cell}>{avg.home.GOALS.toFixed(2)}</div>
                            <div className={style.cell}>{avg.home.HALF_LOSTS.toFixed(2)}</div>
                            <div className={style.cell}>{avg.home.LOSTS.toFixed(2)}</div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cell}>{t('interface.away')}</div>
                            <div className={style.cell}>{avg.away.HALF_GOALS.toFixed(2)}</div>
                            <div className={style.cell}>{avg.away.GOALS.toFixed(2)}</div>
                            <div className={style.cell}>{avg.away.HALF_LOSTS.toFixed(2)}</div>
                            <div className={style.cell}>{avg.away.LOSTS.toFixed(2)}</div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cell}>{t('interface.total')}</div>
                            <div className={style.cell}>{(avg.home.HALF_GOALS + avg.away.HALF_GOALS).toFixed(2)}</div>
                            <div className={style.cell}>{(avg.home.GOALS + avg.away.GOALS).toFixed(2)}</div>
                            <div className={style.cell}>{(avg.home.HALF_LOSTS + avg.away.HALF_LOSTS).toFixed(2)}</div>
                            <div className={style.cell}>{(avg.home.LOSTS + avg.away.LOSTS).toFixed(2)}</div>
                        </div>
                    </>
            }
        </div>
    );
}

export default Analytics;
