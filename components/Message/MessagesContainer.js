import {head} from '../../texts/messagesTable'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "../Common/Pagination";
import MessageBadge from "./MessageBadge";
import {useEffect} from "react";
import * as messagesActions from "../../store/slices/messages";
import {useDispatch} from "react-redux";

const messages = [
    {
        title: 'اعتراض به قبض',
        date: '۱۴۰۱/۰۵/۰۵',
        sender: 'توزیع کننده منطقه تهران',
        receivers: ["تجمیع کننده منطقه 1 "],
        status: "دیده شده",
        text: "متن ۱"
    },
    {
        title: 'اعتراض به قبض',
        date: '۱۴۰۱/۰۵/۰۵',
        sender: 'توزیع کننده منطقه تهران',
        receivers: ["تجمیع کننده منطقه 1 "],
        status: "جدید",
        text: "متن ۲"
    },

]

export default function MessagesContainer() {
    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(messagesActions.messagesInitialized(messages))
    }, [])

    const router = useRouter();
    const messagesPerPage = 10;
    const pagesNumber = Math.ceil(messages.length / messagesPerPage);
    let currentPage = (parseInt(router.asPath.split("?page=")[1]) || 1)
    let shownMessages = messages.slice(((currentPage - 1) * messagesPerPage), (currentPage * messagesPerPage)).map((message, index) => (
        <tr key = {index}>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{((currentPage - 1) * messagesPerPage) + index + 1}</td>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{message.title}</td>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{message.date}</td>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{message.sender}</td>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{message.receivers[0]}</td>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80 flex justify-center"><MessageBadge
                status = {message.status}/></td>
            <td className = "text-center py-4 whitespace-nowrap b1 text-s-10 border-b border-s-80">
                <a href = {`/dashboard/messages/${((currentPage - 1) * messagesPerPage) + index + 1}`}
                   className = {"border-b border-primary"}>
                    مشاهده جزئیات
                </a>
            </td>
        </tr>
    ))


    return (
        <main className = "w-[87%] mr-auto p-8 flex flex-col gap-16 items-center">
            <div className = "flex flex-col w-full p-8 bg-s-100 shadow rounded-md gap-8">
                <div className = {"flex flex-row justify-between items-center"}>
                    <p className = {"h2 text-s-10"}>پیام ها</p>
                    <Link href = {"/dashboard/messages/newMessage"}>
                        <a
                            className = {"bg-primary text-s-10 b1 flex items-center gap-2 py-2 px-4 rounded"}
                        >
                            <p>ایجاد پیام جدید</p>
                            <AddRoundedIcon/>
                        </a>
                    </Link>
                </div>
                <div className = "-my-2 overflow-x-auto -mx-8">
                    <div className = "py-2 align-middle inline-block min-w-full px-8">
                        <div className = "overflow-hidden">
                            <table className = "min-w-full">
                                <thead>
                                <tr>
                                    {
                                        head.map(item => (<th
                                            key = {item}
                                            scope = "col"
                                            className = "py-3 text-center b1 text-s-60 border-b border-s-60"
                                        >
                                            {item}
                                        </th>))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {shownMessages}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Pagination pagesNumber = {pagesNumber}/>
            </div>
        </main>
    )
}