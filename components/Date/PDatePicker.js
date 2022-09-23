import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import DateObject from "react-date-object";
import {useDispatch} from "react-redux";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function PDatePicker({minDate, dateState, setDateState}) {
    const dispatcher = useDispatch()

    return (
        <div style = {{direction: "rtl"}}>
            <DatePicker
                animations = {[
                    opacity(),
                    transition({from: 35, duration: 800})
                ]}
                calendar = {persian}
                locale = {persian_fa}
                calendarPosition = "bottom-right"
                onChange = {(e) => {
                    dispatcher(setDateState({year: e.year, month: e.month.number, day: e.day}))
                }}
                value = {new DateObject({calendar: persian}).set({
                    year: dateState?.year,
                    month: dateState?.month,
                    day: dateState?.day,
                    calendar: persian,
                    locale: persian_fa
                })}
                render = {(value, openCalendar) => {
                    return (
                        <div className = {"flex flex-row bg-s-80 rounded px-6 py-2 cursor-pointer b1 "}
                             onClick = {openCalendar}>
                            <p className = {"text-s-30"}>{minDate ? "تا" : "از"}</p>
                            <p className = {"mx-2 "}>{value}</p>
                            <KeyboardArrowDownRoundedIcon/>
                        </div>
                    )
                }}
                minDate = {minDate && (new DateObject({
                    year: minDate?.year,
                    month: minDate?.month,
                    day: minDate?.day,
                    calendar: persian,
                    locale: persian_fa
                }))}
            />
        </div>
    )
}