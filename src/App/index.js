import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import { useTranslation } from "react-i18next";

import {router} from "../router";

import Navigation from "../components/Navigation";
import Loader from "../components/Loader";

import style from './index.module.scss';

const App = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
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
