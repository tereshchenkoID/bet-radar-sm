import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import classNames from "classnames";

import {convertTime} from '../../helpers/convertTime'
import {setTheme} from "../../helpers/setTheme";
import {getH2H} from "../../helpers/api";

import Scoreboard from "../../modules/Scoreboard";
import Navigation from "../../modules/Navigation";
import Loader from "../../components/Loader";
import Container from "../../components/Container";

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
    const { t } = useTranslation()
    const { theme, id } = useParams()
    const {h2h} = useSelector((state) => state.h2h)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    setTheme(theme)

    useEffect(() => {
        getH2H(`h2h/${id}`).then(data => {
            setData(data)
            setLoading(false)
        })
    }, []);

    return (
        <div className={style.block}>
            <Navigation />
            <Container>
                <Scoreboard />
            </Container>
            <Container>
                {
                    loading
                        ?
                            <Loader />
                        :
                            <>
                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.h2h')}</div>
                                    <div className={style.table}>
                                    {
                                        data &&
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

                                <div className={style.panel}>
                                    <div className={style.sort}>{t('interface.home_history')}</div>
                                    <div className={style.table}>
                                        {
                                            data &&
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
                            </>
                }
            </Container>
        </div>
    );
}

export default History;
