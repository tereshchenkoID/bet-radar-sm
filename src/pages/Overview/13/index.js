import {useTranslation} from "react-i18next";

import style from './index.module.scss';

const checkPlayerIndicator = (data, idx) => {
    const r = data.split(',')
    return r[idx] === '1'
}

const Table = ({data}) => {
    const { t } = useTranslation()

    return (
        <div className={style.block}>
            <div className={style.scroll}>
                <div className={style.table}>
                    <div className={style.row}>
                        <div className={style.cell}>
                            {
                                data.time_status !== '3' &&
                                `${Object.keys(data.scores).length} ${t('interface.set')}`
                            }
                        </div>
                        {
                            Object.keys(data.scores).map((key, idx) =>
                                <div
                                    className={style.cell}
                                    key={key}
                                >
                                    <strong>{key}</strong>
                                    <span>{t('interface.set')}</span>
                                </div>
                            )
                        }
                        <div className={style.cell}>{t('interface.points')}</div>
                        <div className={style.cell}>{t('interface.sets')}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>
                                {
                                    data.time_status !== '3' &&
                                    checkPlayerIndicator(data.playing_indicator, 0) &&
                                    <div className={style.indicator} />
                                }
                                {data.home.name}
                            </div>
                        </div>
                        {
                            Object.keys(data.scores).map(key =>
                                <div
                                    className={style.cell}
                                    key={key}
                                >
                                    {data.scores[key].home}
                                </div>
                            )
                        }
                        <div className={style.cell}>{data.points ? data.points.split('-')[0] : '0'}</div>
                        <div className={style.cell}>{data.ss.split('-')[0]}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>
                                {
                                    data.time_status !== '3' &&
                                    checkPlayerIndicator(data.playing_indicator, 1) &&
                                    <div className={style.indicator} />
                                }
                                {data.away.name}
                            </div>
                        </div>
                        {
                            Object.keys(data.scores).map(key =>
                                <div
                                    className={style.cell}
                                    key={key}
                                >
                                    {data.scores[key].away}
                                </div>
                            )
                        }
                        <div className={style.cell}>{data.points ? data.points.split('-')[1] : '0'}</div>
                        <div className={style.cell}>{data.ss.split('-')[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
