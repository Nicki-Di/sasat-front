import styles from "../../styles/General.module.css"
import reformat from "../../utils/functions/reformat";

export default function Row({keys, values, units = [""], lastRow, downloadButton}) {

    let cols
    switch (keys.length) {
        case 2 :
            cols = styles.customGrid2
            break
        case 3 :
            cols = styles.customGrid3
            break
    }

    return (
        <div className = {!lastRow ? "border-b border-s-80 pb-8" : ""}>
            <div
                className = {"grid grid-rows-2 gap-x-8 gap-y-4 b1 " + cols}>
                {
                    keys.map(item =>
                        <p key = {item} className = {"text-s-30 "}>
                            {item}
                        </p>
                    )
                }
                {
                    values.map((item, index) =>
                        <div key = {index}
                             className = {" flex flex-row gap-8 items-center [word-spacing:0.16rem] text-s-10"}>
                            <p className = {"overflow-hidden text-ellipsis whitespace-nowrap w-[22ch]"}>{`${reformat(item)} ${units[index] ?? ""}`}</p>
                            {downloadButton && index === 1 &&
                                <p className = {"b1 text-s-10 border-b border-primary cursor-pointer"}>دانلود</p>}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

