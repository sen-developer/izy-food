import './App.css';
import Layout from "./components/structure/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PizzaRouter from "./components/structure/PizzaRouter";
import PopularOrders from "./components/structure/PopularOrders";
import DrinkRouter from "./components/structure/DrinkRouter";
import ComboRouter from "./components/structure/ComboRouter";
import RegistrationPage from "./components/structure/RegistrationPage";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route  path='home' element={<HomePage/>}>
                    <Route path='pizza' element={<PizzaRouter/>}></Route>
                    <Route path='drink' element={<DrinkRouter/>}></Route>
                    <Route path='combo' element={<ComboRouter/>}></Route>
                    <Route path='' element={<PopularOrders/>}></Route>
                </Route>
                <Route  path='' element={<Navigate to='/home' replace />}/>
                <Route path='reg' element={<RegistrationPage/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;
