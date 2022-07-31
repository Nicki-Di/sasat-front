import React, {useEffect, useState} from "react";
import {PieChart, Pie, Tooltip, Cell} from "recharts";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import addSeparator from "../../consts/functions/addSeparator";

export default function RadialChart({data, title, unit}) {
    const [sum, setSum] = useState(0)
    useEffect(() => {
        setSum((data.reduce((sum, entry) => sum + entry.value, 0)))
    }, [])
    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className = "flex flex-row bg-s-100 p-4 shadow rounded-md">
                    <p>{`${payload[0].name} : ${addSeparator(payload[0].value)} ${unit}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className = {"relative b1 flex flex-col items-center justify-center gap-4"}>

            <p className = {"text-s-10"}>{title}</p>
            <div className = {"bg-s-100 rounded-md shadow-lg p-8"}>
                <PieChart width = {300} height = {300}>
                    <Pie
                        dataKey = "value"
                        data = {data}
                        innerRadius = {90}
                        outerRadius = {110}
                        startAngle = {270}
                        endAngle = {630}
                    >
                        {
                            data.map(entry => (
                                <Cell key = {entry.name} fill = {entry.color}/>
                            ))
                        }
                    </Pie>
                    <Tooltip content = {<CustomTooltip/>}/>
                </PieChart>
                <div className = {"absolute top-[35%] right-[30%] flex flex-col gap-4"}>
                    <p className = {"b1 text-s-60"}>{title}</p>
                    <div className = {"flex flex-row items-center justify-center gap-12"}>
                        <p className = {"h2"}>{sum}</p>
                        <p className = {"b1 text-s-60"}>{unit}</p>
                    </div>

                </div>
                <div className = {"flex flex-col gap-8"}>
                    {
                        data.map(entry => (
                            <div key = {entry.name} className = {"flex flex-row items-center justify-center gap-10"}>
                                <CircleRoundedIcon className = {entry.bullet}/>
                                <div className = {"flex flex-col items-center justify-center gap-2"}>
                                    <p className = {"text-s-30"}>{entry.name}</p>
                                    <p className = {"h2 text-s-10"}>{addSeparator(entry.value)}</p>
                                </div>
                                <p className = {"text-s-60 b1"}>{unit}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    );
}