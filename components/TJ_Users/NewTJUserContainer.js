import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import Link from "next/link";
import AddButton from "../Buttons/AddButton";
import Input from "../Forms/Input";
import SimpleDatePicker from "../Date/SimpleDatePicker";
import DropDown from "../Common/DropDown";
import {useState} from "react";
import FileUpload from "../Forms/FileUpload";
import * as tjUsersActions from "../../store/slices/tjUsers";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";


const data = [
    {name: 'D-1'},
    {name: 'D-2'},
    {name: 'D-3'},
    {name: 'D-4'},
]


export default function NewTJUserContainer() {
    const [name, setName] = useState("");
    const [formula, setFormula] = useState(data[0]);
    const [selectedFile, setSelectedFile] = useState("");
    const [email, setEmail] = useState("");
    const [p1, setP1] = useState("");
    const [contractDate, setContractDate] = useState("");
    const [penalty, setPenalty] = useState("");
    const [p2, setP2] = useState("");
    const [feeders, setFeeders] = useState("");
    const [reward, setReward] = useState("");
    const [contractNumber, setContractNumber] = useState("");
    const [load, setLoad] = useState("");

    const router = useRouter();
    const dispatcher = useDispatch();

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
                <div
                    className = {"flex flex-row bg-primary b1 rounded py-2 px-4 gap-4 items-center justify-center cursor-pointer"}
                    onClick = {async () => {
                        dispatcher(tjUsersActions.previewTJUserSet({
                            name,
                            formula: formula.name,
                            fileName: selectedFile?.name,
                            email,
                            p1,
                            contractDate,
                            penalty,
                            p2,
                            feeders,
                            reward,
                            contractNumber,
                            load
                        }))
                        await router.push({
                            pathname: '/dashboard/tjUsers/preview',
                        })
                    }}
                >
                    <p>تعریف تجمیع کننده جدید</p>
                    <AddRoundedIcon/>
                </div>
            </div>
            <div className = {"grid grid-cols-3 gap-x-24 gap-y-12 "}>
                <Input type = {"text"} title = {"نام تجمیع کننده"} name = {"TJname"} state = {name}
                       setState = {setName}/>
                <div>
                    <p className = "b1 text-s-30 mb-2 ">
                        نوع فرمول
                    </p>
                    <DropDown data = {data} selected = {formula} setSelected = {setFormula}
                              className = {"border-2 border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200"}/>
                </div>
                <FileUpload name = {"doc"} id = {"doc"} title = {"فایل پیوست"}
                            selectedFile = {selectedFile}
                            setSelectedFile = {setSelectedFile}
                            description = {"فرمت PDF قابل قبول است."}
                />
                <Input type = {"text"} title = {"ایمیل کاربر"} name = {"email"} state = {email} setState = {setEmail}/>
                <Input type = {"text"} title = {"پارامتر 1 فرمول"} name = {"p1"} state = {p1} setState = {setP1}/>
                <SimpleDatePicker title = {"تاریخ شروع قرارداد"}/>
                <Input type = {"text"} title = {"تعرفه جریمه"} name = {"penalty"} unit = {"ریال"} state = {penalty}
                       setState = {setPenalty}/>
                <Input type = {"text"} title = {"پارامتر 2 فرمول"} name = {"p2"} state = {p2} setState = {setP2}/>
                <Input type = {"text"} title = {"فیدر های تحت نظر"} name = {"feeders"} state = {feeders}
                       setState = {setFeeders}/>
                <Input type = {"text"} title = {"تعرفه پاداش"} name = {"reward"} unit = {"ریال"} state = {reward}
                       setState = {setReward}/>
                <Input type = {"text"} title = {"شماره قرارداد"} name = {"contractNumber"}
                       placeholder = {"شماره قرارداد 8 رقمی را وارد کنید."}
                       state = {contractNumber} setState = {setContractNumber}
                />
                <Input type = {"text"} title = {"کاهش بار لازم الاجرا"} name = {"load"} unit = {"MW"} state = {load}
                       setState = {setLoad}/>

            </div>
        </div>
    )
}