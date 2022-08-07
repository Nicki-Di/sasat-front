import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine, ResponsiveContainer
} from "recharts";
import addSeparator from "../../utils/functions/addSeparator";

export default function LineChart({data, unit, base}) {

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className = "flex flex-row bg-s-100 p-4 shadow rounded-md">
                    <p>{`${addSeparator(payload[0].value)}${unit}`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomLabel = props => {
        console.log(props);
        return (
            <g>
                <rect
                    x={props.viewBox.width - 200}
                    y={props.viewBox.y - 15}
                    fill="#aaa"
                    width={180}
                    height={30}
                />
                <text x={props.viewBox.x} y={props.viewBox.y} fill="#111" dy={4} dx={props.viewBox.width - 65}>
                    {`${addSeparator(base)}${unit} :خط مبنا`}
                </text>
            </g>
        );
    };

    return (
        <ResponsiveContainer width="85%" height={400}>
            <AreaChart data = {data} margin={{ top: 0, right: 0, left: -48, bottom: 0 }}>
                <defs>
                    <linearGradient id = "gradient" x1 = "0" y1 = "0" x2 = "0" y2 = "1">
                        <stop offset = "55%" stopColor = "#FF9A0D" stopOpacity = {0.9}/>
                        <stop offset = "100%" stopColor = "#FFFFFF" stopOpacity = {0.1}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray = "3 3"/>
                <XAxis dataKey = "date"/>
                <YAxis/>
                <Tooltip content = {<CustomTooltip/>}/>
                <ReferenceLine y = {base} label = {CustomLabel} stroke = "#181FAD"
                               strokeWidth = {3} alwaysShow fill="#181FAD" opacity={1}/>

                <Area dataKey = "value" stroke = "FF9A0D" fill = "url(#gradient)"/>
            </AreaChart>
        </ResponsiveContainer>
    );
}
