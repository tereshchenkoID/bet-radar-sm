import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import style from './index.module.scss';

const Logo = () => {
    const {url} = useSelector((state) => state.url);

    return (
        <NavLink
            to={`/live/${url.language}/${url.theme}`}
            className={style.block}
            aria-label={'Overview'}
        />
    );
}

export default Logo;
