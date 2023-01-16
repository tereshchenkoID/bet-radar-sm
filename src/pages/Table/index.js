import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import classNames from "classnames";

import axios from 'axios';

import Loader from "../../components/Loader";
import Container from "../../components/Container";
import Scoreboard from "../../modules/Scoreboard";
import Navigation from "../../modules/Navigation";

import style from './index.module.scss';

const Table = () => {
    const { theme } = useParams()

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('overall')

    const league = localStorage.getItem('league')

    localStorage.setItem('theme', theme)
    document.querySelector('html').setAttribute('theme', localStorage.getItem('theme'))

    useEffect(() => {
        axios.get(`https://matchtracker.live/api/table/${league}`)
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
                                <div className={style.sort}>
                                    <button
                                        className={classNames(style.link, type === 'overall' && style.active)}
                                        onClick={() => {
                                            setType('overall')
                                        }}
                                    >
                                        Overall
                                    </button>
                                    <button
                                        className={classNames(style.link, type === 'home' && style.active)}
                                        onClick={() => {
                                            setType('home')
                                        }}
                                    >
                                        Home
                                    </button>
                                    <button
                                        className={classNames(style.link, type === 'away' && style.active)}
                                        onClick={() => {
                                            setType('away')
                                        }}
                                    >
                                        Away
                                    </button>
                                </div>
                                <div className={style.table}>
                                    <div className={classNames(style.row, style.head)}>
                                        <div className={style.cell}>po</div>
                                        <div className={style.cell}>team</div>
                                        <div className={style.cell}>w</div>
                                        <div className={style.cell}>d</div>
                                        <div className={style.cell}>l</div>
                                        <div className={style.cell}>goals</div>
                                        <div className={style.cell}>diff</div>
                                        <div className={style.cell}>pts</div>
                                    </div>
                                    {
                                        data.results &&
                                        data.results[type].tables[0].rows.map((el, idx) =>
                                            <div
                                                key={idx}
                                                className={style.row}
                                            >
                                                <div className={style.cell}>{el.pos}</div>
                                                <div className={style.cell}>
                                                    <div className={style.team}>
                                                        <div className={style.logo}>
                                                            <img
                                                                src={`https://www.matchtracker.live/images/team/b/${el.team.image_id}.png`}
                                                                alt={el.team.name}
                                                            />
                                                        </div>
                                                        {el.team.name}
                                                    </div>
                                                </div>
                                                <div className={style.cell}>{el.win}</div>
                                                <div className={style.cell}>{el.draw}</div>
                                                <div className={style.cell}>{el.loss}</div>
                                                <div className={style.cell}>{el.goalsfor} : {el.goalsagainst}</div>
                                                <div className={style.cell}>{el.goalDiffTotal}</div>
                                                <div className={style.cell}>{el.points}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </>
                }
            </Container>
        </div>
    );
}

export default Table;
