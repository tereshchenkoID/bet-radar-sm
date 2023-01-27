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
                                `${Object.keys(data.scores).length - 1} ${t('interface.half')}`
                            }
                        </div>
                        {
                            Object.keys(data.scores).map((key, idx) =>
                                <div
                                    key={key}
                                    className={style.cell}
                                >
                                    {
                                        Object.keys(data.scores).length === idx + 1
                                            ?
                                            <span>{t('interface.score')}</span>
                                            :
                                            <>
                                                <strong>{key}</strong>
                                                <span>{t('interface.half')}</span>
                                            </>
                                    }
                                </div>
                            )
                        }
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
