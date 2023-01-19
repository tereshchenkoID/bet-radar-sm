import {useTranslation} from "react-i18next";
import {useState} from "react";

import classNames from "classnames";

import style from './index.module.scss';

const Languages = () => {
    const { i18n } = useTranslation();
    const [active, setActive] = useState(localStorage.getItem('language') || 'en');

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language)
    };

    return (
        <div className={style.block}>
            <button
                className={classNames(style.button, active === 'en' && style.active)}
                onClick={() => {
                    setActive('en')
                    changeLanguage("en")
                }}
            >
                EN
            </button>
            <button
                className={classNames(style.button, active === 'ru' && style.active)}
                onClick={() => {
                    setActive('ru')
                    changeLanguage("ru")
                }}
            >
                RU
            </button>
        </div>
    );
}

export default Languages;
