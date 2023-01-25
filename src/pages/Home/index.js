import {Suspense, useEffect} from "react";
import {Route, Routes, useParams} from "react-router-dom";

import {router} from "router";

import Loader from "components/Loader";

const Home = () => {
    const url = useParams()

    useEffect(() => {
        console.log(url)
    }, []);

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {
                        router.map(item =>
                            <Route
                                key = {new Date().getTime()}
                                path = {item.path}
                                element = {item.element}
                            />
                        )
                    }
                </Routes>
            </Suspense>
        </>
    );
}

export default Home;
