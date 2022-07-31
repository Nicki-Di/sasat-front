import addSeparator from "../../consts/functions/addSeparator";

export default function LastBillStatus({info}) {
    return (
        <div className = {"flex flex-col gap-4"}>
            <p className = {"b1 text-s-10 text-center"}>وضعیت آخرین قبض</p>
            <div className={"grid grid-cols-5 grid-rows-2 justify-items-center gap-y-3 bg-s-100 custom-shadow rounded-md py-4"}>
                <p className={"text-s-30 b1"}>دوره زمانی</p>
                <p className={"text-s-30 b1"}>تاریخ صدور</p>
                <p className={"text-s-30 b1"}>مهلت اعتراض</p>
                <p className={"text-s-30 b1"}>مقدار قبض</p>
                <p className={"text-s-30 b1"}>وضعیت عملکرد</p>

                <p className={"text-s-10 b1"}>{info.period}</p>
                <p className={"text-s-10 b1"}>{info.date}</p>
                <p className={"text-s-10 b1"}>{addSeparator(info.amount)}</p>
                <p className={"text-s-10 b1"}>{info.status}</p>
            </div>

        </div>
    )
}