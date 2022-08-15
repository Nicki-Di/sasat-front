import CalculationInfo from "./CalculationInfo";
import Bill from "../Bill/Bill";

const info = {
    period: "دوره تیر",
    date: {year: "1401", month: "5", day: "17"},
    amount: "700000",
    status: "پاداش",
    daysLeft: 2
}

export default function MainDashboardLeftTop({formula}) {
    return (
        <div className = {"flex flex-col gap-8 grow bg-s-100 shadow-lg rounded-lg p-4"}>
            <CalculationInfo formula = {formula}/>
            <p className = {"b1 text-s-10 text-center -mb-4"}>وضعیت آخرین قبض</p>
            <Bill info = {info} lastBill = {1}/>
        </div>
    )
}