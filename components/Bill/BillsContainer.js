import {useEffect, useState} from "react";
import BillsTable from "./BillsTable";
import BillsStack from "./BillsStack";
import * as billsActions from "../../store/slices/bills";
import {useDispatch} from "react-redux";

// tz
const billsTableRaw = [
    {
        date: {year: "1401", month: "4", day: "17"},
        userName: "منطقه1-شهر تهران",
        period: "دوره تیر",
        billStatus: "قبض در انتظار صدور",
        amount: 700000,
        billResult: "پاداش",
    },
    {
        date: {year: "1401", month: "5", day: "17"},
        userName: "منطقه2-شهر تهران",
        period: "دوره مرداد",
        billStatus: "قبض  تایید شده",
        amount: 500000,
        billResult: "جریمه",
    },
]

// tj
const billsStack = [
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: 700000,
        billResult: "پاداش",
        billStatus: "قبض صادر شده و فعال است",
        daysLeft: 2
    },
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: 700000,
        billResult: "جریمه",
        billStatus: "قبض  تایید شده",
        daysLeft: 0
    },
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: 700000,
        billResult: "پاداش",
        billStatus: "قبض  تایید شده",
        daysLeft: 0
    },
    {
        period: "دوره تیر",
        date: {year: "1401", month: "5", day: "17"},
        amount: 700000,
        billResult: "جریمه",
        billStatus: "قبض  تایید شده",
        daysLeft: 0
    },
]


const billsTable = (array) => {
    const billsTableArray = []
    for (let item of array) {
        billsTableArray.push(Object.fromEntries(Object.entries(item).slice(1)))
    }
    return billsTableArray
}

export default function BillsContainer({userState}) {
    const [TJ, setTJ] = useState(false)
    const dispatcher = useDispatch()
    let billsTableArray = billsTable(billsTableRaw)

    useEffect(() => {
        if (userState.role === "تجمیع کننده") {
            setTJ(true)
            dispatcher(billsActions.billsInitialized(billsStack))
        } else {
            setTJ(false)
            dispatcher(billsActions.billsInitialized(billsTableRaw))
        }

    }, [userState.role]);


    return (
        TJ ? <BillsStack bills = {billsStack}/> : <BillsTable bills = {billsTableArray}/>
    )
}