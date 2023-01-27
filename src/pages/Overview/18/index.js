import {useTranslation} from "react-i18next";

import style from './index.module.scss';

const table = (data) => {


    return <>
           </>
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
                                    Object.keys(data.scores).length === 7
                                    ?
                                        `${t('interface.extra_time')}`
                                    :
                                        `${Object.keys(data.scores).length - 2} ${t('interface.quarter')}`
                            }
                        </div>
                        <div className={style.cell}>
                            <strong>1</strong>
                            <span>{t('interface.quarter')}</span>
                        </div>
                        <div className={style.cell}>
                            <strong>2</strong>
                            <span>{t('interface.quarter')}</span>
                        </div>
                        <div className={style.cell}>
                            <span>{t('interface.half')}</span>
                        </div>
                        <div className={style.cell}>
                            <strong>3</strong>
                            <span>{t('interface.quarter')}</span>
                        </div>
                        <div className={style.cell}>
                            <strong>4</strong>
                            <span>{t('interface.quarter')}</span>
                        </div>
                        {
                            data.scores['6'] &&
                            <div className={style.cell}>
                                <span>{t('interface.extra_time')}</span>
                            </div>
                        }
                        <div className={style.cell}>
                            <span>{t('interface.score')}</span>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>
                                {data.home.name}
                            </div>
                        </div>
                        <div className={style.cell}>{data.scores['1'] ? data.scores['1'].home : 0}</div>
                        <div className={style.cell}>{data.scores['2'] ? data.scores['2'].home : 0}</div>
                        <div className={style.cell}>{data.scores['3'] ? data.scores['3'].home : 0}</div>
                        <div className={style.cell}>{data.scores['4'] ? data.scores['4'].home : 0}</div>
                        <div className={style.cell}>{data.scores['5'] ? data.scores['5'].home : 0}</div>
                        {
                            data.scores['6'] &&
                            <div className={style.cell}>{data.scores['6'].home}</div>
                        }
                        <div className={style.cell}>{data.scores['7'] ? data.scores['7'].home : 0}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <div className={style.team}>
                                {data.away.name}
                            </div>
                        </div>
                        <div className={style.cell}>{data.scores['1'] ? data.scores['1'].away : 0}</div>
                        <div className={style.cell}>{data.scores['2'] ? data.scores['2'].away : 0}</div>
                        <div className={style.cell}>{data.scores['3'] ? data.scores['3'].away : 0}</div>
                        <div className={style.cell}>{data.scores['4'] ? data.scores['4'].away : 0}</div>
                        <div className={style.cell}>{data.scores['5'] ? data.scores['5'].away : 0}</div>
                        {
                            data.scores['6'] &&
                            <div className={style.cell}>{data.scores['6'].away}</div>
                        }
                        <div className={style.cell}>{data.scores['7'] ? data.scores['7'].away : 0}</div>
                        {/*{*/}
                        {/*    Object.keys(data.scores).map(key =>*/}
                        {/*        <div*/}
                        {/*            className={style.cell}*/}
                        {/*            key={key}*/}
                        {/*        >*/}
                        {/*            {data.scores[key].away}*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*}*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
