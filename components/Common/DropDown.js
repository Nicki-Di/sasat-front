import {Fragment, useState} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'

const data = [
    {id: 0, name: 'همه مناطق'},
    {id: 1, name: 'منطقه ۱'},
    {id: 2, name: 'منطقه ۲'},
    {id: 3, name: 'منطقه ۳'},
    {id: 4, name: 'منطقه ۴'},
]

export default function DropDown() {
    const [selected, setSelected] = useState(data[0])
    const [query, setQuery] = useState('')

    const filteredData =
        query === ''
            ? data
            : data.filter((item) =>
                item.name
                    .replace(/\s+/g, '')
                    .includes(query.replace(/\s+/g, ''))
            )

    return (
        <div className={"flex flex-col gap-4 items-center justify-center bg-s-90 rounded p-5"}>
            <p className={"b1 text-s-30 "}>تغییر مناطق در حال نمایش </p>
        <div className = "flex flex-row items-center gap-5 ">
            <p className={"b1 text-s-60 "}>در حال نمایش</p>
            <Combobox value = {selected} onChange = {setSelected}>
                <div className = "relative mt-1">
                    <div
                        className = "relative w-full cursor-default overflow-hidden rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2">
                        <Combobox.Input
                            className = "w-full border-none py-2 px-6 b1 bg-s-80 leading-5 text-s-10 focus:ring-0"
                            displayValue = {(item) => item.name}
                            onChange = {(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className = "absolute inset-y-0 left-2 flex items-center pr-2">
                            <ChevronDownIcon
                                className = "h-5 w-5 text-s-10"
                                aria-hidden = "true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as = {Fragment}
                        leave = "transition ease-in duration-100"
                        leaveFrom = "opacity-100"
                        leaveTo = "opacity-0"
                        afterLeave = {() => setQuery('')}
                    >
                        <Combobox.Options
                            className = "absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 b1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {filteredData.length === 0 && query !== '' ? (
                                <div className = "relative cursor-default select-none py-2 px-4 text-s-10">
                                    نتیجه‌ای وجود ندارد.
                                </div>
                            ) : (
                                filteredData.map((item) => (
                                    <Combobox.Option
                                        key = {item.id}
                                        className = {({active}) =>
                                            `relative cursor-pointer select-none py-2 px-6 text-s-10 ${
                                                active && 'bg-primary'
                                            }`
                                        }
                                        value = {item}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span
                            className = {"block truncate b1"}
                        >
                          {item.name}
                        </span>
                                                {selected ? (
                                                    <span
                                                        className = {`absolute inset-y-0 left-4 flex items-center ${
                                                            active ? 'text-s-10' : 'text-primary'
                                                        }`}
                                                    >
                            <CheckIcon className = "h-5 w-5" aria-hidden = "true"/>
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
        </div>
    )
}
