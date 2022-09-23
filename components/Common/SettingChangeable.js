import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import styles from "../../styles/General.module.css";
import {userInfo} from "../../utils/texts/info"
import {useState} from "react";
import Input from "../Forms/Input";
import Password from "../Forms/Password";

export default function SettingChangeable({userState, edit, lastRow = false}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className = {"pb-8 " + (!lastRow && "border-b border-s-80 ")}>
            {
                edit ?
                    <form className = {"flex flex-row gap-8 flex-1 "}>
                        <div className={"basis-1/4"}>
                        <Input type = {"text"} name = {"username"} title = {userInfo[0]} state = {username}
                               setState = {setUsername} placeholder = {"منطقه 1"}/>
                        </div>
                        <div className={"basis-1/4"}>
                        <Input type = {"text"} name = {"email"} title = {userInfo[1]} state = {email}
                               setState = {setEmail} placeholder={"Tajmi123@gmail.com"}/>
                        </div>
                        <div className={"basis-1/4"}>
                        <Password type = {"text"} name = {"password"} title = {userInfo[2]} state = {password}
                                  setState = {setPassword} placeholder={"a@324532"} tip={"رمز باید 8 کاراکتر داشته باشد"}/>
                        </div>
                    </form>

                    :
                    <div
                        className = {"grid grid-rows-2 gap-x-8 gap-y-4 b1 " + styles.customGrid3}>
                        {
                            userInfo.map((item, index) =>
                                <div key = {item} className = {"flex flex-row gap-2 text-s-30 "}>
                                    {index === 0 && <ContactsRoundedIcon/>}
                                    {index === 1 && <AlternateEmailRoundedIcon/>}
                                    {index === 2 && <PasswordRoundedIcon/>}
                                    <p className = {"h-fit"}>{item}</p>
                                </div>
                            )
                        }
                        {
                            userState.map(item =>
                                <p key = {item}
                                   className = {"[word-spacing:0.16rem] text-s-10 overflow-hidden text-ellipsis whitespace-nowrap w-[22ch]"}>
                                    {item}
                                </p>
                            )
                        }
                    </div>

            }

        </div>
    )
}