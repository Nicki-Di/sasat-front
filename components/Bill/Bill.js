import addSeparator from "../../utils/functions/addSeparator";
import billMessages from "../../utils/texts/bill";
import BillBadge from "./BillBadge";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {useDispatch} from "react-redux";
import * as messagesActions from "../../store/slices/messages";
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";

export default function Bill({info, lastBill}) {
    const dispatcher = useDispatch();
    const router = useRouter();
    const [acceptBill, setAcceptBill] = useState(false)
    const notAccepted = info.daysLeft > 0 && !acceptBill

    return (
        <div
            className = {"bg-s-100 custom-shadow rounded-lg p-4 border-b-[18px] flex flex-col gap-8 " + (notAccepted ? "border-primary " : "border-s-60 ") + (lastBill !== 1 && "w-[40rem]")}>
            <div className = {"rounded bg-s-90 p-4 flex flex-col gap-8  "}>
                <div
                    className = {"grid grid-rows-2 justify-items-center border-b border-s-80 pb-4 " + (notAccepted ? "grid-cols-5" : "grid-cols-4")}>
                    <p className = {"text-s-30 b1"}>دوره زمانی</p>
                    <p className = {"text-s-30 b1"}>تاریخ صدور</p>
                    {notAccepted && (<p className = {"text-s-30 b1 "}>مهلت اعتراض</p>)}
                    <p className = {"text-s-30 b1"}>مقدار قبض</p>
                    <p className = {"text-s-30 b1"}>وضعیت عملکرد</p>

                    <p className = {"text-s-10 b1"}>{info.period}</p>
                    <p className = {"text-s-10 b1"}>{`${info.date.year}/${info.date.month}/${info.date.day}`}</p>
                    {notAccepted && (<p className = {"text-s-10 b1 "}>{`${info.daysLeft}  روز مانده`}</p>)}
                    <p className = {"text-s-10 b1"}>{addSeparator(info.amount) + (info.status === "جریمه" ? " - " : " + ")}</p>
                    <BillBadge status = {info.status}/>
                </div>
                <div className = {"rounded-3xl py-2 " + (notAccepted ? "bg-primary-1" : "bg-success-1")}>
                    <p className = {"b1 text-center " + (notAccepted ? "text-s-10" : "text-success")}>{notAccepted ? billMessages[1] : billMessages[0]}</p>
                </div>
            </div>

            {
                lastBill === 1 ?
                    (notAccepted && <Link href={"/dashboard/index"}>
                        <a className = {"cursor-pointer b1 text-s-10 bg-primary rounded p-2 flex flex-row w-fit items-center justify-center self-center"}>
                            <p>مشاهده جزئیات</p>
                            <KeyboardArrowLeftRoundedIcon/>
                        </a>

                    </Link>)
                    :
                    (notAccepted &&
                        <div className = {"flex flex-row items-center justify-center w-[20rem] self-center gap-8 "}>
                            <div
                                className = {"basis-1/2 flex flex-row bg-primary b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                                onClick = {() => {
                                    setAcceptBill(true)
                                }}
                            >
                                <p>قبول قبض</p>
                                <DoneRoundedIcon/>
                            </div>
                            <div
                                className = {"basis-1/2 flex flex-row b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                                onClick = {async () => {
                                    dispatcher(messagesActions.previewMessageSet({
                                        complain: true
                                    }))
                                    await router.push({
                                        pathname: '/dashboard/messages/new',
                                    })
                                }}
                            >
                                <p>اعتراض به قبض</p>
                                <CloseRoundedIcon/>
                            </div>
                        </div>)
            }
            {
                (lastBill === 2 && notAccepted) &&
                <div className = {"flex flex-row gap-8 items-center justify-start"}>
                    <HelpOutlineIcon className = {"text-alert"}/>
                    <p className = {"b2 text-s-10"}>در صورتی که به قبض اعتراض دارید، می‌توانید از طریق منوی پیام، جهت
                        ارسال اعتراض اقدام نمایید.</p>
                </div>
            }
        </div>

    )
}