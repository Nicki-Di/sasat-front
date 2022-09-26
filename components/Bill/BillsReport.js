import RadialChart from "../Charts/RadialChart";
const data1 = [
    {name: "قبض توسط تجمیع کننده پرداخت شده", value: 50, color: "#005916", bullet: `text-success`},
    {name: "قبض توسط تجمیع کننده رسیدگی نشده", value: 20, color: "#E0E0E0", bullet: "text-s-80"},
    {name: "قبض توسط تجمیع کننده اعتراض شده", value: 10, color: "#808080", bullet: "text-s-60"},
]

export default function BillsReport({}) {
    return (
        <div className={"relative flex flex-col items-center justify-center bg-s-90 rounded py-4 gap-4"}>
            <p className={"text-s-10 h2"}>گزارش قبض‌ها</p>
            {/*<p className={"absolute text-s-10 b1 text-center right-[30vw] top-[48%] mb-4 "}>قبض توسط توزیع کننده<br/>صادر شده</p>*/}
            <RadialChart data = {data1} unit = {"قبض"} bg={false} orientation={"horizontal"} position={"top-[41%] right-[13%]"}/>

        </div>
    )
}