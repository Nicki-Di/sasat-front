import EmailIcon from '@mui/icons-material/Email';
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CreateIcon from '@mui/icons-material/Create';
import {useRouter} from "next/router";
import * as messagesActions from "../../store/slices/messages";
import {useDispatch} from "react-redux";
import Receivers from "./Receivers";
import {useState} from "react";

export default function SingleMessage({isPreview, message}) {
    const router = useRouter()
    const dispatcher = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    return (
            <div className = "flex flex-col p-8 ">
                {/* row 1 */}
                <div className = {"flex flex-row h2 items-center gap-8 border-b border-s-80 pb-8 "}>
                    <EmailIcon fontSize = "large"/>
                    {
                        isPreview ? <p className = {"grow "}>پیش نمایش پیام جدید</p> :
                            <p className = {"grow "}>پیام</p>

                    }
                    {
                        isPreview ? (<div className = {"flex flex-row gap-8"}>
                            <div
                                className = {"flex flex-row bg-primary b1 rounded py-2 px-3 gap-2 items-center justify-center cursor-pointer"}
                                onClick = {() => {
                                    router.push("/dashboard/messages").then(() => dispatcher(messagesActions.previewMessageSet({}))
                                    )
                                }}
                            >
                                <p>تایید پیام و ارسال</p>
                                <DoneRoundedIcon/>
                            </div>
                            <div
                                className = {"flex flex-row b1 rounded py-2 gap-2 items-center justify-center cursor-pointer"}
                                onClick = {async () => await router.push({
                                    pathname: '/dashboard/messages/new',
                                })}
                            >
                                <p>ویرایش پیام</p>
                                <CreateIcon/>
                            </div>
                        </div>) : (
                            <div className = {"flex flex-col b1 text-s-30 gap-2 items-center justify-center"}>
                                <p>تاریخ ایجاد شده</p>
                                <p>{message?.date}</p>
                            </div>
                        )
                    }

                </div>
                {/* row 2 */}
                <div className = {"flex flex-col b1 text-s-30 items-start gap-2 border-b border-s-80 py-8 "}>
                    <p>موضوع</p>
                    <p>{message?.title}</p>
                </div>

                {/* row 3 */}
                <div className = {"flex flex-col b1 text-s-30 items-start gap-2 border-b border-s-80 py-8 "}>
                    <p>متن</p>
                    <p>{message?.text}</p>
                </div>

                {/* row 4 */}
                <div className = {"flex flex-col b1 text-s-30 items-start gap-2 border-b border-s-80 py-8 "}>
                    <p>پیوست</p>
                    {
                        message?.fileName ? <div className = {"flex flex-row gap-8 "}>
                            <p className = {"overflow-hidden text-ellipsis whitespace-nowrap w-[30ch]"}>{message?.fileName}</p>
                            <p className = {"b1 text-s-10 border-b border-primary cursor-pointer"}>دانلود</p>

                        </div> : <p>ندارد</p>
                    }


                </div>

                {/* row 5 */}
                <div className = {"flex flex-col b1 text-s-30 items-start gap-2 py-8 "}
                     onClick = {() => setIsOpen(true)}
                >
                    <p>مخاطبان</p>
                    <div className = {"flex flex-row gap-8 "}>
                        <p>انتخاب شده</p>
                        <Receivers isOpen = {isOpen} setIsOpen = {setIsOpen} receivers = {message?.receivers}/>

                    </div>

                </div>
            </div>

    )
}