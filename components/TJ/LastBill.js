import addSeparator from "../../utils/functions/addSeparator";
import {useEffect, useState} from "react";
import jalaali from 'jalaali-js'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import Bill from "../Bill/Bill";

const info = {
    period: "دوره تیر",
    date: {year: "1401", month: "5", day: "17"},
    amount: "700000",
    status: "پاداش",
    daysLeft: 0
}
export default function LastBill() {
    return (
        <div className = {"flex flex-col gap-4"}>
            <p className = {"b1 text-s-10 text-center"}>وضعیت آخرین قبض</p>
            <div
                className = {"bg-s-100 custom-shadow rounded-lg p-4 border-b-[18px] flex flex-col gap-8 " + (info.daysLeft > 0 ? "border-primary" : "border-s-60")}>
                <Bill info = {info}/>
                {
                    info.daysLeft > 0 && (<div
                        className = {"cursor-pointer b1 text-s-10 bg-primary rounded p-2 flex flex-row w-fit items-center justify-center self-center"}>
                        <p>مشاهده جزئیات</p>
                        <KeyboardArrowLeftRoundedIcon/>
                    </div>)
                }

            </div>

        </div>
    )
}