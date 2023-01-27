import {useTranslation} from "react-i18next";

import style from './index.module.scss';

import Icon from "components/Icon";

const Table = ({data}) => {
    const { t } = useTranslation()

    return (
        <div className={style.block}>
            <div className={style.scroll}>
                <div className={style.table}>
                    <div className={style.row}>
                        <div className={style.cell}/>
                        {
                            Object.keys(data.scores).map(key =>
                                <div
                                    key={key}
                                    className={style.cell}
                                >
                                    <strong>{key}</strong>
                                    <span>{t('interface.half')}</span>
                                </div>
                            )
                        }
                        <div className={style.cell}>
                            <Icon id={'corner'} />
                        </div>
                        <div className={style.cell}>
                            <Icon id={'score'} />
                        </div>
                        <div className={style.cell}>
                            <Icon id={'yellow-card'} />
                        </div>
                        <div className={style.cell}>
                            <Icon id={'red-card'} />
                        </div>
                        <div className={style.cell}>
                            <Icon id={'goal'} />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>
                                {data.home.name}
                            </div>
                        </div>
                        {
                            Object.keys(data.scores).map(key =>
                                data.scores[key].home &&
                                <div
                                    className={style.cell}
                                    key={key}
                                >
                                    {data.scores[key].home}
                                </div>
                            )
                        }
                        <div className={style.cell}>{data.stats.corners[0]}</div>
                        <div className={style.cell}>{data.stats.penalties[0]}</div>
                        <div className={style.cell}>{data.stats.yellowcards[0]}</div>
                        <div className={style.cell}>{data.stats.redcards[0]}</div>
                        <div className={style.cell}>{data.ss.split('-')[0]}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>
                                {data.away.name}
                            </div>
                        </div>
                        {
                            Object.keys(data.scores).map(key =>
                                data.scores[key].away &&
                                <div
                                    className={style.cell}
                                    key={key}
                                >
                                    {data.scores[key].away}
                                </div>
                            )
                        }
                        <div className={style.cell}>{data.stats.corners[1]}</div>
                        <div className={style.cell}>{data.stats.penalties[1]}</div>
                        <div className={style.cell}>{data.stats.yellowcards[1]}</div>
                        <div className={style.cell}>{data.stats.redcards[1]}</div>
                        <div className={style.cell}>{data.ss.split('-')[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
