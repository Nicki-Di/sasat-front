import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";

const contacts = ["توزیع کننده منطقه تهران", "توانیر"]

export default function Receivers({isOpen, setIsOpen, receivers, setReceivers}) {

    const createList = list => {
        return (
            list?.map((contact, index) =>
                <div className = "flex items-center gap-4 " key = {contact}>
                    {
                        typeof (setReceivers) === 'function' &&
                        <input id = {`checkbox-${index}`}
                               type = "checkbox"
                               checked = {receivers.includes(contact)}
                               onChange = {() => receivers.includes(contact) ? setReceivers(receivers.filter(receiver => receiver !== contact)) : setReceivers([...receivers, contact])}
                               className = "w-4 h-4 text-blue-600 text-primary rounded focus:ring-0 focus:shadow-none transition-all duration-200 "/>
                    }
                    <label htmlFor = {`checkbox-${index}`}
                           className = "b1 text-gray-900 dark:text-gray-300">{contact}</label>
                </div>
            )
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
                                                className = {"flex flex-row items-center w-full items-center justify-between w-[20vw]"}>
                                                <div
                                                    className = {"basis-1/2 flex flex-row bg-primary b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                                                    onClick = {() => setIsOpen(false)}
                                                >
                                                    <p>تایید</p>
                                                    <DoneRoundedIcon/>
                                                </div>
                                                <div
                                                    className = {"basis-1/2 flex flex-row b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                                                    onClick = {() => setIsOpen(false)}
                                                >
                                                    <p>انصراف</p>
                                                    <CloseRoundedIcon/>
                                                </div>
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
