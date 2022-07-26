import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import IconButton from "../Buttons/IconButton";

const contacts = ["توزیع کننده منطقه تهران", "توانیر"]

export default function Receivers({isOpen, setIsOpen, receivers, setReceivers}) {

    const createList = list => {
        return (
            <div className = {"flex flex-col gap-3 "}>
                { typeof (setReceivers) === 'function' &&
                    <div className = {"flex items-center gap-3"}>
                        <input id = "all"
                               type = "checkbox"
                               onChange = {() => setReceivers(list)}
                               className = "w-4 h-4 text-blue-600 text-primary rounded-sm border border-s-10 focus:ring-0 focus:shadow-none transition-all duration-200 "/>

                        <label htmlFor = "all"
                               className = "b1 text-gray-900 dark:text-gray-300">همه‌ی مخاطبان</label>
                    </div>

                }
                { typeof (setReceivers) === 'function' &&
                    <div className = {"border-b border-s-80 "}/>
                }

                {list?.map((contact, index) =>
                    <div className = "flex items-center gap-3 " key = {contact}>
                        {
                            typeof (setReceivers) === 'function' &&
                            <input id = {`checkbox-${index}`}
                                   type = "checkbox"
                                   checked = {receivers.includes(contact)}
                                   onChange = {() => receivers.includes(contact) ? setReceivers(receivers.filter(receiver => receiver !== contact)) : setReceivers([...receivers, contact])}
                                   className = "w-4 h-4 text-blue-600 text-primary rounded-sm border border-s-10 focus:ring-0 focus:shadow-none transition-all duration-200 "/>
                        }
                        <label htmlFor = {`checkbox-${index}`}
                               className = "b1 text-gray-900 dark:text-gray-300">{contact}</label>
                    </div>
                )}
            </div>
        )

    }

    return (
        <>
            {typeof (setReceivers) === 'function' ?
                <div className = {"border-2 border-primary flex h-fit rounded gap-4 px-4 py-2 mt-[31px] cursor-pointer"}
                     onClick = {() => setIsOpen(true)}
                >
                    <p>انتخاب مخاطبان</p>
                    <ContactsRoundedIcon/>
                </div>
                :
                <p className = {"b1 text-s-10 border-b border-primary cursor-pointer"}
                   onClick = {() => setIsOpen(true)}>مشاهده لیست مخاطبان</p>
            }

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
                        <div className = {"fixed inset-0 bg-white bg-opacity-[10%] backdrop-blur-sm "}/>
                    </Transition.Child>

                    <div className = {"fixed inset-0 overflow-y-auto"}>
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
                                    className = {"pb-8 border-2 border-s-60 bg-white w-full max-w-md transform overflow-hidden rounded transition-all flex flex-col items-center justify-center"}>
                                    <Dialog.Title
                                        as = "h2"
                                        className = "h2 text-s-10 bg-s-90 w-full py-2"
                                    >
                                        {typeof (setReceivers) === 'function' ?
                                            " انتخاب مخاطبان"
                                            :
                                            "مخاطبان"
                                        }
                                    </Dialog.Title>

                                    <div
                                        className = {"bg-s-90 rounded w-[20vw] my-8 flex flex-col gap-4 p-4 h-80 overflow-auto "}>
                                        {
                                            typeof (setReceivers) === 'function' ? createList(contacts) : createList(receivers)
                                        }
                                    </div>
                                    {
                                        typeof (setReceivers) === 'function' ? <div
                                                className = {"flex flex-row items-center justify-between w-[20vw]"}>

                                                <IconButton className = {"bg-primary basis-1/2 "} text = {"تایید"}
                                                            icon = {<DoneRoundedIcon/>} onClick = {() => setIsOpen(false)}/>

                                                <IconButton className = {"basis-1/2 "} text = {"انصراف"}
                                                            icon = {<CloseRoundedIcon/>} onClick = {() => setIsOpen(false)}/>

                                            </div>
                                            :
                                            <p
                                                className = {"bg-primary b1 rounded py-2 px-8 cursor-pointer"}
                                                onClick = {() => setIsOpen(false)}
                                            >
                                                بستن
                                            </p>
                                    }


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
