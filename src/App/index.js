import {Suspense, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import classNames from "classnames";

import checkData from "helpers/checkData";

import {router} from "router";

import Navigation from "components/Navigation";
import Loader from "components/Loader";

import style from './index.module.scss';

const App = () => {
    const {url} = useSelector((state) => state.url);
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        !checkData(url) && changeLanguage(url.language)
    }, [url]);

    return (
        <div
            className={classNames(
                style.root,
                !checkData(url) && style[url.theme]
            )}
        >
            <Navigation />
            <main className={style.main}>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {
                            router.map(item =>
                                <Route
                                    key={new Date().getTime()}
                                    path={item.path}
                                    element={item.element}
                                />
                            )
                        }
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

export default App;
