import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import style from './index.module.scss';

const Logo = () => {
    const {url} = useSelector((state) => state.url);
    const {config} = useSelector((state) => state.config)

    return (
        <NavLink
            to={`/live/${url.language}/${url.theme}`}
            className={style.block}
            aria-label={'Overview'}
        >
            {
                config.LOGO &&
                <img src={config.LOGO} alt="Logo"/>
            }
        </NavLink>
    );
}

export default Logo;
