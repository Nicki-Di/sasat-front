import {billFormula} from "../../utils/texts/info";

export default function CalculationInfo({formula}) {
    return (
        <div className = {"flex flex-col gap-4"}>
            <p className = {"b1 text-s-10 text-center"}>اطلاعات محاسباتی قبض</p>
            <div className={"grid grid-cols-3 grid-rows-2 justify-items-center gap-x-10 xl:gap-x-40 gap-y-3 bg-s-100 custom-shadow rounded-lg py-4"}>
                <p className={"text-s-30 b1"}>{billFormula[0]}</p>
                <p className={"text-s-30 b1"}>{billFormula[1]}</p>
                <p className={"text-s-30 b1"}>{billFormula[2]}</p>

                <p className={"text-s-10 b1"}>{formula[0]}</p>
                <p className={"text-s-10 b1"}>{formula[1]}</p>
                <p className={"text-s-10 b1"}>{formula[2]}</p>
            </div>
        </div>
    )
}