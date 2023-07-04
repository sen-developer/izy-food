import  "./ItemsMenu.css"
import {NavLink} from "react-router-dom";
const ItemsMenu = ()=>{
    return(
        <section className="itemsMenu">
            <NavLink to='pizza'>Pizzas</NavLink>
            <NavLink to='drink'>Drink</NavLink>
            <NavLink to='combo'>Combo</NavLink>
        </section>
    )
}
export default ItemsMenu;