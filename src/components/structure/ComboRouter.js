import {PRODUCT_ITEMS} from "../../store/Product";
import ProductItem from "./ProductItem";
import styles from "./productGlobal.module.css";

const ComboRouter = ()=>{
    const items = PRODUCT_ITEMS.combo.map(item => {
            return <ProductItem key={item.id} get={item}/>
        }
    )
    return (
        <>
        <section className={styles.productGlobal}>
            {[...items]}
        </section>
        </>
    )
}
export default ComboRouter;