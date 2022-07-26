import {useEffect, useState} from "react";
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import styles from '../styles/Home.module.css'
import Input from "./Common/Input";
import Password from "./Common/Password";
import Modal from "./Common/Modal/Modal";

export default function Login() {
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

        username && password ? setValid(true) : setValid(false);
        username === "error" ? setUsernameError("اشتباه است.") : setUsernameError("");
        password === "error" ? setPasswordError("اشتباه است.") : setPasswordError("")

    }, [username, password])

    return (
        <div className = {"flex flex-row"}>
            <div className = {"basis-1/3 flex flex-col items-center py-6 gap-6 h-screen justify-between"}>
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
                <p className = {"b1 text-s-10 border-b border-primary cursor-pointer"}>اطلاعات ورود را فراموش کردم</p>
                <Modal isOpen = {modal} setIsOpen = {setModal} title = {"ورود موفقیت آمیز بود!"}
                       body = {"در حال انتقال به پنل کاربری هستید...."} type = {1} extra={"w-1/3 "}/>
            </div>


            <div className = {"basis-2/3"}>
                <img src = {"/login-bg.jpg"} alt = {"bg"} className = {"h-screen w-full"}/>
            </div>
        </div>
    )
}