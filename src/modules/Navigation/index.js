import {NavLink, useParams} from "react-router-dom";
import classNames from "classnames";

import Container from "../../components/Container";

import style from './index.module.scss';

const Navigation = () => {
    const {theme, sport, id} = useParams()

    return (
        <div className={style.block}>
            <Container>
                <div className={style.wrapper}>
                    <NavLink
                        to={`/${theme}/rt/${sport}/${id}`}
                        className={({ isActive }) =>
                            classNames(
                                isActive && style.active,
                                style.link
                            )
                        }
                        aria-label={'Head to Head'}
                    >
                        <span className={style.icon}>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 21.4V30h-2v-8.6c0-.2 0-.4-.2-.5l-4.3-2.2c-.6-.3-1.2-.9-1.4-1.6 0-.8.4-1.5 1-1.9 1-1 1-4 1-5.5 0-1.4-.4-3.7-3.3-3.7s-3.3 2.3-3.3 3.7c0 1.6 0 4.4 1.1 5.5.6.4 1 1 1 1.8v.1c-.3.7-.8 1.3-1.5 1.6l-3.6 2.2a1 1 0 0 1-1 0l-3.7-2.3c-.6-.2-1.1-.8-1.3-1.5 0-.8.3-1.5.9-1.9 1.1-1 1.1-4 1.1-5.5 0-1.4-.4-3.7-3.3-3.7S5.8 8.3 5.8 9.7c0 1.6 0 4.4 1.2 5.5a2.2 2.2 0 0 1 .8 1.8c-.2.7-.7 1.3-1.3 1.6L2.1 21a.8.8 0 0 0-.1.5V30H0v-8.6c0-1 .5-1.8 1.2-2.2l4.3-2.3.2-.1-.1-.2C4 15.1 3.8 12.3 3.8 9.7v-.5A5.2 5.2 0 0 1 9.2 4h.2a5.2 5.2 0 0 1 5.1 5.8c0 2.5-.1 5.3-1.7 6.8l-.2.2h.2l3.2 2 3.1-1.9.3-.1-.2-.2c-1.6-1.5-1.7-4.3-1.7-6.9v-.5A5.2 5.2 0 0 1 22.7 4h.2a5.2 5.2 0 0 1 5.1 5.8c0 2.5 0 5.3-1.7 6.8l-.1.2h.2l4.3 2.4c.7.4 1.2 1.2 1.2 2.2zM4 26h10v-2H4zm0 4h10v-2H4zm14-4h10v-2H18zm0 4h10v-2H18z" />
                            </svg>
                        </span>
                        <span>Head to Head</span>
                    </NavLink>
                    <NavLink
                        to={`/${theme}/rh/${sport}/${id}`}
                        className={({ isActive }) =>
                            classNames(
                                isActive && style.active,
                                style.link
                            )
                        }
                        aria-label={'Tables'}
                    >
                        <span className={style.icon}>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29 4H3a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h26c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM4 6h4v2H4zm24 2H10V6h18zm1 5H3a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h26c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM4 15h4v2H4zm24 2H10v-2h18zm1 5H3a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h26c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM4 24h4v2H4zm24 2H10v-2h18z"/>
                            </svg>
                        </span>
                        <span>Tables</span>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}

export default Navigation;
