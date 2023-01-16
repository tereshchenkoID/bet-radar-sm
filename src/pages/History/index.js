import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import classNames from "classnames";

import {convertTime} from '../../helpers/convertTime'

import axios from 'axios';

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

    if (a[h_i] > a[a_i])
        r = 'w'
    else if(a[a_i] > a[h_i])
        r = 'l'
    else
        r = 'd'

    return r
}

const History = () => {
    const { theme, id } = useParams()

    localStorage.setItem('theme', theme)
    document.querySelector('html').setAttribute('theme', localStorage.getItem('theme'))

    const home_id = localStorage.getItem('home_id')
    const away_id = localStorage.getItem('away_id')

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://matchtracker.live/api/h2h/${id}`)
            .then(res => {
                setData(res.data)
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
                                    <div className={style.sort}>Head to Head</div>
                                    <div className={style.table}>
                                    {
                                        data.results &&
                                        data.results.h2h.map((el, idx) =>
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
                                                        <span className={home_id === el.home.id ? style.l : style.d}>{el.home.name}</span>
                                                        <span>vs</span>
                                                        <span className={home_id === el.away.id ? style.l : style.d}>{el.away.name}</span>
                                                    </div>
                                                </div>
                                                <div className={style.cell}>
                                                    <div className={classNames(style.badge, style[checkWinner(el.ss, el.home.id, el.away.id, home_id)])}>
                                                        {
                                                            checkWinner(el.ss, el.home.id, el.away.id, home_id)
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
                                    <div className={style.sort}>Home History</div>
                                    <div className={style.table}>
                                        {
                                            data.results &&
                                            data.results.home.map((el, idx) =>
                                                <div
                                                    className={style.row}
                                                    key={idx}
                                                >
                                                    <div className={style.cell}>
                                                        <a
                                                            href={`${el.league.id}`}
                                                            className={style.link}
                                                        >
                                                            {el.league.name}
                                                        </a>
                                                    </div>
                                                    <div className={style.cell}>{convertTime(el.time)}</div>
                                                    <div className={style.cell}>
                                                        <div className={style.team}>
                                                            <span className={home_id === el.home.id ? style.l : style.d}>{el.home.name}</span>
                                                            <span>vs</span>
                                                            <span className={home_id === el.away.id ? style.l : style.d}>{el.away.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>
                                                        <div className={classNames(style.badge, style[checkWinner(el.ss, el.home.id, el.away.id, home_id)])}>
                                                            {
                                                                checkWinner(el.ss, el.home.id, el.away.id, home_id)
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
                                    <div className={style.sort}>Away History</div>
                                    <div className={style.table}>
                                        {
                                            data.results &&
                                            data.results.away.map((el, idx) =>
                                                <div
                                                    className={style.row}
                                                    key={idx}
                                                >
                                                    <div className={style.cell}>
                                                        <a
                                                            href={`${el.league.id}`}
                                                            className={style.link}
                                                        >
                                                            {el.league.name}
                                                        </a>
                                                    </div>
                                                    <div className={style.cell}>{convertTime(el.time)}</div>
                                                    <div className={style.cell}>
                                                        <div className={style.team}>
                                                            <span className={away_id === el.home.id ? style.l : style.d}>{el.home.name}</span>
                                                            <span>vs</span>
                                                            <span className={away_id === el.away.id ? style.l : style.d}>{el.away.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className={style.cell}>
                                                        <div className={classNames(style.badge, style[checkWinner(el.ss, el.home.id, el.away.id, away_id)])}>
                                                            {
                                                                checkWinner(el.ss, el.home.id, el.away.id, away_id)
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
