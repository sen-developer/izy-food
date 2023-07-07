import styles from "./RegistrationPage.module.css"
import {useEffect, useReducer, useState} from "react";

const pattern = /^[a-zA-Zа-яА-ЯёЁ0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9.-]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$/;
const initialEmailState = {
    email:undefined,
    isValid:undefined,
}
const initialPassState = {
    value:undefined,
    rePass:'',
    isValid: undefined
}
const emailReducer = (prevState,action)=>{
    if(action.type === "EMAIL_INPUT"){
        return {
            email: action.value,
            isValid: pattern.test(action.value),
        }
    }
    return initialEmailState;
}
const passReducer = (prevState,action)=>{
    if(action.type === "PASS_INPUT"){
        return {
            value:action.value,
            rePass:prevState.rePass,
            isValid: prevState.rePass!==undefined?action.value.length>=6 && action.value === prevState.rePass:false,
        }
    }
    if(action.type === "REPASS_INPUT"){
        return {
            value: prevState.value,
            rePass: action.value,
            isValid: prevState.value!==undefined?prevState.value.length>6 && prevState.value === action.value:false,
        }
    }


    return initialPassState;
}

const RegistrationPage = () => {
    const [emailState,emailDispatch] = useReducer(emailReducer,initialEmailState);
    const [passState,passDispatch] = useReducer(passReducer,initialPassState);
    const [wasEmailInputTouched,setEmailInputTouched] = useState(false);
    const emailHandler = (e)=>{
        emailDispatch({type:"EMAIL_INPUT",value:e.target.value});
    }
    const passHandler = (e)=>{
        passDispatch({type:"PASS_INPUT",value:e.target.value})
    }
    const rePassHandler = (e)=>{
        passDispatch({type:"REPASS_INPUT",value:e.target.value})
    }
    const emailInputBlurHandler = ()=>{
        if(!emailState.isValid){
            setEmailInputTouched(true);
        }
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(emailState.isValid){
                setEmailInputTouched(false)
            }
        },1030);
        return ()=> clearTimeout(timer);
    },[emailState])


    return (
        <div className={styles.login}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.regForm}>
                <h1>Coming Soon</h1>

                <div>
                    <input name="email" type="email" id={styles["emailId"]} value={emailState.email || ''} onChange={emailHandler}
                           className={wasEmailInputTouched?styles.touched:styles.regInput}
                           placeholder={"example@mail.ru"}
                           onBlur={emailInputBlurHandler}/>
                </div>
                <div>
                    <input name="password" type="password" id={styles["password"]} onChange={passHandler} className={styles.regInput}
                           placeholder={"password"}/>
                </div>
                <div>
                    <input type="password" className={styles.regInput} onChange={rePassHandler}
                           placeholder={"reenter password"}/>
                </div>
                <div>
                    <input type="tel" className={styles.regInput}
                           placeholder={"tel:789......"}/>
                </div>
            </form>
        </div>
    )
}
export default RegistrationPage;