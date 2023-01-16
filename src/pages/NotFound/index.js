import Container from "../../components/Container";

import style from './index.module.scss';

const NotFound = () => {

    return (
        <div className={style.block}>
            <Container>
                <h6 className={style.title}>The event is not found</h6>
                <p className={style.subtitle}>Sorry, no events on this page were found</p>
            </Container>
        </div>
    );
}

export default NotFound;
