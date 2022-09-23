import {useEffect, useState} from "react";
import Input from "../Forms/Input";
import Modal from "../Common/Modal";
import error from "../../utils/texts/error";
import success from "../../utils/texts/success";
import * as authActions from "../../store/slices/auth";
import {useDispatch} from "react-redux";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function Forget() {
    const dispatcher = useDispatch()

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [modal, setModal] = useState(false);
    const [valid, setValid] = useState(false);

    const submit = async () => {
        setModal(true)
    }

    useEffect(() => {
        email && !emailError ? setValid(true) : setValid(false)
        email === "error" ? setEmailError(error[2]) : setEmailError("");

    }, [email, emailError])

    return (
        <div className = {"basis-1/3"}>
            <div className = {"flex flex-col items-center py-12 gap-6 h-screen justify-between "}>
                <img src = {"/auth/logo-type.png"} alt = {"logo"} className = {"w-1/2 h-auto "}/>

                <div className = {"w-3/5 flex flex-col items-center gap-8"}>
                    <p className = {"h2 text-s-10 "}>فراموشی اطلاعات ورود</p>
                    <div className = {"text-center"}>
                        <p className = {"b1 text-s-30 "}>جهت بازیابی اطلاعات ورود، ایمیل کاربری را وارد کنید.</p>
                        <br/>
                        <p className = {"b1 text-s-30 "}>در صورت صحیح بودن آدرس ایمیل، اطلاعات ورود برای شما ارسال خواهد
                            شد.</p>
                    </div>
                    <form className = {"w-full flex flex-col my-4"}>

                        <Input type = {"email"} name = {"email"} title = {"آدرس ایمیل"} state = {email}
                               setState = {setEmail} error = {emailError}/>

                    </form>
                    {
                        emailError && (<div className = {"text-center"}>
                            <p className = {"b1 text-s-30 "}>در صورت نیاز به پشتیبانی با شماره زیر تماس بگیرید:</p>
                            <br/>
                            <p className = {"b1 text-s-30 "} dir = {"ltr"}>۰۲۱-۲۲ ۲۴ ۴۴ ۵۵</p>
                        </div>)
                    }

                    <button
                        disabled = {!valid}
                        className = {"b1 w-full p-2 rounded " + (valid ? "text-s-10 bg-primary" : "text-s-30 bg-primary-1 cursor-not-allowed")}
                        onClick = {submit}>
                        بازیابی اطلاعات ورود
                    </button>
                    <div className = {"h-px w-full bg-s-90 mt-4"}></div>

                </div>
                <p className = {"b1 text-s-10 border-b border-primary cursor-pointer"}
                   onClick = {() => dispatcher(authActions.loginSet())}
                >ورود با نام کاربری و رمز ورود</p>
                <Modal isOpen = {modal} setIsOpen = {setModal} title = {success[1].title}
                       body = {success[1].body} type = {1} extra = {"w-1/3 "} CTA = {
                    <div className = {"flex flex row items-center justify-center cursor-pointer gap-2 "}
                         onClick = {() => setModal(false)}>
                    <p className = {"b1"}>متوجه شدم</p>
                    <ArrowBackRoundedIcon/>
                </div>}/>
            </div>
        </div>
    )
}