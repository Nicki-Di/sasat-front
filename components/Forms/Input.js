import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import {useEffect} from "react";

export default function Input({type, name, title, placeholder, state, setState, error, complain}) {
    useEffect(() => {
        if (complain !== undefined)
            !complain ? setState("") : setState("اعتراض به قبض")
    }, [complain])


    return (<div className = {"relative"}>
        <p className = "b1 text-s-30 mb-2 ">
            {title ?? title}
        </p>
        {
            (error ? <WarningRoundedIcon
                    className = {"absolute left-2 top-[38px] " + (state ? "text-alert animate-fadeIn" : "text-white")}/>
                :
                (!complain &&
                    <ModeRoundedIcon
                        className = {"absolute left-2 top-[38px] " + (state ? "text-s-60 animate-fadeIn" : "text-white")}/>))
        }
        {type === "textarea" ?
            <textarea
                name = {name}
                value = {state}
                placeholder = {placeholder}
                className = {"w-full rounded b1 p-2 border-2 focus:ring-0 focus:outline-0 " + (error ? "border-alert" : "border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200 ")}
                onChange = {e => {
                    setState(e.target.value);
                }}
            />

            :

            <input
                disabled = {complain}
                type = {type}
                name = {name}
                value = {state}
                placeholder = {placeholder}
                className = {"w-full rounded b1 p-2 border-2 focus:ring-0 focus:outline-0 " + (error ? "border-alert" : "border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200 ")}
                onChange = {e => {
                    setState(e.target.value);
                }}
            />
        }
        <p className = {"mt-2 text-alert h-4"}>{error}</p>
    </div>)
}