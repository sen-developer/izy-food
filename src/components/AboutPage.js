import BackgroundBlock from "./UI/BackgroundBlock";
import style from "./AboutPage.module.css"
import {useTranslation} from "react-i18next";
import logo from "./img/logo.png"
const AboutPage = ()=>{
    const {t} = useTranslation();

    return(
        <BackgroundBlock className ={style.aboutPageImg}>
            <section className={style.sec}>
                <div className={style.about}>
                    <div className={style.aboutLeft}>
                        <h2 className={style.heading}>{t("aboutUs.header")}</h2>
                        <p className={style.context}>{t("aboutUs.context")}</p>
                    </div>
                    <div className={style.aboutRight}>
                        <div className={style.aboutImg}>
                                <img src={logo} className={style.aboutImgLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </BackgroundBlock>
    )
}
export default AboutPage;