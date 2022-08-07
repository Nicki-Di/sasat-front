import addSeparator from "../../utils/functions/addSeparator";
import {useEffect, useState} from "react";
import jalaali from 'jalaali-js'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import billMessages from "../../texts/bill"
import Bill from "../Bill/Bill";

export default function LastBill({info}) {
    const [daysLeft, setDaysLeft] = useState(-1)
    useEffect(() => {
        let date = jalaali.toGregorian(parseInt(info.date.year), parseInt(info.date.month) - 1, parseInt(info.date.day));
        let threeDaysLater = new Date(date.gy, date.gm, date.gd)
        threeDaysLater.setDate(threeDaysLater.getDate() + 3)
        let today = new Date()
        today.setHours(0, 0, 0, 0)
        setDaysLeft((threeDaysLater.getTime() - today.getTime()) / (1000 * 3600 * 24))
    }, [info.date])
    return (
        <div className = {"flex flex-col gap-4"}>
            <p className = {"b1 text-s-10 text-center"}>وضعیت آخرین قبض</p>
            <div
                className = {"bg-s-100 custom-shadow rounded-lg p-4 border-b-[18px] flex flex-col gap-8 " + (daysLeft >= 0 ? "border-primary" : "border-s-60")}>
                <Bill info = {info} daysLeft = {daysLeft}/>
                {
                    daysLeft >= 0 && (<div
                        className = {"cursor-pointer b1 text-s-10 bg-primary rounded p-2 flex flex-row w-fit items-center justify-center self-center"}>
                        <p>مشاهده جزئیات</p>
                        <KeyboardArrowLeftRoundedIcon/>
                    </div>)
                }

            </div>

        </div>
    )
}