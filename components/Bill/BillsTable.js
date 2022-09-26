import RangeDatePicker from "../Date/RangeDatePicker";
import Export from "../Charts/Export";
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import {TZBillsTable} from '/utils/texts/billsTexts'
import Table from "../Table/Table";
import IconButton from "../Buttons/IconButton";
import {useState} from "react";
import BillsReport from "./BillsReport";


export default function BillsTable({bills, reportsView = false, role}) {
    const [showReports, setShowReports] = useState(reportsView)
    return (
        <div className = {"flex flex-col gap-8 p-8 "}>
            <div className = {"flex flex-row justify-between gap-8 "}>
                <div className = {"flex flex-col items-center justify-between text-s-10"}>
                    <p className = {"h2"}>{showReports ? "گزارش قبض ها و اعتراضات" : "مدیریت قبض ها"}</p>
                    <IconButton className = {"bg-primary"} text = {showReports ? "مدیریت قبض ها" : "مشاهده گزارش"}
                                icon = {<AssessmentRoundedIcon/>}
                                onClick = {() => setShowReports(!showReports)}
                    />

                </div>
                <RangeDatePicker/>
                <Export excel/>
            </div>
            {
                showReports ? <BillsReport/> : <Table options = {TZBillsTable} data = {bills} role = {role}/>
            }
        </div>
    )
}