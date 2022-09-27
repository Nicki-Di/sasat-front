import {useEffect, useState} from "react";
import BillsTable from "./BillsTable";
import BillsStack from "./BillsStack";
import * as billsActions from "../../store/slices/bills";
import {useDispatch} from "react-redux";


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

// tz - tv
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
        userName: "منطقه2-استان زنجان",
        period: "دوره مرداد",
        billStatus: "قبض  تایید شده",
        amount: 500000,
        billResult: "جریمه",
    },

    {
        date: {year: "1401", month: "5", day: "17"},
        userName: "منطقه2-شهر شیراز",
        period: "دوره مرداد",
        billStatus: "قبض  تایید شده",
        amount: 900000,
        billResult: "جریمه",
    },
]



const billsTable = (array) => {
    const billsTableArray = []
    for (let item of array) {
        billsTableArray.push(Object.fromEntries(Object.entries(item).slice(1)))
    }
    return billsTableArray
}

export default function BillsContainer({userState, reportsView = false}) {
    const dispatcher = useDispatch()
    let billsTableArray = billsTable(billsTableRaw)
    const role = userState.role
    useEffect(() => {
        if (role === "تجمیع کننده") {
            dispatcher(billsActions.billsInitialized(billsStack))
        } else {
            dispatcher(billsActions.billsInitialized(billsTableRaw))
        }
    }, []);


    return (
        <>
            {role === "تجمیع کننده" && <BillsStack bills = {billsStack}/>}
            {role === "توزیع کننده" && <BillsTable bills = {billsTableArray} role={"توزیع کننده"}/>}
            {(role === "توانیر" || role === "پژوهشگاه")&& <BillsTable bills = {billsTableArray} reportsView = {reportsView} role={"توانیر"}/>}
        </>
    )
}