import  "./ItemsMenu.css"
import {NavLink} from "react-router-dom";
const ItemsMenu = ()=>{
    return(
        <section className="itemsMenu">
            <NavLink to='pizza'>Pizza Orders</NavLink>
        </section>
    )
}
export default ItemsMenu;