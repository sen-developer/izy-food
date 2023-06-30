import "./Layout.css"
import {NavLink, Outlet} from "react-router-dom";
import Logo from "../UI/Logo";
import Footer from "./Footer";
import am from "../img/am.png"
import us from "../img/ukus.png"


const Layout = (props) => {

    return (
        <>
            <header className='header'>
                <Logo lang = {props.lang}/>
                <div id='navGroup'>
                    <NavLink to={'options?lang=' + props.lang}>{props.nav.options}</NavLink>
                    <NavLink to={'videos?lang=' + props.lang}>{props.nav.videos}</NavLink>
                    <NavLink to={'about?lang=' + props.lang}>{props.nav.about}</NavLink>
                    <NavLink to={'contact?lang=' + props.lang}>{props.nav.contact}</NavLink>
                    <button onClick={props.changeLanguage} className='langBtn'><img src={props.islangUs?am:us} className='langImg' alt=""/></button>
                </div>
            </header>
                <Outlet lang = {props.lang}/>
            <Footer/>
        </>
    )
}

export default Layout;