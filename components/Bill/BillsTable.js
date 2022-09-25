import RangeDatePicker from "../Date/RangeDatePicker";
import Export from "../Charts/Export";
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import {TZBillsTable} from '/utils/texts/billsTexts'
import Table from "../Table/Table";
import IconButton from "../Buttons/IconButton";


export default function BillsTable({bills}) {
    return (
        <div className = {"flex flex-col gap-8 p-8 "}>
            <div className = {"flex flex-row justify-between gap-8 "}>
                <div className = {"flex flex-col items-center justify-between text-s-10"}>
                    <p className = {"h2"}>مدیریت قبض ها</p>
                    <IconButton className = {"bg-primary"} text = {"مشاهده گزارش"}
                                icon = {<AssessmentRoundedIcon/>}/>

                </div>
                <RangeDatePicker/>
                <Export excel/>
            </div>
            <Table options = {TZBillsTable} data = {bills} role={"توزیع کننده"}/>
        </div>
    )
}