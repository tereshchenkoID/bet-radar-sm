import Container from "../Container";
import Logo from "../Logo";

import style from './index.module.scss';

const Navigation = () => {
    return (
        <nav className={style.block}>
           <Container>
               <Logo />
           </Container>
        </nav>
    );
}

export default Navigation;
