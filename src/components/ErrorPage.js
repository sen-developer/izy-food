import "./Errorpage.css";
import BackgroundBlock from "./UI/BackgroundBlock";
const ErrorPage = () => {
    return (
        <BackgroundBlock className='backgroundBlockImg'>
            <h1>ERROR 404</h1>
            <p>Page not found</p>
        </BackgroundBlock>
    )
}
export default ErrorPage;