import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function Input({type, name, title, placeholder, state, setState, error}) {
    return (<div className = {"relative"}>
        <p className = "b1 text-s-30 mb-2 ">
            {title}
        </p>
        {
            (error ? <WarningRoundedIcon
                    className = {"absolute left-2 top-[38px] " + (state ? "text-alert animate-fadeIn" : "text-white")}/> :
                <ModeRoundedIcon
                    className = {"absolute left-2 top-[38px] " + (state ? "text-s-60 animate-fadeIn" : "text-white")}/>)
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