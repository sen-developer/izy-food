import {Outlet} from "react-router-dom";
import MainContent from "../UI/MainContent";
import ItemsMenu from "../structure/ItemsMenu";

const HomePage = () => {
    return (
        <MainContent>
            <ItemsMenu/>
            <Outlet/>
        </MainContent>
    )
}
export default HomePage