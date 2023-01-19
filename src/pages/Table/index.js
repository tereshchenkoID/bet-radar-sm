import {useTranslation} from "react-i18next";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import classNames from "classnames";

import {setTheme} from "../../helpers/setTheme";
import {getTable} from "../../helpers/api";
import {checkData} from "../../helpers/checkData"

import Loader from "../../components/Loader";
import Container from "../../components/Container";
import Scoreboard from "../../modules/Scoreboard";
import Navigation from "../../modules/Navigation";

import style from './index.module.scss';

const Table = () => {
    const { t } = useTranslation()
    const { theme } = useParams()
    const {event} = useSelector((state) => state.event)
    const {league} = useSelector((state) => state.league)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('overall')

    setTheme(theme)

    useEffect(() => {

        !checkData(event) && !checkData(league) &&
            getTable(`table/${league.id}`).then(data => {
                setData(data)
                setLoading(false)
            })
    }, [league]);

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
                            data &&
                            data.away.tables.length > 0 &&
                            <>
                                <div className={style.sort}>
                                    {
                                        Object.keys(data).map(key =>
                                            key !== 'season' &&
                                            <button
                                                key={key}
                                                className={classNames(style.link, type === key && style.active)}
                                                onClick={() => {
                                                    setType(key)
                                                }}
                                            >
                                                {t(`interface.${key}`)}
                                            </button>
                                        )
                                    }
                                </div>
                                <div className={style.table}>
                                    <div className={classNames(style.row, style.head)}>
                                        <div className={style.cell}>{t('interface.po')}</div>
                                        <div className={style.cell}>{t('interface.team')}</div>
                                        <div className={style.cell}>{t('interface.w')}</div>
                                        <div className={style.cell}>{t('interface.d')}</div>
                                        <div className={style.cell}>{t('interface.l')}</div>
                                        <div className={style.cell}>{t('interface.goals')}</div>
                                        <div className={style.cell}>{t('interface.diff')}</div>
                                        <div className={style.cell}>{t('interface.pts')}</div>
                                    </div>
                                    {
                                        data &&
                                        data[type].tables[0].rows.map((el, idx) =>
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
