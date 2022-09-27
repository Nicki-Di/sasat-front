import Row from "../Common/Row";
import {secondAdminInfo} from "/utils/texts/info"
import Toggle from "./Toggle";
import {useState} from "react";

const info = ["پژوهشگاه نیرو", "Pazhuheshgah", "pazhuhesh123@gmail.com"]


export default function Access() {
    const [b11, setB11] = useState(false)
    const [b12, setB12] = useState(false)
    const [b13, setB13] = useState(false)
    const [b14, setB14] = useState(false)

    const [b21, setB21] = useState(false)
    const [b22, setB22] = useState(false)
    const [b23, setB23] = useState(false)
    const [b24, setB24] = useState(false)
    const [b25, setB25] = useState(false)

    const batch1 = [
        {
            name: "نقشه وضعیت قبوض توزیع کنندگان",
            state: b11,
            setState: setB11
        },
        {
            name: "نمودار وضعیت مصرفی توزیع کنندگان",
            state: b12,
            setState: setB12
        },
        {
            name: "مشاهده جزئیات اطلاعات توزیع کنندگان",
            state: b13,
            setState: setB13
        },
        {
            name: "ارسال اعلانیه",
            state: b14,
            setState: setB14
        },
    ]

    const batch2 = [
        {
            name: "تغییر نام کاربری",
            state: b21,
            setState: setB21
        },
        {
            name: "تغییر ایمیل",
            state: b22,
            setState: setB22
        },
        {
            name: "تغییر رمز ورود",
            state: b23,
            setState: setB23
        },
        {
            name: "حذف کاربران",
            state: b24,
            setState: setB24
        },
        {
            name: "غیرفعال کردن کاربران",
            state: b25,
            setState: setB25
        },
    ]

    return (
        <div className = {"flex flex-col gap-12 p-8"}>
            <p className = {"h1 text-center bg-s-90 py-8 rounded text-s-10"}>مدیریت دسترسی کاربران</p>
            <Row keys = {secondAdminInfo} values = {info} lastRow = {false}/>
            <div className = {"flex flex-col gap-4"}>
                <p className = {"h2 text-s-10"}>دسترسی ها</p>
                <p className = {"b1 text-s-30"}>میتوانید دسترسی کاربران به امکانات پنل را تغییر دهید.</p>
            </div>
            <div className = {"flex flex-row justify-between items-start gap-16"}>
                <div className = {"basis-1/2 flex flex-col gap-8"}>
                    {
                        batch1.map((item) =>
                            <div className = {"flex flex-row justify-between items-center"}>
                                {item.name}
                                <Toggle enabled = {item.state} setEnabled = {item.setState}/>
                            </div>
                        )
                    }
                </div>
                <div className = {"bg-s-80 h-[29vh] w-[2px]"}/>
                <div className = {"basis-1/2 flex flex-col gap-8"}>
                    {
                        batch2.map(item =>
                            <div className = {"flex flex-row justify-between items-center"}>
                                {item.name}
                                <Toggle enabled = {item.state} setEnabled = {item.setState}/>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}