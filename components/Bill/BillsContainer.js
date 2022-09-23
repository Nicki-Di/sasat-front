import Bill from "./Bill";
import Pagination from "../Common/Pagination";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {options} from "../../utils/texts/billsTable";
import Table from "../Table/Table";

const billsInfo = [
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: "700000",
        status: "پاداش",
        daysLeft: 2
    },
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: "700000",
        status: "جریمه",
        daysLeft: 0
    },
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: "700000",
        status: "پاداش",
        daysLeft: 0
    },
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: "700000",
        status: "جریمه",
        daysLeft: 0
    },
]

const messagesArray = [
    {
        title: 'اعتراض به قبض',
        date: '۱۴۰۱/۰۵/۰۵',
        sender: 'توزیع کننده منطقه تهران',
        receivers: ["تجمیع کننده منطقه 1 "],
        status: "دیده شده",
        text: "متن ۱"
    },
    {
        title: 'اعتراض به قبض',
        date: '۱۴۰۱/۰۵/۰۵',
        sender: 'توزیع کننده منطقه تهران',
        receivers: ["تجمیع کننده منطقه 1 "],
        status: "جدید",
        text: "متن ۲"
    },
]

export default function BillsContainer(userState) {
    const [TJ, setTJ] = useState(false)

    useEffect(() => {
        userState.role === "تجمیع کننده" ? setTJ(true) : setTJ(false)
    }, [userState.role]);

    const router = useRouter();
    const billsPerPage = 3
    const pagesNumber = Math.ceil(billsInfo.length / billsPerPage);
    let currentPage = (parseInt(router.asPath.split("?page=")[1]) || 1)
    let shownBills = billsInfo.slice(((currentPage - 1) * billsPerPage), (currentPage * billsPerPage)).map((bill, index) => (
        <Bill key = {index} info = {bill} lastBill = {2}/>))

    return (
        <>
            {
                TJ ? <div className = {"flex flex-col items-center justify-center gap-8 p-8 "}>
                    <p className = {"h2 text-s-10 "}>قبض های تجمیع کننده</p>
                    {shownBills}
                    <Pagination pagesNumber = {pagesNumber}/>
                </div> : <Table options = {options} data = {messagesArray}/>
            }
        </>

    )
}