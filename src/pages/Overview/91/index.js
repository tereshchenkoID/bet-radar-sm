import {useTranslation} from "react-i18next";

import style from './index.module.scss';

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
                        <div className={style.cell}>{t('interface.score')}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>{data.home.name}</div>
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
                        <div className={style.cell}>{data.ss.split('-')[0]}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>{data.away.name}</div>
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
                        <div className={style.cell}>{data.ss.split('-')[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
