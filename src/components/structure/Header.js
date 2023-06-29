import Logo from "../UI/Logo";
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={"header"}>
            <NavLink to={''}><Logo/></NavLink>
            <div className={"navGroup"}>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='login'>login</NavLink>
            </div>
        </header>
    )
}

export default Header;