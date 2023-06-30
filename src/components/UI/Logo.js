import style from "./Logo.module.css"
import {Link} from "react-router-dom";

const Logo = (props) => {
    return (
        <Link to={'/?lang='+props.lang}>
            <div className={style.logo}>
            </div>
        </Link>
    )
}

export default Logo;