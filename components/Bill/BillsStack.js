import Bill from "./Bill";
import Pagination from "../Common/Pagination";
import {useRouter} from "next/router";

export default function BillsStack({bills}) {

    const router = useRouter();
    const billsPerPage = 3
    const pagesNumber = Math.ceil(bills.length / billsPerPage);
    let currentPage = (parseInt(router.asPath.split("?page=")[1]) || 1)
    let shownBills = bills.slice(((currentPage - 1) * billsPerPage), (currentPage * billsPerPage)).map((bill, index) => (
        <Bill key = {index} info = {bill} lastBill = {false}/>))

    return (
        <>
            {
                <div className = {"flex flex-col items-center justify-center gap-8 p-8 "}>
                    <p className = {"h2 text-s-10 "}>قبض های تجمیع کننده</p>
                    {shownBills}
                    <Pagination pagesNumber = {pagesNumber}/>
                </div>
            }
        </>

    )
}