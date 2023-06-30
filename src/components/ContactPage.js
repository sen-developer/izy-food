import BackgroundBlock from "./UI/BackgroundBlock";
import "./ContactPage.css"
import {useTranslation} from "react-i18next";
import {useEffect, useReducer, useState} from "react";


const initialEmailState = {
    value: "",
    isValid: undefined,
};
const emailReducer = (prevState, action) => {
    if (action.type === "EMAIL_INPUT") {
        return {
            value: action.value,
            isValid: action.value.includes("@"),
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: prevState.value,
            isValid: prevState.value.includes("@"),
        };
    }
    return initialEmailState;
};
const ContactPage = () => {
    const {t} = useTranslation();
    const [emailState, dispatchEmailState] = useReducer(emailReducer, initialEmailState);
    const [validCss,setValidCss] = useState('myForm')

    const emailChangeHandler = (event) => {
        dispatchEmailState({ type: "EMAIL_INPUT", value: event.target.value });
    };
    const validateEmailHandler = () => {
        dispatchEmailState({ type: "INPUT_BLUR" });
    };

    useEffect(()=>{
        if(emailState.isValid || emailState.isValid===undefined){
            setValidCss('myForm')
        }else{
            setValidCss('myForm notValid')
        }
    },[emailState.isValid])


    return (<BackgroundBlock className='contactPageImg'>

        <section id="contact">
            <div className="forMore">
                <h2>{t("contact.header")}</h2>
                <p>{t("contact.context")}</p>
                <ul>
                    <li>+37494600443</li>
                    <li>+37443099010</li>
                    <li>bmwcodearmenia@gmail.com</li>
                </ul>
            </div>
            <div className="cont-form">
                <form>
                    <div className="name_block">
                        <input type="text" className="myForm" name="name" id="name" required placeholder={t("contact.form.name")}/>
                    </div>
                    <div className="email_block">
                        <input onChange={emailChangeHandler} onBlur={validateEmailHandler} type="email" className={validCss} name="email" id="email" value={emailState.value} placeholder={t("contact.form.email")} required/>
                    </div>
                    <div className="message_block">
                    <textarea name="message" id="message" cols="30" rows="7" placeholder={t("contact.form.text")} required></textarea>
                    </div>
                    <div className="sendMessage_block">
                        <input type="submit" value={t("contact.form.button")} className="sendMessage" id="btn-pro"/>
                    </div>
                </form>
            </div>
        </section>
    </BackgroundBlock>)
}
export default ContactPage;