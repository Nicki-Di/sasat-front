import {useState} from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function InputChips({title, state, setState, name}) {
    const [temp, setTemp] = useState([])

    return (
        <div>
            <p className = "w-full b1 text-s-30">
                {title}
            </p>
            <input
                type = {"text"}
                name = {name}
                value = {temp}
                className = {"my-2 w-full rounded b1 p-2 border-2 focus:ring-0 focus:outline-0 border-s-60 focus:border-s-10 hover:border-s-10 transition-all duration-200"}
                onChange = {e => {
                    setTemp(e.target.value)
                }}
                onKeyDown = {(e) => {
                    if (e.key === 'Enter') {
                        setState([...state, temp])
                        setTemp("")
                    }
                }}
            />
            <div className = {"flex flex-row gap-2 flex-wrap"}>
                {
                    state.map(feeder => (
                        <div className = {"flex flex-row bg-s-90 rounded text-s-30 gap-1 px-1.5"} key={feeder}>
                            <CloseRoundedIcon className={"cursor-pointer"} onClick = {() => {
                                setState(state.filter(item => item !== feeder))
                            }}/>
                            <p className = {"b1"}>{feeder}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
