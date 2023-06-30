import './App.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Layout from "./components/structure/Layout";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";
import OptionsPage from "./components/OptionsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ErrorPage from "./components/ErrorPage";
import ProductPage from "./components/ProductPage";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";



function App() {
    const {t,i18n} = useTranslation();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const [lang,setLang] = useState(i18n.language);
    const isLangUs = lang==='us';

    const toggleLanguage = ()=>{
        i18n.changeLanguage(isLangUs?'am':'us')
        setLang(isLangUs?'am':'us')
    }

    useEffect(()=>{
        if(queryParams.get("lang")===null){queryParams.set("lang",lang)}
        else{
            localStorage.setItem("lang",queryParams.get("lang"));
        }
        i18n.changeLanguage(localStorage.getItem("lang"));
        setLang(localStorage.getItem("lang"));
    },[queryParams.get("lang")])

    const nav =t("navigation",{ returnObjects: true})


    return (
        <Routes>
            <Route path="/" element={<Layout lang = {lang} changeLanguage = {toggleLanguage} islangUs={isLangUs} nav = {nav}/>}>
                <Route index element={<Home />}/>
                <Route path='home' element={<Navigate to='/' replace />}/>
                <Route path="videos" element={<VideoPage/>}/>
                <Route path="options" element={<OptionsPage lang = {lang}/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="options/*" element={<ProductPage />}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
