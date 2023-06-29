import styles from "./MainContent.module.css"
const MainContent = (props)=>{
    return(
        <section className={styles.mainContent + ' ' + props.className}>
            {props.children}
        </section>
    )
}
export default MainContent;