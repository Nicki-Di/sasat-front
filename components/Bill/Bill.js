import addSeparator from "../../utils/functions/addSeparator";
import billMessages from "../../texts/bill";
import BillBadge from "./BillBadge";

export default function Bill({info, daysLeft}) {
    return (
        <div className = {"rounded bg-s-90 p-4 flex flex-col gap-4  "}>
            <div
                className = {"grid grid-rows-2 xl:justify-items-center border-b border-s-80 pb-4 " + (daysLeft >= 0 ? "grid-cols-5" : "grid-cols-4")}>
                <p className = {"text-s-30 b1"}>دوره زمانی</p>
                <p className = {"text-s-30 b1"}>تاریخ صدور</p>
                <p className = {"text-s-30 b1 " + (daysLeft >= 0 ? "block" : "hidden")}>مهلت اعتراض</p>
                <p className = {"text-s-30 b1"}>مقدار قبض</p>
                <p className = {"text-s-30 b1"}>وضعیت عملکرد</p>

                <p className = {"text-s-10 b1"}>{info.period}</p>
                <p className = {"text-s-10 b1"}>{`${info.date.year}/${info.date.month}/${info.date.day}`}</p>
                <p className = {"text-s-10 b1 " + (daysLeft >= 0 ? "block" : "hidden")}>{`${daysLeft}  روز مانده`}</p>
                <p className = {"text-s-10 b1"}>{addSeparator(info.amount) + (info.status === "جریمه" ? " - " : " + ")}</p>
                <BillBadge status={info.status}/>
            </div>
            <div className = {"flex flex-col gap-4 "}>
                <p className = {"b1 text-s-30"}>وضعیت قبض</p>
                <div className = {"rounded-3xl py-2 " + (daysLeft >= 0 ? "bg-primary-1" : "bg-success-1")}>
                    <p className = {"b1 text-center " + (daysLeft >= 0 ? "text-s-10" : "text-success")}>{daysLeft >= 0 ? billMessages[1] : billMessages[0]}</p>
                </div>
            </div>

        </div>

    )
}