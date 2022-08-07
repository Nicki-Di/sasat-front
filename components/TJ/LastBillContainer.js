import CalculationInfo from "./CalculationInfo";
import LastBill from "./LastBill";

export default function LastBillContainer({formula, info}) {
    return (
        <div className={"flex flex-col gap-8 grow bg-s-100 shadow-lg rounded-lg p-4"}>
            <CalculationInfo formula={formula}/>
            <LastBill info={info}/>
        </div>
    )
}