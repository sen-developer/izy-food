import Logo from "../UI/Logo";
import "./Header.css"
import {NavLink} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useDispatch} from "react-redux";
import {ProductAction} from "../../store/Product.js"
import {useSelector} from "react-redux";
import {useEffect} from "react";
const Header = () => {
    const dispatchFunction = useDispatch();
    const totalItemCount = useSelector(state => state.product.totalItemCount)
    const animationAdd = useSelector(state=>state.product.itemChange.add)
    const changeModal = ()=>{
        dispatchFunction(ProductAction.openOrCloseModal())
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatchFunction(ProductAction.itemChangeAnim({add:false}));
        },1700)

        return ()=> clearTimeout(timer);
    },[animationAdd])

    return (
        <header>
        <div className={"header"}>
            <NavLink to={''}><Logo/></NavLink>
            <div className={"navGroup"}>
                <NavLink to='home'>Home</NavLink>
                <div id="cartView" onClick={changeModal}>
                    <ShoppingCartOutlinedIcon color="action"/>
                    <div id="cartText"><span>C</span><span>a</span><span>r</span><span>t</span></div>
                    <span id="items_count">{totalItemCount}</span>
                </div>
                <NavLink to='reg'>Sign Up</NavLink>
            </div>
        </div>
            {animationAdd && <section className="addAnimation">Item added</section>}
        </header>
    )
}

export default Header;