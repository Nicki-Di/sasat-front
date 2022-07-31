export default function Calculation({formula}) {
    return (
        <div className = {"flex flex-col gap-4"}>
            <p className = {"b1 text-s-10 text-center"}>اطلاعات محاسباتی قبض</p>
            <div className={"grid grid-cols-3 grid-rows-2 justify-items-center gap-x-40 gap-y-3 bg-s-100 custom-shadow rounded-md py-4"}>
                <p className={"text-s-30 b1"}>نوع فرمول</p>
                <p className={"text-s-30 b1"}>پارامتر 1 فرمول</p>
                <p className={"text-s-30 b1"}>پارامتر 2 فرمول</p>

                <p className={"text-s-10 b1"}>{formula.type}</p>
                <p className={"text-s-10 b1"}>{formula.p1}</p>
                <p className={"text-s-10 b1"}>{formula.p2}</p>
            </div>
        </div>
    )
}