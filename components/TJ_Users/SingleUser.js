import {useRouter} from "next/router";
import * as tjUsersActions from "../../store/slices/tjUsers";
import {useDispatch} from "react-redux";
import {useState} from "react";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CreateIcon from "@mui/icons-material/Create";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {primaryInfo, billFormula, billTariff, billContract, billDuty,} from "../../utils/texts/info";
import Row from "../Setting/Row";
import Modal from "../Common/Modal";
import {addSuccessModal} from "../../utils/texts/usersTable";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const buttons = [
    {text: "ویرایش", icon: <CreateIcon/>},
    {text: "غیرفعال", icon: <RemoveCircleOutlineRoundedIcon/>},
    {text: "حذف", icon: <DeleteRoundedIcon/>},

]

export default function SingleUser({isPreview, user}) {
    const router = useRouter()
    const dispatcher = useDispatch();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className = "flex flex-col p-8 gap-8 ">
            {/* row 1 */}
            <div className = {"flex flex-row justify-between items-center gap-8 border-b border-s-80 pb-8"}>
                <img src = {"/common/person-icon.png"}/>
                <div className = {"flex flex-col h2 grow"}>
                    <p className = {"text-s-10"}>تجمیع کننده</p>
                    <p className = {"text-s-30"}>{user?.area}</p>
                </div>
                {
                    isPreview ?
                        <div className = {"flex flex-row gap-8"}>
                            <div>
                                <div className = {"bg-primary py-2 px-4 flex flex-row gap-2 text-s-10 rounded cursor-pointer"}
                                     onClick = {() => {
                                         setIsOpen(true)
                                          dispatcher(tjUsersActions.previewTJUserSet({}))
                                     }}
                                >
                                    <p className = {"b1 "}>تایید اطلاعات و اضافه کردن کاربر</p>
                                    <DoneRoundedIcon/>
                                </div>
                            </div>
                            <div
                                className = {"flex flex-row b1 rounded py-2 gap-2 items-center justify-center cursor-pointer"}
                                onClick = {async () => await router.push({
                                    pathname: '/dashboard/tjUsers/new',
                                })}
                            >
                                <p>ویرایش اطلاعات</p>
                                <CreateIcon/>
                            </div>
                        </div>
                        :
                        <div className = {"flex flex-row gap-8"}>
                            <div className = {"bg-primary py-2 px-4 flex flex-row gap-2 text-s-10 rounded"}>
                                <p className = {"b1"}>ارسال پیام</p>
                                <SendRoundedIcon className = {"rotate-180"}/>
                            </div>
                            {
                                buttons.map(button =>
                                    <div
                                        className = {"py-2 px-4 flex flex-row gap-2 text-s-10 rounded border-2 border-s-10"}>
                                        <p className = {"b1"}>{button.text}</p>
                                        {button.icon}
                                    </div>
                                )
                            }
                        </div>
                }
            </div>

            {/* row 2 */}
            <Row keys = {primaryInfo} values = {[user?.name, user?.email]}/>

            {/* row 3 */}
            <Row keys = {billFormula} values = {[user?.formula, user?.p1, user?.p2]}/>

            {/* row 4 */}
            <Row keys = {billTariff} values = {[user?.penalty, user?.reward]}/>

            {/* row 5 */}
            <Row keys = {billContract} values = {[user?.contractNumber, user?.fileName]}/>

            {/* row 6 */}
            <Row keys = {billDuty} values = {[user?.feeders, user?.load]} lastRow/>

            {/* Modal */}
            <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} title = {addSuccessModal.title}
                   body = {addSuccessModal.body} type = {1}
                   CTA = {
                       <div className = {"flex flex row items-center justify-center cursor-pointer gap-2 "}
                            onClick = {async () => {
                                setIsOpen(false)
                                await router.push({
                                    pathname: '/dashboard/tjUsers',
                                })
                            }}>
                           <p className = {"b1"}>متوجه شدم</p>
                           <ArrowBackRoundedIcon/>
                       </div>}
            />
        </div>

    )
}