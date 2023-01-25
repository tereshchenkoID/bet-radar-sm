import {useState, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import classNames from "classnames";

import {fetchData} from "helpers/api";

import Loader from "components/Loader";
import Container from "components/Container";

import style from './index.module.scss';

const Live = () => {
    const url = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData(`https://matchtracker.live/mapping/`).then((data) => {
            setData(data)
            setLoading(false)
        })

        console.log(url)
    }, []);

    return (
        <Container>
            {
                loading
                    ?
                    <Loader />
                    :
                    <div className={style.list}>
                        {
                            data.map((el, idx) =>
                                <NavLink
                                    to={`/${url.language}/${url.theme}/ro/1/${el.statsId}`}
                                    className={classNames(style.item, !el.statsId && style.disabled)}
                                    aria-label={data.categoryName}
                                    key={idx}
                                >
                                    <span>{el.sportName}: {el.categoryName}, {el.tournamentName}</span>
                                    <strong>[{el.participants.home} - {el.participants.away}]</strong>
                                </NavLink>
                            )
                        }
                    </div>
            }
        </Container>
    );
}

export default Live;
