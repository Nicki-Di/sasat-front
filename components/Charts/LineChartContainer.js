import LineChart from "./LineChart";

const data = [
    {
        date: "۱ تیر",
        value: 4000,
        amt: 2400
    },
    {
        date: "۲ تیر",
        value: 3000,
        amt: 2210
    },
    {
        date: "۳ تیر",
        value: 2000,
        amt: 2290
    },
    {
        date: "۴ تیر",
        value: 2780,
        amt: 2000
    },
    {
        date: "۵ تیر",
        value: 1890,
        amt: 2181
    },
    {
        date: "۶ تیر",
        value: 2390,
        amt: 2500
    },
    {
        date: "۷ تیر",
        value: 3490,
        amt: 2100
    },
];

export default function LineChartContainer() {
    return (
        <div className = {"flex flex-row items-center gap-10 justify-between mt-10"}>
            <div className = {"flex flex-col b1 gap-8 "}>
                <p className = {"text-s-60"}>راهنمای نمودار</p>
                <div className = {"flex flex-row items-center gap-2"}>
                    <div className = {"bg-accent h-4 w-8 rounded "}/>
                    <p>خط مبنا</p>
                </div>
                <div className = {"flex flex-row items-center gap-2"}>
                    <div className = {"bg-primary h-4 w-8 rounded "}/>
                    <p>خط مصرفی</p>
                </div>
            </div>
            <LineChart data = {data} unit = {"MW"} base = {1500}/>
        </div>
    )
}