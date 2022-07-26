import Input from "../Forms/Input";
import {useState} from "react";
import FileUpload from "../Forms/FileUpload";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Receivers from "./Receivers";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import * as messagesActions from "../../store/slices/messages"
import IconButton from "../Buttons/IconButton";


export default function NewMessageContainer() {
    const preview = useSelector(state => state.messagesReducer)[0]
    const [title, setTitle] = useState(preview.title);
    const [complain, setComplain] = useState(preview.complain);
    const [text, setText] = useState(preview.text);
    const [receivers, setReceivers] = useState(preview.receivers || []);
    const [selectedFile, setSelectedFile] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const dispatcher = useDispatch();


    const sendMessage = async () => {
        dispatcher(messagesActions.previewMessageSet({
            title,
            text,
            fileName: selectedFile?.name,
            receivers,
            complain
        }))
        await router.push({
            pathname: '/dashboard/messages/preview',
        })
    }

    const cancel = async () => {
        dispatcher(messagesActions.previewMessageSet({}))
        await router.push({
            pathname: '/dashboard/messages',
        })
    }


    return (
        <div className = "flex flex-col gap-4">
            <p className = {"bg-s-80 rounded-t-md h2 text-s-10 text-center py-2 "}>ایجاد پیام جدید</p>
            <div className = {"flex flex-row gap-8 p-16"}>
                <img
                    className = "w-8 h-8"
                    src = "/common/person-icon.png"
                    alt = "layer-icon"
                />
                <div className = {"flex flex-col grow "}>

                    {/* row 1 */}
                    <div className = {"flex flex-row gap-8 items-center "}>
                        <div className = {"basis-1/3"}>
                            <Input type = {"text"} name = {"title"} title = {"موضوع پیام"}
                                   placeholder = {"موضوع پیام را اینجا بنویسید..."} state = {title}
                                   setState = {setTitle} complain = {complain}/>
                        </div>
                        <div className = "flex items-center gap-3 ">
                            <input id = {'complain'}
                                   type = "checkbox"
                                   checked = {complain}
                                   onChange = {() => setComplain(!complain)}
                                   className = " w-4 h-4 text-blue-600 text-primary rounded-sm border border-s-10 focus:shadow-none transition-all duration-200 "/>
                            <label htmlFor = {'complain'}
                                   className = "b1 text-gray-900 dark:text-gray-300">
                                نامه اعتراض به قبض
                            </label>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className = {"flex flex-row gap-8 mb-6"}>
                        <div className = {"basis-1/3"}>
                            <FileUpload name = {"doc"} id = {"doc"} title = {"فایل پیوست"}
                                        selectedFile = {selectedFile}
                                        setSelectedFile = {setSelectedFile}/>
                        </div>
                        <Receivers isOpen = {isOpen} setIsOpen = {setIsOpen} receivers = {receivers}
                                   setReceivers = {setReceivers}/>
                    </div>

                    {/* row 3 */}
                    <Input type = {"textarea"} name = {"title"} title = {"متن پیام"}
                           placeholder = {"موضوع پیام را اینجا بنویسید..."} state = {text}
                           setState = {setText}/>

                    <div className = {"flex flex-row items-center w-full items-center justify-center"}>
                        <div className = {"basis-1/4"}>
                            <IconButton className={"w-full bg-primary"} text = {"ارسال پیام"} icon = {<SendRoundedIcon className = {"rotate-180 "}/>}
                                        onClick = {sendMessage}/>
                        </div>

                        <div className = {"basis-1/4"}>
                            <IconButton className={"w-full "} text = {"انصراف"} icon = {<CloseRoundedIcon/>}
                                        onClick = {cancel}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}