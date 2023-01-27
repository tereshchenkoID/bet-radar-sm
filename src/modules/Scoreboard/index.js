import {checkData} from "helpers/checkData"

import Preloader from "components/Preloader";
import Table from "./Table";

import style from './index.module.scss';

const Scoreboard = ({event}) => {

    return (
        <div className={style.block}>
            {
                checkData(event)
                    ?
                        <Preloader />
                    :
                        <Table data={event} />
            }
        </div>
    );
}

export default Scoreboard;
