import style from './index.module.scss';

const Logo = () => {

    return (
        <a
            href={"#"}
            className={style.block}
        >
            <img
                src={"https://d29bnxtiec58nc.cloudfront.net/sites/image-16737544013081.svg"}
                alt={"Logo"}
            />
        </a>
    );
}

export default Logo;
