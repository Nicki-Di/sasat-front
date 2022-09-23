import {Fragment, useState} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import DropDown from "./DropDown";

export default function AreaDropDown({data}) {
    const [selected, setSelected] = useState(data[0])

    return (
        <div className={"flex flex-col gap-4 items-center justify-center bg-s-90 rounded p-5"}>
            <p className={"b1 text-s-30 "}>تغییر مناطق در حال نمایش </p>
            <div className = "flex flex-row items-center gap-5 ">
                <p className={"b1 text-s-60 "}>در حال نمایش</p>
                <DropDown selected={selected} setSelected={setSelected} data={data} className={"bg-s-80 border-none "}/>
            </div>
        </div>
    )
}
