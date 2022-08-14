import Input from "../Forms/Input";
import {useState} from "react";
import FileUpload from "../Forms/FileUpload";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Receivers from "./Receivers";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import * as messagesActions from "../../store/slices/messages"

export default function NewMessageContainer() {
    const preview = useSelector(state => state.messagesReducer)[0]
    const [title, setTitle] = useState(preview.title);
    const [text, setText] = useState(preview.text);
    const [receivers, setReceivers] = useState(preview.receivers || []);
    const [selectedFile, setSelectedFile] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const dispatcher = useDispatch();


    return (
        <main className = "w-[87%] mr-auto p-8 flex flex-col gap-16 items-center">
            <div className = "flex flex-col w-full bg-s-100 shadow rounded-md gap-4">
                <p className = {"bg-s-80 rounded-t-md h2 text-s-10 text-center py-2 "}>ایجاد پیام جدید</p>
                <div className = {"flex flex-row gap-8 p-16"}>
                    <img
                        className = "w-8 h-8"
                        src = "/dashboard/layer-icon.png"
                        alt = "layer-icon"
                    />
                    <div className = {"flex flex-col grow "}>
                        <div className = {"flex flex-row justify-between"}>
                            <div className = {"basis-1/3"}>
                                <Input type = {"text"} name = {"title"} title = {"موضوع پیام"}
                                       placeholder = {"موضوع پیام را اینجا بنویسید..."} state = {title}
                                       setState = {setTitle}/>
                            </div>
                            <div className = {"basis-1/3"}>
                                <FileUpload name = {"doc"} id = {"doc"} title = {"فایل پیوست"}
                                            selectedFile = {selectedFile}
                                            setSelectedFile = {setSelectedFile}/>
                            </div>
                            <Receivers isOpen = {isOpen} setIsOpen = {setIsOpen} receivers = {receivers}
                                       setReceivers = {setReceivers}/>
                        </div>


                        <Input type = {"textarea"} name = {"title"} title = {"متن پیام"}
                               placeholder = {"موضوع پیام را اینجا بنویسید..."} state = {text}
                               setState = {setText}/>

                        <div className = {"flex flex-row items-center w-full items-center justify-center"}>
                            <div
                                className = {"basis-1/4 flex flex-row bg-primary b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                                onClick = {async () => {
                                    dispatcher(messagesActions.previewMessageSet({
                                        title,
                                        text,
                                        fileName: selectedFile?.name,
                                        receivers
                                    }))
                                    await router.push({
                                        pathname: '/dashboard/messages/preview',
                                    })
                                }}
                            >
                                <p>ارسال پیام</p>
                                <SendRoundedIcon className = {"rotate-180 "}/>
                            </div>
                            <div
                                className = {"basis-1/4 flex flex-row b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                            >
                                <p>انصراف</p>
                                <CloseRoundedIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}