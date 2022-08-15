import Bill from "./Bill";
import Pagination from "../Common/Pagination";
import {useRouter} from "next/router";

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
export default function BillsContainer() {
    const router = useRouter();
    const billsPerPage = 3
    const pagesNumber = Math.ceil(billsInfo.length / billsPerPage);
    let currentPage = (parseInt(router.asPath.split("?page=")[1]) || 1)
    let shownBills = billsInfo.slice(((currentPage - 1) * billsPerPage), (currentPage * billsPerPage)).map((bill, index) => (
        <Bill key = {index} info = {bill} lastBill = {2}/>))

    return (
        <main className = "w-[87%] mr-auto p-8 flex flex-col gap-16 items-center">
            <div className = "flex flex-col w-full p-8 bg-s-100 shadow rounded-md gap-8 items-center">
                <p className = {"h2 text-s-10 "}>قبض های تجمیع کننده</p>
                {shownBills}
                <Pagination pagesNumber = {pagesNumber}/>

            </div>
        </main>
    )
}