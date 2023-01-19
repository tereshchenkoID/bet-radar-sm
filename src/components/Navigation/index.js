import Container from "../Container";
import Logo from "../Logo";
import Languages from "../../modules/Languages";

import style from './index.module.scss';

const Navigation = () => {
    return (
        <nav className={style.block}>
           <Container>
               <div className={style.wrapper}>
                  <Logo />
                  <Languages />
               </div>
           </Container>
        </nav>
    );
}

export default Navigation;
