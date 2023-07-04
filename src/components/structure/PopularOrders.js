import styles from "./productGlobal.module.css"
import ProductItem from "./ProductItem";
import {PRODUCT_ITEMS} from "../../store/Product";

const PopularOrders = () => {

    const food = PRODUCT_ITEMS.food.map(item => {
            return item.isPopular === true ? <ProductItem key={item.id} get={item}/> : ''
        }
    )
    const drink = PRODUCT_ITEMS.drink.map(item => {
            return item.isPopular === true ? <ProductItem key={item.id} get={item}/> : ''
        }
    )
    const combo = PRODUCT_ITEMS.combo.map(item => {
            return item.isPopular === true ? <ProductItem key={item.id} get={item}/> : ''
        }
    )

    return (
            <section className={styles.productGlobal}>
                {[...food,...drink,...combo]}
            </section>
    )
}
export default PopularOrders;