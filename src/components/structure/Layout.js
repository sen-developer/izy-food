import {Outlet} from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";
import CartModal from "./CartModal";
import {useSelector} from "react-redux";
const Layout = () => {
    const isModalActive = useSelector(state => state.product.isModalActive);
    return (
        <>
            <Header/>
            <Outlet/>
            {isModalActive && <CartModal/>}
            <Footer/>
        </>
    )
}
export default Layout;