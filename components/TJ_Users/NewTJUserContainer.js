import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import Link from "next/link";
import AddButton from "../Buttons/AddButton";
import Input from "../Forms/Input";
import SimpleDatePicker from "../Date/SimpleDatePicker";
import DropDown from "../Common/DropDown";
import {useState} from "react";
import FileUpload from "../Forms/FileUpload";


const data = [
    {name: 'D-1'},
    {name: 'D-2'},
    {name: 'D-3'},
    {name: 'D-4'},
]


export default function NewTJUserContainer() {
    const [selected, setSelected] = useState(data[0])
    const [selectedFile, setSelectedFile] = useState();

    return (
        <div className = "flex flex-col gap-4 p-8 ">
            <div className = {"flex flex-row items-center justify-between border-b border-s-80 pb-8"}>
                <Link href = {"/dashboard/tjUsers"}>
                    <a className = {"flex flex-row gap-4 "}>
                        <KeyboardReturnRoundedIcon className = {"rotate-180"}/>
                        <p className = {"b1 text-s-10"}>بازگشت به صفحه قبل</p>
                    </a>
                </Link>
                <p className = {"h2 text-10"}>فرم تعریف کاربر جدید تجمیع کننده </p>
                <AddButton text = {"تعریف تجمیع کننده جدید"} disable/>
            </div>
            <div className = {"grid grid-cols-3 gap-x-24 gap-y-12 "}>
                <Input type = {"text"} title = {"نام تجمیع کننده"} name = {"TJname"}/>
                <div>
                    <p className = "b1 text-s-30 mb-2 ">
                        نوع فرمول
                    </p>
                    <DropDown data = {data} selected = {selected} setSelected = {setSelected}
                              className = {"border-2 border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200"}/>
                </div>
                <FileUpload name = {"doc"} id = {"doc"} title = {"فایل پیوست"}
                            selectedFile = {selectedFile}
                            setSelectedFile = {setSelectedFile}
                            description={"فرمت PDF قابل قبول است."}
                />
                <Input type = {"text"} title = {"ایمیل کاربر"} name = {"TJname"}/>
                <Input type = {"text"} title = {"پارامتر 1 فرمول"} name = {"TJname"}/>
                <SimpleDatePicker title = {"تاریخ شروع قرارداد"}/>
                <Input type = {"text"} title = {"تعرفه جریمه"} name = {"TJname"} unit = {"ریال"}/>
                <Input type = {"text"} title = {"پارامتر 2 فرمول"} name = {"TJname"}/>
                <Input type = {"text"} title = {"فیدر های تحت نظر"} name = {"TJname"}/>
                <Input type = {"text"} title = {"تعرفه پاداش"} name = {"TJname"} unit = {"ریال"}/>
                <Input type = {"text"} title = {"شماره قرارداد"} name = {"TJname"}
                       placeholder = {"شماره قرارداد 8 رقمی را وارد کنید."}/>
                <Input type = {"text"} title = {"کاهش بار لازم الاجرا"} name = {"TJname"} unit = {"MW"}/>

            </div>
        </div>
    )
}