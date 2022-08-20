import RadialChart from "../Charts/RadialChart";
import MainDashboardLeftTop from "../TJ/MainDashboardLeftTop";
import DatePickerContainer from "../Common/DatePickerContainer";
import Export from "../Charts/Export";
import {useSelector} from "react-redux";
import LineChartContainer from "../Charts/LineChartContainer";
import IranMap from "../TZ/IranMap";
import TreeMap from "../Charts/TreeMap";
import DropDown from "../Common/DropDown";

const data = [
    {name: "محقق شده", value: 100000, color: "#005916", bullet: `text-success`},
    {name: "مانده تعهد", value: 500000, color: "#808080", bullet: "text-s-60"}
]

export default function DashboardMain() {
    const userState = useSelector(state => state.userReducer);

    return (
        <main className = "w-[87%] mr-auto p-8">
            {
                /*TJ*/
                userState.role === "تجمیع کننده" &&
                <div className = {"flex flex-col gap-16"}>
                    <div className = {"flex flex-row gap-16"}>
                        <RadialChart data = {data} title = {"سهمیه کاهش بار لازم الاجرا"} unit = {"MW"}/>
                        <MainDashboardLeftTop formula = {["فرمول D12", "14", "56"]}/>
                    </div>
                    <div className = {"flex flex-col bg-s-100 p-4 shadow-lg rounded-lg gap-4 "}>
                        <p className = {"text-s-10 h2 text-center"}>{`وضعیت مصرف تجمیع کننده - ${userState.area}`}</p>
                        <div
                            className = {"flex flex-row items-center justify-between gap-4 border-b pb-10 border-s-80 "}>
                            <DatePickerContainer/>
                            <Export/>
                        </div>
                        <LineChartContainer/>

                    </div>
                </div>
            }

            {
                /*TZ*/
                userState.role === "توزیع کننده" &&
                <div className = {"flex flex-col gap-16"}>
                    <div className = {"flex flex-row justify-evenly items-center bg-s-100 rounded-lg shadow-lg p-8"}>
                        <IranMap id = {"agg1"}/>
                        <RadialChart data = {data} title = {"سهمیه کاهش بار لازم الاجرا"} unit = {"MW"} bg = {false}
                                     orientation = {"horizontal"}/>
                    </div>
                    <div className = {"flex flex-col gap-8 bg-s-100 rounded-lg shadow-lg p-8 "}>
                        <div className = {"flex flex-row gap-4 items-center "}>
                            <p className = {"h2 text-s-10 "}>وضعیت قبوض<br/>تجمیع کنندگان</p>
                            <DatePickerContainer/>
                            <Export excel = {true}/>
                        </div>
                        <div className = {"border-b border-s-80"}/>
                        <TreeMap/>
                    </div>
                    <div className = {"flex flex-col bg-s-100 p-4 shadow-lg rounded-lg gap-4 "}>
                        <p className = {"text-s-10 h2 text-center"}>{`وضعیت مصرف تجمیع کنندگان - ${userState.area}`}</p>
                        <div
                            className = {"flex flex-row items-center justify-between gap-4 border-b pb-10 border-s-80 "}>
                            <DropDown/>
                            <DatePickerContainer/>
                            <Export/>
                        </div>
                        <LineChartContainer/>

                    </div>
                </div>
            }


        </main>
    )
}