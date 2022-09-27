import {useRouter} from "next/router";
import * as usersActions from "../../store/slices/users";
import {useDispatch} from "react-redux";
import {useState} from "react";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CreateIcon from "@mui/icons-material/Create";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {primaryInfo, billFormula, billTariff, billContract, billDuty, load, TJs} from "../../utils/texts/info";
import Row from "../Common/Row";
import Modal from "../Common/Modal";
import {addSuccessModal, editSuccessModal} from "../../utils/texts/usersTable";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import IconButton from "../Buttons/IconButton";


export default function SingleUser({isPreview, user, userState}) {
    const router = useRouter()
    const dispatcher = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const role = userState.role

    const doneAddUser = () => {
        setIsOpen(true)
        dispatcher(usersActions.previewUserSet({}))
    }

    const doneEditUser = () => {
        setIsOpen(true)
        dispatcher(usersActions.previewUserSet({}))
    }

    const editPreview = () => {
        router.back()
    }

    const editUser = async () => await router.push({
        pathname: `/dashboard/users/${router.query?.id}/edit`,
    })

    const buttons = [
        {text: "ویرایش", icon: <CreateIcon/>, onClick: editUser},
        {text: "غیرفعال", icon: <RemoveCircleOutlineRoundedIcon/>},
        {text: "حذف", icon: <DeleteRoundedIcon/>},
    ]
    return (
        <div className = "flex flex-col p-8 gap-8 ">
            {/* row 1 */}
            <div className = {"flex flex-row justify-between items-center gap-8 border-b border-s-80 pb-8"}>
                <img src = {"/common/person-icon.png"}/>
                <div className = {"flex flex-col h2 grow"}>
                    {
                        role === "توزیع کننده" && <p className = {"text-s-10"}>تجمیع کننده</p>
                    }
                    {
                        role === "توانیر" && <p className = {"text-s-10"}>توزیع کننده</p>
                    }
                    <p className = {"text-s-30"}>{user?.name}</p>
                </div>
                {
                    isPreview ?
                        <div className = {"flex flex-row gap-8"}>

                            {
                                role === "توزیع کننده" && <IconButton
                                    className = {"bg-primary"}
                                    text = {"تایید اطلاعات و اضافه کردن کاربر"}
                                    icon = {<DoneRoundedIcon/>}
                                    onClick = {doneAddUser}
                                />
                            }
                            {
                                role === "توانیر" && <IconButton
                                    className = {"bg-primary"}
                                    text = {"تایید اطلاعات"}
                                    icon = {<DoneRoundedIcon/>}
                                    onClick = {doneEditUser}
                                />
                            }
                            <IconButton
                                text = {"ویرایش اطلاعات"}
                                icon = {<CreateIcon/>}
                                onClick = {editPreview}
                            />
                        </div>
                        :
                        <div className = {"flex flex-row gap-8"}>

                            <IconButton
                                className = {"bg-primary"}
                                text = {"ارسال پیام"}
                                icon = {<SendRoundedIcon className = {"rotate-180"}/>}
                            />

                            {
                                buttons.map(button =>
                                    <div
                                        key = {button.text}
                                        className = {"py-2 px-4 flex flex-row gap-2 text-s-10 rounded border-2 border-s-10 cursor-pointer"}
                                        onClick = {button.onClick}
                                    >
                                        <p className = {"b1"}>{button.text}</p>
                                        {button.icon}
                                    </div>
                                )
                            }
                        </div>
                }
            </div>

            {/* row 2 */}
            <Row keys = {primaryInfo} values = {[user?.username, user?.email]}/>

            {/* row 3 */}
            {(role === "توزیع کننده") &&
                <Row keys = {billFormula} values = {[user?.formula, user?.p1, user?.p2]}/>}
            {(role === "توانیر") &&
                <Row keys = {load} values = {[user?.load]} units = {["MV"]}/>}


            {/* row 4 */}
            {(role === "توزیع کننده") &&
                <Row keys = {billTariff} values = {[user?.penalty, user?.reward]} units = {["ریال", "ریال"]}/>}
            {(role === "توانیر") &&
                <Row keys = {TJs} values = {[user?.TJs]} lastRow/>}

            {/* row 5 */}
            {(role === "توزیع کننده") &&
                <Row keys = {billContract} values = {[user?.contractNumber, user?.fileName]} downloadButton/>}

            {/* row 6 */}
            {(role === "توزیع کننده") &&
                <Row keys = {billDuty} values = {[user?.feeders, user?.load]} units = {["", "MV"]} lastRow/>}

            {/* Modal */}
            {
                role === "توزیع کننده" &&
                <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} title = {addSuccessModal.title}
                       body = {addSuccessModal.body} type = {1}
                       CTA = {
                           <div className = {"flex flex row items-center justify-center cursor-pointer gap-2 "}
                                onClick = {async () => {
                                    setIsOpen(false)
                                    await router.push({
                                        pathname: '/dashboard/users',
                                    })
                                }}>
                               <p className = {"b1"}>متوجه شدم</p>
                               <ArrowBackRoundedIcon/>
                           </div>}
                />
            }
            {
                role === "توانیر" &&
                <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} title = {editSuccessModal.title}
                       body = {editSuccessModal.body} type = {1}
                       CTA = {
                           <div className = {"flex flex row items-center justify-center cursor-pointer gap-2 "}
                                onClick = {async () => {
                                    setIsOpen(false)
                                    await router.push({
                                        pathname: '/dashboard/users',
                                    })
                                }}>
                               <p className = {"b1"}>متوجه شدم</p>
                               <ArrowBackRoundedIcon/>
                           </div>}
                />
            }

        </div>

    )
}