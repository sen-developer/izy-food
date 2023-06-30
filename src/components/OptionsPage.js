import style from "./OptionsPage.module.css"
import BackgroundBlock from "./UI/BackgroundBlock";

import OptionsCart from "./OptionsCart";
import {useTranslation} from "react-i18next";

const path = "img/options/";
const imgFormatter = '.jpg';

const OptionsPage = (props)=>{
    const {t} = useTranslation();
    const optionsArr =t("options.context",{ returnObjects: true})
    const optionsContainer = optionsArr.map((item,index)=>{
        return <OptionsCart lang={props.lang} id={item.id} key={item.id} img = {path+item.img+imgFormatter} context = {item.context} buttonText = {t("options.buttonText")} />
    })

    return(
        <BackgroundBlock className = {style.optionsBackgroundImage}>
            <div className={style.contentBox} >
                {optionsContainer}

            </div>
        </BackgroundBlock>
    )
}
export default OptionsPage;