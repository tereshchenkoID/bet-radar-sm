import Container from "../Container";
import Logo from "../Logo";
import Tab from "modules/Tab";

import style from './index.module.scss';

const Navigation = () => {
    return (
        <nav className={style.block}>
            <div className={style.top}>
               <Container>
                   <Logo />
               </Container>
            </div>
            <div className={style.bottom}>
                <Container>
                    <Tab />
                </Container>
            </div>
        </nav>
    );
}

export default Navigation;
