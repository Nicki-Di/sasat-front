import {useRouter} from "next/router";
import Pagination from "../Common/Pagination";
import StatusBadge from "./StatusBadge";
import BillResultBadge from "../Bill/BillResultBadge";
import BillStatusBadge from "../Bill/BillStatusBadge";
import reformat from "../../utils/functions/reformat";

const formData = (data, index, slug, role) => {
    const rows = [<td
        key={"index"}
        className = "h-20 text-center  whitespace-nowrap b1 text-s-30 border-b border-s-80">{index}</td>]
    for (const property in data) {
        if (property !== 'status' && property !== 'text' && property !== "billResult" && property !== "billStatus") {
            rows.push(<td
                key={property}
                className = "h-20 text-center  whitespace-nowrap b1 text-s-30 border-b border-s-80">{reformat(data[property])}</td>)
        }
        if (property === 'status') {
            rows.push(<td
                key={property}
                className = "h-20 text-center  whitespace-nowrap b1 text-s-30 border-b border-s-80 flex justify-center items-center">
                <StatusBadge status = {data[property]}/></td>)
        }
        if (property === 'billStatus') {
            rows.push(<td
                key={property}
                className = "h-20 text-center  whitespace-nowrap b1 text-s-30 border-b border-s-80 flex justify-center items-center">
                <BillStatusBadge status = {data[property]}/></td>)
        }
        if (property === 'billResult') {
            rows.push(<td
                key = {property}
                className = "h-20 text-center  whitespace-nowrap b1 text-s-30 border-b border-s-80 flex justify-center items-center">
                <BillResultBadge status = {data[property]}/></td>)
        }
    }
    if (data?.billStatus === "قبض در انتظار صدور" && role === "توزیع کننده") {
        rows.push(
            <td
                key={"showBillButton"}
                className = "h-20 text-center whitespace-nowrap b1 text-s-10 border-b border-s-80">
                <a href = {`/dashboard/${slug}/${index}`}
                   className = {"bg-primary text-center rounded py-2 px-4 "}>
                    مشاهده قبض
                </a>
            </td>)
    } else {
        rows.push(
            <td
                key={"showDetailButton"}
                className = "h-20 text-center whitespace-nowrap b1 text-s-10 border-b border-s-80">
                <a href = {`/dashboard/${slug}/${index}`}
                   className = {"border-b border-primary"}>
                    مشاهده جزئیات
                </a>
            </td>)
    }
    return rows
}
export default function Table({options, data, itemsPerPage = 10, role}) {

    const router = useRouter();
    const pagesNumber = Math.ceil(data.length / itemsPerPage);
    let currentPage = (parseInt(router.asPath.split("?page=")[1]) || 1)
    let shownMessages = data.slice(((currentPage - 1) * itemsPerPage), (currentPage * itemsPerPage)).map((message, index) => (
        <tr key = {index}>
            {
                formData(message, ((currentPage - 1) * itemsPerPage) + index + 1, options.slug, role)
            }
        </tr>
    ))


    return (
        <div className = "flex flex-col gap-8 p-8 ">
            <div className = "-my-2 overflow-x-auto -mx-8">
                <div className = "py-2 align-middle inline-block min-w-full px-8">
                    <div className = "overflow-hidden">
                        <table className = "min-w-full border-collapse">
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