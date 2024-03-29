import {useSelector} from "react-redux";
import checkData from "helpers/checkData";

import Tab from "modules/Tab";
import Logo from "../Logo";
import Container from "../Container";

import style from './index.module.scss';

const Navigation = () => {
    const {url} = useSelector((state) => state.url)

    return (
        <nav className={style.block}>
            <div className={style.top}>
               <Container>
                   <Logo />
               </Container>
            </div>
            {
                !checkData(url) && url.sport &&
                    <div className={style.bottom}>
                        <Container>
                            <Tab />
                        </Container>
                    </div>
            }
        </nav>
    );
}

export default Navigation;
