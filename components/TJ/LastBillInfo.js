import Calculation from "./Calculation";
import LastBillStatus from "./LastBillStatus";

export default function LastBillInfo({formula, info}) {
    return (
        <div className={"flex flex-col gap-8 grow bg-s-100 shadow-md rounded-md p-4"}>
            <Calculation formula={formula}/>
            <LastBillStatus info={info}/>
        </div>
    )
}