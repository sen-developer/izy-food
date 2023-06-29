import './App.css';
import Layout from "./components/structure/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PizzaRouter from "./components/structure/PizzaRouter";
import PopularOrders from "./components/structure/PopularOrders";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route  path='home' element={<HomePage/>}>
                    <Route path='pizza' element={<PizzaRouter/>}></Route>
                    <Route path='' element={<PopularOrders/>}></Route>
                </Route>
                <Route  path='' element={<Navigate to='/home' replace />}/>
            </Route>
        </Routes>
    );
}

export default App;
