import Input from "../Forms/Input";
import {useState} from "react";
import FileUpload from "../Forms/FileUpload";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Receivers from "./Receivers";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function NewMessageContainer() {
    const [subject, setSubject] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className = "w-[87%] mr-auto p-8 flex flex-col gap-16 items-center">
            <div className = "flex flex-col w-full bg-s-100 shadow rounded-md gap-4">
                <p className = {"bg-s-80 rounded-t-md h2 text-s-10 text-center py-2 "}>ایجاد پیام جدید</p>
                <div className={"flex flex-row gap-8 p-16"}>
                    <img
                        className = "w-8 h-8"
                        src = "/dashboard/layer-icon.png"
                        alt = "layer-icon"
                    />
                    <div className = {"flex flex-col grow "}>
                        <div className = {"flex flex-row justify-between"}>
                            <div className = {"basis-1/3"}>
                                <Input type = {"text"} name = {"subject"} title = {"موضوع پیام"}
                                       placeholder = {"موضوع پیام را اینجا بنویسید..."} state = {subject}
                                       setState = {setSubject}/>
                            </div>
                            <div className = {"basis-1/3"}>
                                <FileUpload name = {"doc"} id = {"doc"} title = {"فایل پیوست"}
                                            selectedFile = {selectedFile}
                                            setSelectedFile = {setSelectedFile}/>
                            </div>
                            <Receivers isOpen = {isOpen} setIsOpen = {setIsOpen}/>
                        </div>


                        <Input type = {"textarea"} name = {"subject"} title = {"متن پیام"}
                               placeholder = {"موضوع پیام را اینجا بنویسید..."} state = {subject}
                               setState = {setSubject}/>

                        <div className = {"flex flex-row items-center w-full items-center justify-center"}>
                            <div
                                className = {"basis-1/4 flex flex-row bg-primary b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}>
                                <p>ارسال پیام</p>
                                <SendRoundedIcon className={"rotate-180 "}/>
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