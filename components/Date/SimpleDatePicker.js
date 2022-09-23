import DatePicker from "react-multi-date-picker";
import opacity from "react-element-popper/animations/opacity";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

export default function SimpleDatePicker({title, dateState, setDateState}) {
    return (
        <div className={"flex flex-col "}>
            <p className = "b1 text-s-30 mb-2 ">
                {title ?? title}
            </p>
            <DatePicker
                animations = {[
                    opacity(),
                    transition({from: 35, duration: 800})
                ]}
                calendar = {persian}
                locale = {persian_fa}
                calendarPosition = "bottom-right"
                value = {new DateObject({calendar: persian}).set({
                    year: dateState?.year,
                    month: dateState?.month,
                    day: dateState?.day,
                    calendar: persian,
                    locale: persian_fa
                })}
                onChange = {(e) => {
                    setDateState?.({year: e.year, month: e.month.number, day: e.day})
                }}
                render = {(value, openCalendar) => {
                    return (
                        <div className = {"min-h-[2.6rem] rounded p-2 cursor-pointer b1 border-2 border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200"}
                             onClick = {openCalendar}>
                            <p>{value}</p>
                        </div>
                    )
                }}
            />
        </div>
    )
}