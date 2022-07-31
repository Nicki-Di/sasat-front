import RadialChart from "../Common/RadialChart";
import LastBillInfo from "../TJ/LastBillInfo";

export default function DashboardMain() {
    return (
        <main className = "w-[87%] mr-auto bg-s-90 p-8 flex flex-row gap-16">
            <RadialChart data = {[
                {name: "محقق شده", value: 100000, color: "#005916", bullet: `text-success`},
                {name: "مانده تعهد", value: 500000, color: "#808080", bullet: "text-s-60"}
            ]} title = {"سهمیه کاهش بار لازم الاجرا"} unit = {"MW"}/>
            <LastBillInfo formula = {{type: "فرمول D12", p1: "14", p2: "56"}}
                          info = {{period: "دوره تیر", date: "۱۴۰۱/۰۲/۰۶", amount: "700000", status: "جریمه"}}/>
        </main>
    )
}