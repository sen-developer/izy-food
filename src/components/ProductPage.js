import style from "./ProductPage.module.css"
import {memo} from "react";
import BackgroundBlock from "./UI/BackgroundBlock";
import {useTranslation} from "react-i18next";

const ProductPage = ()=>{
    const path = "/img/options/";
    let imgFormatter = '.jpg';
    const {t} = useTranslation();
    const currentPath = window.location.pathname.split("/")[2];

    const langArr = t("options.context",{ returnObjects: true})


    const currentProduct = langArr.find(item=>item.id===currentPath)
        const {context,about,img} = currentProduct!==undefined?currentProduct:t("options.itemNotFound",{ returnObjects: true});
        if(currentProduct===undefined){
            imgFormatter=".png"
        }

    return(
        <BackgroundBlock className = {style.productBackgroundImg}>
            <div className={style.productInfoGrid}>
                <div className={style.infoBlock}>
                    <h3>{context}</h3>
                    <p>{about}</p>

                </div>
                <div className={style.imgBlock}>
                    <img src={path + img + imgFormatter} className={style.img} alt=""/>
                </div>
            </div>

        </BackgroundBlock>
    )
}
export default memo(ProductPage);