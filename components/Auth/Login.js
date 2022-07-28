import {useEffect, useState} from "react";
import Input from "../Common/Input";
import Password from "../Common/Password";
import Modal from "../Common/Modal";
import error from "../../messages/error";
import success from "../../messages/success";
import {useDispatch, useSelector} from "react-redux";
import * as authActions from "../../store/slices/auth";

export default function Login() {
    const dispatcher = useDispatch()

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [valid, setValid] = useState(false);
    const [modal, setModal] = useState(false)

    const submit = async () => {
        setModal(true)
    }

    useEffect(() => {

        username && password && !usernameError && !passwordError ? setValid(true) : setValid(false);
        username === "error" ? setUsernameError(error[0]) : setUsernameError("");
        password === "error" ? setPasswordError(error[1]) : setPasswordError("")

    }, [username, password, usernameError, passwordError])

    return (
        <div className = {"flex flex-row"}>
            <div className = {"basis-1/3 flex flex-col items-center py-6 gap-6 h-screen justify-between "}>
                <img src = {"/logo-type.png"} alt = {"logo"} className = {"w-1/2 h-auto "}/>
                <div className = {"w-3/5 flex flex-col items-center gap-8"}>
                    <p className = {"h2 text-s-10 "}>ورود به پنل کاربری</p>
                    <p className = {"b1 text-s-30"}>برای ورود، نام کاربری و رمز ورود خود را وارد کنید.</p>
                    <form className = {"w-full flex flex-col gap-12 my-4"}>

                        <Input type = {"text"} name = {"username"} title = {"نام کاربری"} state = {username}
                               setState = {setUsername} error = {usernameError}/>

                        <Password title = {"رمز ورود"} state = {password} setState = {setPassword}
                                  error = {passwordError}/>

                    </form>
                    <button
                        disabled = {!valid}
                        className = {"b1 w-full p-2 rounded " + (valid ? "text-s-10 bg-primary" : "text-s-30 bg-primary-1 cursor-not-allowed")}
                        onClick = {submit}>
                        ورود به پنل
                    </button>
                    <div className = {"h-px w-full bg-s-90 mt-4"}></div>
                </div>
                <p className = {"b1 text-s-10 border-b border-primary cursor-pointer"}
                   onClick = {() => dispatcher(authActions.forgetSet())}
                >اطلاعات ورود را فراموش کردم</p>

                <Modal isOpen = {modal} setIsOpen = {setModal} title = {success[0].title}
                       body = {success[0].body} type = {1} extra = {"w-1/3 "} cta = {false}/>
            </div>


            <div className = {"basis-2/3"}>
                <img src = {"/login-bg.jpg"} alt = {"bg"} className = {"h-screen w-full"}/>
            </div>
        </div>
    )
}