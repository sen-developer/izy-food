import styles from "./productGlobal.module.css"
import ProductItem from "./ProductItem";
import {PRODUCT_ITEMS} from "../../store/Product"
const DrinkRouter = ()=>{
    const items = PRODUCT_ITEMS.drink.map(item => {
            return <ProductItem key={item.id} get={item}/>
        }
    )
    return (
        <section className={styles.productGlobal}>
            {items}
        </section>
    )
}
export default DrinkRouter;