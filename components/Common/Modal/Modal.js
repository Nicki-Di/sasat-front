import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useEffect, useState} from 'react'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

export default function Modal({isOpen, setIsOpen, title, body, type, extra}) {
    const [color, setColor] = useState("");
    const [icon, setIcon] = useState("");

    useEffect(() => {
        switch (type) {
            case 1:
                setColor("bg-success-1 border-success");
                setIcon(<CheckBoxRoundedIcon fontSize="large" className={"text-success"} />)
                break
        }
    }, [type])
    return (
        <Transition appear show = {isOpen} as = {Fragment}>
            <Dialog as = "div" className = "relative z-10 flex flex-row" onClose = {() => setIsOpen(false)}>
                <Transition.Child
                    as = {Fragment}
                    enter = "ease-out duration-300"
                    enterFrom = "opacity-0"
                    enterTo = "opacity-100"
                    leave = "ease-in duration-200"
                    leaveFrom = "opacity-100"
                    leaveTo = "opacity-0"
                >
                    <div className = {"fixed inset-0 bg-white bg-opacity-[10%] backdrop-blur-sm " + extra} />
                </Transition.Child>

                <div className = {"fixed inset-0 overflow-y-auto " + extra}>
                    <div className = "flex min-h-full items-center justify-center text-center">
                        <Transition.Child
                            as = {Fragment}
                            enter = "ease-out duration-300"
                            enterFrom = "opacity-0 scale-95"
                            enterTo = "opacity-100 scale-100"
                            leave = "ease-in duration-200"
                            leaveFrom = "opacity-100 scale-100"
                            leaveTo = "opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className = {"w-full max-w-md transform overflow-hidden rounded p-6 transition-all border-r-8 " + color}>
                                {icon}
                                <Dialog.Title
                                    as = "h2"
                                    className = "h2 text-s-10 my-4"
                                >
                                    {title}
                                </Dialog.Title>
                                <div>
                                    <p className = "b1 text-s-30">
                                        {body}
                                    </p>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
