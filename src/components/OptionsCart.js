import style from "./OptionsCart.module.css"
import {Link} from "react-router-dom";
import {memo} from "react";

const OptionsCart = (props)=>{

    return(
        <div className={style.cart}>
            <div className={style.imgControl}>
                <img src={props.img} alt="" className={style.img}/>
            </div>
            <h3 className={style.heading}>{props.context}</h3>
            <div className={style.btnBlock}>
                <Link className={style.moreBtn} to={props.id+'?lang='+ props.lang}>{props.buttonText}</Link>
            </div>
        </div>
    );
}
export default memo(OptionsCart);