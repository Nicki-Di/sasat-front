import addSeparator from "../../utils/functions/addSeparator";
import BillResultBadge from "./BillResultBadge";
import BillStatusBadge from "./BillStatusBadge";
import Input from "../Forms/Input";
import {useState} from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import IconButton from "../Buttons/IconButton";
import {useRouter} from "next/router";


export default function TZActiveBill({billInfo}) {
    const [penalty, setPenalty] = useState("");
    const [reward, setReward] = useState("");
    const router = useRouter();

    const doneBill = async () => {
        await router.push({
            pathname: '/dashboard/bills',
        })
    }

    return (
        <div className = {"bg-s-100 custom-shadow rounded-lg p-4 border-b-[18px] flex flex-col gap-8 border-primary"}>
            <div className = {"bg-s-90 rounded p-4 flex flex-col gap-8 "}>
                <div
                    className = {"grid grid-rows-2 justify-items-center border-b border-s-80 pb-4 grid-cols-4 b1 gap-x-8 items-center"}>
                    <p className = {"text-s-10"}>قبض تجمیع کننده</p>
                    <p className = {"text-s-30"}>دوره زمانی</p>
                    <p className = {"text-s-30"}>مقدار قبض</p>
                    <p className = {"text-s-30"}>وضعیت عملکرد</p>

                    <p className = {"text-s-30"}>{billInfo.userName}</p>
                    <p className = {"text-s-10"}>{billInfo.period}</p>
                    <p className = {"text-s-10"}>{addSeparator(billInfo.amount)}</p>
                    <BillResultBadge status = {billInfo.billResult}/>
                </div>
                <BillStatusBadge status = {"قبض در انتظار صدور"}/>
            </div>
            <div className = {"h-px w-full bg-s-60"}/>
            <div className = {"flex flex-col gap-8"}>
                <p className = {"b1 text-s-10"}>در صورت نیاز میتوانید تعرفه پاداش یا جریمه قبض را تغییر دهید</p>
                <div className = {"flex flex-row gap-4"}>
                    <div className = {"w-full"}>
                        <Input type = {"text"} title = {"تعرفه پاداش"} name = {"reward"} unit = {"ریال"}
                               state = {reward}
                               setState = {setReward}
                        />
                    </div>

                    <div className = {"w-full"}>
                        <Input type = {"text"} title = {"تعرفه جریمه"} name = {"penalty"} unit = {"ریال"}
                               state = {penalty}
                               setState = {setPenalty}
                        />
                    </div>


                </div>
            </div>

            <IconButton className={"bg-primary self-center"} text = {"تایید قبض و صدور"} icon = {<DoneRoundedIcon/>} onClick={doneBill}/>

        </div>
    )
}