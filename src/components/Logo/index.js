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
        >
            <img
                src={"https://d29bnxtiec58nc.cloudfront.net/sites/image-16737544013081.svg"}
                alt={"Logo"}
            />
        </NavLink>
    );
}

export default Logo;
