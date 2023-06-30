import BackgroundBlock from "./UI/BackgroundBlock";
import style from "./VideoPage.module.css";
const VIDEO_ID = ["LhW5zWuJL3w","ZRnTYXlF1v4","PI2m_J5M4oE"]
const VideoPage = ()=>{

    const VIDEO_ITEMS = VIDEO_ID.map((item,index)=>
        <iframe src={`https://www.youtube.com/embed/${VIDEO_ID[0]}`} title={"selectedVideo" + index} className={style.iframes} frameBorder="0" allowFullScreen ></iframe>)
    return(
        <BackgroundBlock className = {style.videoPageImg}>
            <div className={style.videoBlock}>
                {VIDEO_ITEMS}

            </div>
        </BackgroundBlock>
    )
}
export default VideoPage;