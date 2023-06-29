import styles from "./Home.module.css"
import {Outlet} from "react-router-dom";
import MainContent from "../UI/MainContent";
import ItemsMenu from "../structure/ItemsMenu";
const HomePage = ()=>{
    return(
        <MainContent className={styles.home}>
            <ItemsMenu/>
            <section className={styles.popular}>
                <Outlet/>
            </section>
        </MainContent>
    )
}
export default HomePage