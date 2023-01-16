import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {router} from "../router";

import Navigation from "../components/Navigation";
import Loader from "../components/Loader";

import style from './index.module.scss';

const App = () => {
    return (
        <>
            <Navigation />
            <main className={style.main}>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {
                            router.map(item =>
                                <Route
                                    key={new Date().getTime()}
                                    path={item.path} element = {item.element}
                                />
                            )
                        }
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
