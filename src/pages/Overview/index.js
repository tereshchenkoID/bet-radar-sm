import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {setTheme} from "../../helpers/setTheme";

import Scoreboard from "../../modules/Scoreboard";
import Navigation from "../../modules/Navigation";
import Container from "../../components/Container";
import Scale from "./Scale";

import style from './index.module.scss';

const Overview = () => {
    const { t } = useTranslation()
    const { theme } = useParams()
    const { event } = useSelector((state) => state.event)

    setTheme(theme)

    return (
        <div className={style.block}>
            <Navigation />
            <Container>
                <Scoreboard />
            </Container>
            <Container>
                <div className={style.panel}>
                    <div className={style.sort}>{t('interface.stats')}</div>
                    {
                        event.events &&
                        <div className={style.scoreboard}>
                            <div>
                                <div />
                                {
                                    Object.keys(event.scores).map(key =>
                                        event.scores[key].home &&
                                        <div key={key}>
                                            {key} {t('interface.half')}
                                        </div>
                                    )
                                }
                                <div>{t('interface.score')}</div>
                                <div>
                                    <svg viewBox="0 0 16 16">
                                        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M6.5 1.5v13" />
                                        <path d="M15 5.273 7 2v6l8-2.727Z" fill="#F66" />
                                    </svg>
                                </div>
                                <div>
                                    <svg viewBox="0 0 16 16">
                                        <path d="M1.705 7a6.274 6.274 0 0 0 1.935 4.542A6.297 6.297 0 0 0 8 13.296a6.296 6.296 0 0 0 4.973-10.16A6.287 6.287 0 0 0 8 .704 6.284 6.284 0 0 0 3.066 3.09 6.257 6.257 0 0 0 1.705 7Z" fill="#fff" />
                                        <path d="m8.692 4.814 2.984-.506-.033-.192-2.959.502-2.259-.21.796-3.51-.19-.043-.845 3.726 2.506.233Zm-4.743 6.909h.194V10.02l1.136-3.4 2.053.42 2.63 2.994.145-.128-2.672-3.044-2.285-.467-1.201 3.593v1.734Zm.504-6.718-1.885-.288-.03.193 1.886.287.03-.192Zm6.867 5.347 1.013-1.082.87-2.759.035-1.194-.194-.005-.035 1.18-.849 2.677-.982 1.05.143.133Z" fill="#C4C7D4" />
                                        <path d="m9.113 12.276.014-.194-3.273-.187-1.894-.33-.033.193 1.903.33 3.283.188Zm2.934-9.093.16-.11-.462-.665L9.572.995 8.041.933l-.008.194 1.478.06 2.096 1.364.44.632Z" fill="#C4C7D4" />
                                        <path d="m5.389 1.269.032.061 1.547.119.029-.004c.276-.038 2.46-.339 2.544-.353.09-.015-.49-.268-.49-.268L9.01.786a6.284 6.284 0 0 0-3.623.483Zm6.099 2.968 1.616 2.271 1.076-.717a6.273 6.273 0 0 0-1.208-2.654l-.001-.001c-.551-.285-1.259-.638-1.294-.656h-.001l-.188 1.757Zm-9.77 2.325.95-1.75.396-1.723a6.258 6.258 0 0 0-1.346 3.473Zm.777 3.028.09.626v.001a6.327 6.327 0 0 0 2.604 2.418l.657-.643-1.802-1.987-1.549-.416Zm10.12 1.432-.37-1.802-2.518.6-1.04 2.38 1.803.554 2.125-1.732ZM6.597 3.207l2.3 1.473-.929 2.94H4.841l-.644-2.575 2.4-1.838Z" fill="#2D3146" />
                                        <path d="M15 12c0 .796-.738 1.559-2.05 2.121C11.637 14.684 9.857 15 8 15c-1.857 0-3.637-.316-4.95-.879C1.738 13.56 1 12.796 1 12" stroke="#fff" />
                                    </svg>
                                </div>
                                <div>
                                    <svg viewBox="0 0 16 16">
                                        <rect x="4" y="2" width="8" height="12" rx="1" fill="#FFB822" />
                                    </svg>
                                </div>
                                <div>
                                    <svg viewBox="0 0 16 16">
                                        <rect x="4" y="2" width="8" height="12" rx="1" fill="#F66" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div>{event.home.name}</div>
                                {
                                    Object.keys(event.scores).map(key =>
                                        event.scores[key].home &&
                                        <div key={key}>
                                            {event.scores[key].home}
                                        </div>
                                    )
                                }
                                <div>
                                    <p>{event.ss.split('-')[0]}</p>
                                </div>
                                <div>{event.stats.corners[0]}</div>
                                <div>{event.stats.penalties[0]}</div>
                                <div>{event.stats.yellowcards[0]}</div>
                                <div>{event.stats.redcards[0]}</div>
                            </div>
                            <div>
                                <div>{event.away.name}</div>
                                {
                                    Object.keys(event.scores).map(key =>
                                        event.scores[key].away &&
                                        <div key={key}>
                                            {event.scores[key].away}
                                        </div>
                                    )
                                }
                                <div>
                                    <p>{event.ss.split('-')[1]}</p>
                                </div>
                                <div>{event.stats.corners[1]}</div>
                                <div>{event.stats.penalties[1]}</div>
                                <div>{event.stats.yellowcards[1]}</div>
                                <div>{event.stats.redcards[1]}</div>
                            </div>
                        </div>
                    }
                </div>
                {
                    event.stats &&
                    <div className={style.panel}>
                        <div className={style.sort}>{t('interface.events')}</div>
                        <div className={style.table}>
                            {
                                Object.keys(event.stats).map(key =>
                                    <Scale
                                        text={key}
                                        home={event.stats[key][0]}
                                        away={event.stats[key][1]}
                                        key={key}
                                    />
                                )
                            }
                        </div>
                    </div>
                }
                {
                    event.events &&
                    <div className={style.panel}>
                        <div className={style.sort}>{t('interface.summary')}</div>
                        <div className={style.table}>
                            {
                                event.events.map((el, idx) =>
                                    <div
                                        key={idx}
                                        className={style.row}
                                    >
                                        <div className={style.cell}>
                                            {el.text.split('\' -')[0]}'
                                        </div>
                                        <div className={style.cell}>
                                            {el.text.split('\' -')[1]}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
}

export default Overview;
