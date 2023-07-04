import styles from "./RegistrationPage.module.css"

const RegistrationPage = () => {
    return (
        <div className={styles.login}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.regForm}>
                <h1>Coming Soon</h1>

                <div>
                    <input name="email" type="email" id={styles["emailId"]} className={styles.regInput}
                           placeholder={"example@mail.ru"}/>
                </div>
                <div>
                    <input name="password" type="password" id={styles["password"]} className={styles.regInput}
                           placeholder={"password"}/>
                </div>
                <div>
                    <input type="password" className={styles.regInput}
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