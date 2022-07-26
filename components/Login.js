import {useEffect, useState} from "react";
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import styles from '../styles/Home.module.css'

export default function Login() {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(false);
    const [showPassword, setShowPassword] = useState("password");

    const submit = async () => {

    }

    useEffect(() => {
        if (username && password) {
            setValid(true)
        } else {
            setValid(false)
        }

    }, [username, password])

    return (
        <div className = {"flex flex-row"}>
            <div className = {"basis-1/3 flex flex-col items-center py-6 gap-6 h-screen justify-between"}>
                <img src = {"/logo-type.png"} alt = {"logo"} className = {"w-1/2 h-auto "}/>
                <div className = {"w-3/5 flex flex-col items-center gap-12"}>
                    <p className = {"h2 text-s-10 "}>ورود به پنل کاربری</p>
                    <p className = {"b1 text-s-30"}>برای ورود، نام کاربری و رمز ورود خود را وارد کنید.</p>
                    <form className = {"w-full flex flex-col gap-12"}>
                        <div className = {"relative"}>
                            <p className = "b1 text-s-30 mb-2 ">
                                نام کاربری
                            </p>
                            <PersonPinSharpIcon
                                className = {"absolute left-2 top-[38px] " + (username ? "text-s-60 animate-fadeIn" : "text-white")}/>
                            <input
                                type = "text"
                                name = "username"
                                id = "username"
                                value = {username}
                                className = "w-full rounded b1 p-2 border border-s-60 focus:border-s-10 focus:outline-0 focus:border-2"
                                onChange = {e => {
                                    setUser(e.target.value);
                                }}
                            />
                        </div>
                        <div className = {"relative"}>
                            <p className = "b1 text-s-30 mb-2 ">
                                رمز ورود
                            </p>
                            <RemoveRedEyeRoundedIcon
                                className = {"absolute left-2 top-[38px] cursor-pointer " + (password ? "text-s-60 animate-fadeIn" : "text-white")}
                                onClick = {() => {
                                    setShowPassword("text")
                                }}
                            />
                            <VisibilityOffRoundedIcon
                                className = {"absolute left-2 top-[38px] cursor-pointer text-s-60 " + (showPassword === "text" ? "block " : (styles.hidden))}
                                onClick = {() => {
                                    setShowPassword("password")
                                }}
                            />
                            <input
                                type = {showPassword}
                                name = "password"
                                id = "password"
                                value = {password}
                                className = "w-full rounded b1 p-2 border border-s-60 focus:border-s-10 focus:outline-0 focus:border-2"
                                onChange = {e => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
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


            </div>

            <div className = {"basis-2/3"}>
                <img src = {"/login-bg.jpg"} alt = {"bg"} className = {"h-screen w-full"}/>
            </div>
        </div>
    )
}