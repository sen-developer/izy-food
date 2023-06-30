import style from "./BackgroundBlock.module.css"
const BackgroundBlock = (props)=>{

    return(
        <div className={style.primary + ' ' + props.className + ' ' + props.animation}>
            {props.children}
        </div>
    )
}
export default BackgroundBlock;