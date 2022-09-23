import PDatePicker from "./PDatePicker";
import {useSelector} from "react-redux";
import * as datePickerActions from "../../store/slices/datePicker";

export default function RangeDatePicker() {
    const date = useSelector(state => state.datePickerReducer)

    return (
        <div className={"flex flex-col gap-4 items-center justify-center bg-s-90 rounded p-5 grow "}>
            <p className = {"b1 text-s-30"}> فیلتر تاریخ</p>
            <div className = {"flex flex-row gap-5 items-center justify-center"}>
                <p className = {"text-s-60 b1"}>در حال نمایش</p>
                <PDatePicker dateState = {date.mainPageMinDate} setDateState = {datePickerActions.setMainPageMinDate}/>
                <PDatePicker minDate = {{
                    year: date.mainPageMinDate.year,
                    month: date.mainPageMinDate.month,
                    day: date.mainPageMinDate.day
                }} dateState = {date.mainPageMaxDate}
                             setDateState = {datePickerActions.setMainPageMaxDate}/>
            </div>
        </div>
    )
}