import {Treemap, ResponsiveContainer} from "recharts";
import reformat from "../../utils/functions/reformat"
const data = [
    {
        name: "منطقه 6",
        children: [
            {size: 500_000},
        ],
        status: "پاداش"

    },
    {
        name: "منطقه 1",
        children: [
            {size: 500_000},
        ],
        status: "جریمه"

    },
    {
        name: "منطقه4",
        children: [
            {size: 50_000},
        ],
        status: "پاداش"

    },
    {
        name: "منطقه 8",
        children: [
            {size: 100_000},
        ],
        status: "جریمه"

    },
    {
        name: "منطقه 5",
        children: [
            {size: 250_000},
        ],
        status: "پاداش"

    },
    {
        name: "منطقه 9",
        children: [
            {size: 200_000},
        ],
        status: "جریمه"

    },
    {
        name: "منطقه 2",
        children: [
            {size: 100_000,},
        ],
        status: "پاداش"
    },
];

const COLORS = [
    "#E3FCE9",
    "#FFEDED",
];

const CustomizedContent = (props) => {
    const {root, depth, x, y, width, height, index, colors, name, value, status} = props;

    return (
        <g>
            <rect
                x = {x}
                y = {y}
                width = {width}
                height = {height}
                style = {{
                    fill: depth < 2 ? (status === "جریمه" ? colors[1] : colors[0]) : "none",
                    stroke: "#E0E0E0",
                    strokeWidth: 8 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
                rx="8"
                ry="8"
            />
            {depth === 1 ? (
                <text
                    x = {x + width / 2}
                    y = {y + height / 2}
                    textAnchor = "middle"
                    fill = "#1A1A1A"
                    strokeOpacity = {0}
                    className={"b1"}
                >
                    {name}

                </text>
            ) : null}

            {depth === 1 ? (
                <text
                    x = {x + width / 2}
                    y = {y + height / 2 + 23}
                    textAnchor = "middle"
                    fill = "#1A1A1A"
                    strokeOpacity = {0}
                    className={"b1"}
                >
                    {reformat(value)}
                </text>
            ) : null}

            {depth === 1 ? (
                <text
                    x = {x + width / 2}
                    y = {y + height / 2 + 45}
                    textAnchor = "middle"
                    fill = {status === "جریمه" ? "#A40000" : "#005916"}
                    strokeOpacity = {0}
                    className={"b1"}
                >
                    {status}
                </text>
            ) : null}

        </g>
    );
};

export default function TreeMap() {
    return (
        <ResponsiveContainer width = "100%" height = {400}>
            <Treemap
                data = {data}
                dataKey = "size"
                stroke = "#fff"
                fill = "#8884d8"
                content = {<CustomizedContent colors = {COLORS}/>}
            >
            </Treemap>
        </ResponsiveContainer>
    );
}
