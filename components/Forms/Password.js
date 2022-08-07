import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import {useState} from "react";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export default function Password({title, state, setState, error}) {
    const [showPassword, setShowPassword] = useState("password");

    return (
        <div className = {"relative"}>
            <p className = "b1 text-s-30 mb-2 ">
                {title}
            </p>
            {
                error ? <WarningRoundedIcon
                        className = {"absolute left-2 top-[38px] " + (state ? "text-alert animate-fadeIn" : "text-white")}/> :
                    (
                        showPassword === "password" ? <RemoveRedEyeRoundedIcon
                            className = {"absolute left-2 top-[38px] cursor-pointer " + (state ? "text-s-60 " : "text-white animate-fadeIn")}
                            onClick = {() => {
                                setShowPassword("text")
                            }}
                        /> : <VisibilityOffRoundedIcon
                            className = {"absolute left-2 top-[38px] cursor-pointer text-s-60"}
                            onClick = {() => {
                                setShowPassword("password")
                            }}
                        />
                    )
            }


            <input
                type = {showPassword}
                name = "password"
                id = "password"
                value = {state}
                className = {"w-full rounded b1 p-2 border-2 focus:ring-0 focus:outline-0 " + (error ? "border-alert" : "border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200 ")}
                onChange = {e => {
                    setState(e.target.value);
                }}
            />
            <p className = {"mt-2 text-alert h-4"}>{error}</p>

        </div>
    )
}