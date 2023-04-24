import {Suspense, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import classNames from "classnames";

import {router} from "router";

import {checkData} from "helpers/checkData";

import Navigation from "components/Navigation";
import Loader from "components/Loader";

import {configData} from "store/actions/configAction";

import style from './index.module.scss';

const App = () => {
    const dispatch = useDispatch()
    const {i18n} = useTranslation();
    const {url} = useSelector((state) => state.url)
    const {config} = useSelector((state) => state.config)
    const [init, setInit] = useState(true)

    const changeLanguage = (language) => {

        i18n.changeLanguage(language, (err, t) => {
            if (err) {
                i18n.changeLanguage('en')
                localStorage.setItem("url", JSON.stringify({url: 'en'}))
                setInit(false)
            }
        });
    };

    useEffect(() => {
        if (init) {
            !checkData(url) && changeLanguage(url.language)
        }
    }, [url.language]);

    useEffect(() => {
        checkData(config) && dispatch(configData())
    }, []);

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
