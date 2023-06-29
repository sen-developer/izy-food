import styles from "./PizzaRouter.module.css"
import ProductItem from "./ProductItem";
import {PRODUCT_ITEMS} from "../../store/Product"
const PizzaRouter = ()=>{
    // console.log(PRODUCT_ITEMS)
    const items = PRODUCT_ITEMS.map(item=><ProductItem key={item.id} get = {item}/>)
    return(
        <section className={styles.pizza}>
            {items}
        </section>
    )
}
export default PizzaRouter;