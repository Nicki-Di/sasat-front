import reformat from "../../utils/functions/reformat";
import {TJBill} from "../../utils/texts/billsTexts";
import BillResultBadge from "./BillResultBadge";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {useDispatch} from "react-redux";
import * as messagesActions from "../../store/slices/messages";
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";
import BillStatusBadge from "./BillStatusBadge";
import IconButton from "../Buttons/IconButton";

export default function Bill({info, lastBill}) {
    const dispatcher = useDispatch();
    const router = useRouter();
    const notAccepted = info?.daysLeft > 0

    const complain = async () => {
        dispatcher(messagesActions.previewMessageSet({
            complain: true
        }))
        await router.push({
            pathname: '/dashboard/messages/new',
        })
    }

    return (
        <div
            className = {"bg-s-100 custom-shadow rounded-lg p-4 border-b-[18px] flex flex-col gap-8 " + (notAccepted ? "border-primary " : "border-s-60 ") + (!lastBill && "w-[40rem]")}>
            <div className = {"rounded bg-s-90 p-4 flex flex-col gap-8  "}>
                <div
                    className = {"grid grid-rows-2 justify-items-center border-b border-s-80 pb-4 b1 " + (notAccepted ? "grid-cols-5" : "grid-cols-4")}>
                    <p className = {"text-s-30"}>دوره زمانی</p>
                    <p className = {"text-s-30"}>تاریخ صدور</p>
                    {notAccepted && (<p className = {"text-s-30"}>مهلت اعتراض</p>)}
                    <p className = {"text-s-30"}>مقدار قبض</p>
                    <p className = {"text-s-30"}>وضعیت عملکرد</p>

                    <p className = {"text-s-10"}>{info?.period}</p>
                    <p className = {"text-s-10"}>{`${info?.date?.year}/${info?.date?.month}/${info?.date?.day}`}</p>
                    {notAccepted && (<p className = {"text-s-10"}>{`${info?.daysLeft}  روز مانده`}</p>)}
                    <p className = {"text-s-10"}>{reformat(info?.amount) + (info?.billResult === "جریمه" ? " - " : " + ")}</p>
                    <BillResultBadge status = {info?.billResult}/>
                </div>
                <BillStatusBadge status = {info?.billStatus}/>
            </div>

            {
                lastBill ?
                    (notAccepted && <Link href = {"/dashboard/bills"}>
                        <a className = {"cursor-pointer b1 text-s-10 bg-primary rounded p-2 flex flex-row w-fit items-center justify-center self-center"}>
                            <p>مشاهده جزئیات</p>
                            <KeyboardArrowLeftRoundedIcon/>
                        </a>

                    </Link>)
                    :
                    (notAccepted &&
                        <div className = {"flex flex-row items-center justify-center w-[20rem] self-center gap-8 "}>

                            <IconButton className = {"border-b border-primary rounded-none "} text = {"اعتراض به قبض"}
                                        icon = {<CloseRoundedIcon/>} onClick = {complain}/>

                            <IconButton className = {"bg-primary"} text = {"قبول قبض"}
                                        icon = {<DoneRoundedIcon/>} />

                        </div>)
            }
            {
                (!lastBill && notAccepted) &&
                <div className = {"flex flex-row gap-8 items-center justify-start"}>
                    <HelpOutlineIcon className = {"text-alert"}/>
                    <p className = {"b2 text-s-10"}>در صورتی که به قبض اعتراض دارید، می‌توانید از طریق منوی پیام، جهت
                        ارسال اعتراض اقدام نمایید.</p>
                </div>
            }
        </div>

    )
}