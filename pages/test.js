import Modal from "../components/Common/Modal";
import {useState} from "react";

export default function MyModal() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className = "fixed inset-0 flex items-center justify-center">
                <button
                    type = "button"
                    onClick = {() => setIsOpen(true)}
                    className = "rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>
            <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} title = {"ورود موفقیت آمیز بود!"}
                   body = {"در حال انتقال به پنل کاربری هستید...."} type={1}/>
        </div>
    )
}
