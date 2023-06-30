import style from "./Home.module.css"
import BackgroundBlock from "./UI/BackgroundBlock";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {memo} from "react";


const Home = ()=>{
    const {t} = useTranslation();
    const [isLight,setIsLight] = useState(false)

    const flashIn = ()=>{
        setIsLight(true)
    }
    const flashOut = ()=>{
        setIsLight(false)
    }
    console.log("home")

    return(
        <BackgroundBlock className={style.homeImg} animation = {isLight?style.flashAnim:''}>
            <div className={style.context}>
                <h1 onMouseEnter={flashIn} onMouseLeave={flashOut}>{t("homePage.header")}</h1>
                <p>{t("homePage.context")}</p>
            </div>
        </BackgroundBlock>
    )
}

export default memo(Home);