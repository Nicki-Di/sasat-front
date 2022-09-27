import Link from "next/link";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import Input from "../Forms/Input";
import {useState} from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import IconButton from "../Buttons/IconButton";
import * as usersActions from "../../store/slices/users";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

export default function EditTZ({id, editUser}) {
    const [name, setName] = useState(editUser?.name ?? "")
    const [load, setLoad] = useState(editUser?.load ?? "")
    const dispatcher = useDispatch();
    const router = useRouter();

    const doneEdit = async () => {
        dispatcher(usersActions.previewUserSet({
            name,
            load

        }))
        await router.push({
            pathname: `/dashboard/users/${id}/editPreview`,
        })
    }
    return (
        <div className = {"flex flex-col p-8 gap-8 "}>
            <div className = {"relative flex flex-row text-s-10 items-center pb-8 border-b border-s-80"}>
                <Link href = {"/dashboard/users"}>
                    <a className = {"flex flex-row gap-4 "}>
                        <KeyboardReturnRoundedIcon className = {"rotate-180"}/>
                        <p className = {"b1"}>بازگشت به صفحه قبل</p>
                    </a>
                </Link>
                <p className = {"absolute right-[44%] h2 text-center"}>ویرایش کاربر توزیع کننده</p>
            </div>
            <div className = {"flex flex-col gap-6 w-64 m-auto"}>
                <div className = {"w-full"}>
                    <Input type = {"text"} title = {"نام توزیع کننده"} name = {"name"}
                           state = {name}
                           setState = {setName}
                    />
                </div>
                <div className = {"w-full"}>
                    <Input type = {"text"} title = {"کاهش بار لازم الاجرا"} name = {"load"} unit = {"MV"}
                           state = {load}
                           setState = {setLoad}
                    />
                </div>
                <IconButton
                    className = {"bg-primary w-full"}
                    text = {"تایید اطلاعات"}
                    icon = {<DoneRoundedIcon/>}
                    onClick = {doneEdit}
                />
            </div>
        </div>
    )
}