import {Fragment, useState} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'

export default function DropDown({data, selected, setSelected, className}) {
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
            <Combobox value = {selected} onChange = {setSelected}>
                <div className = "relative mt-1">
                    <div
                        className = "relative w-full cursor-default overflow-hidden rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2">
                        <Combobox.Input
                            className = {"w-full py-2 px-6 b1 leading-5 text-s-10 focus:ring-0 " + className}
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
                                filteredData.map((item, index) => (
                                    <Combobox.Option
                                        key = {index}
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

    )
}
