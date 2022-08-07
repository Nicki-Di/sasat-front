import RadialChart from "../Charts/RadialChart";
import LastBillContainer from "../TJ/LastBillContainer";
import DatePickerContainer from "../Charts/DatePickerContainer";
import Export from "../Charts/Export";
import {useSelector} from "react-redux";
import LineChartContainer from "../Charts/LineChartContainer";

const data = [
    {name: "محقق شده", value: 100000, color: "#005916", bullet: `text-success`},
    {name: "مانده تعهد", value: 500000, color: "#808080", bullet: "text-s-60"}
]

export default function DashboardMain() {
    const userState = useSelector(state => state.userReducer);


    return (
        <main className = "w-[87%] mr-auto p-8 flex flex-col gap-16">
            <div className = {"flex flex-row gap-16"}>
                <RadialChart data = {data} title = {"سهمیه کاهش بار لازم الاجرا"} unit = {"MW"}/>
                <LastBillContainer formula = {{type: "فرمول D12", p1: "14", p2: "56"}}
                                   info = {{
                                       period: "دوره تیر",
                                       date: {year: "1401", month: "5", day: "9"},
                                       amount: "700000",
                                       status: "جریمه"
                                   }}/>
            </div>
            <div className = {"flex flex-col bg-s-100 p-4 shadow-lg rounded-lg gap-4 "}>
                <p className = {"text-s-10 h2 text-center"}>{`وضعیت مصرف ${userState.role} - ${userState.area}`}</p>

                <div className = {"flex flex-row items-center justify-between gap-4 border-b pb-10 border-s-80 "}>
                    <DatePickerContainer/>
                    <Export/>
                </div>
                <LineChartContainer/>

            </div>
        </main>
    )
}