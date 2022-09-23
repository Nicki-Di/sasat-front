import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "../Common/Pagination";
import MessageBadge from "./StatusBadge";
import AddButton from "../Buttons/AddButton";

const formData = (data, index, slug) => {
    const rows = [<td className = "h-16 text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{index}</td>]
    for (const property in data) {
        if (property !== 'status' && property !== 'text') {
            rows.push(<td
                className = "h-16 text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80">{data[property]}</td>)
        }
        if (property === 'status') {
            rows.push(<td
                className = "h-16 text-center py-4 whitespace-nowrap b1 text-s-30 border-b border-s-80 flex justify-center items-center">
                <MessageBadge status = {data[property]}/></td>)
        }
    }
    rows.push(
        <td className = "h-16 text-center py-4 whitespace-nowrap b1 text-s-10 border-b border-s-80">
            <a href = {`/dashboard/${slug}/${index}`}
               className = {"border-b border-primary"}>
                مشاهده جزئیات
            </a>
        </td>)
    return rows
}
export default function Table({options, data, itemsPerPage = 10 }) {

    const router = useRouter();
    const pagesNumber = Math.ceil(data.length / itemsPerPage);
    let currentPage = (parseInt(router.asPath.split("?page=")[1]) || 1)
    let shownMessages = data.slice(((currentPage - 1) * itemsPerPage), (currentPage * itemsPerPage)).map((message, index) => (
        <tr key = {index}>
            {
                formData(message, ((currentPage - 1) * itemsPerPage) + index + 1, options.slug)
            }
        </tr>
    ))


    return (
            <div className = "flex flex-col gap-8 p-8 ">
                <div className = {"flex flex-row justify-between items-center"}>
                    <p className = {"h2 text-s-10"}>{options.title}</p>
                    <AddButton slug={`${options.slug}/new`} text={options.button}/>
                </div>
                <div className = "-my-2 overflow-x-auto -mx-8">
                    <div className = "py-2 align-middle inline-block min-w-full px-8">
                        <div className = "overflow-hidden">
                            <table className = "min-w-full">
                                <thead>
                                <tr>
                                    {
                                        options.head.map(item => (<th
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
    )
}