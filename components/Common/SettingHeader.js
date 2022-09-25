import {useSelector} from "react-redux";
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import IconButton from "../Buttons/IconButton";

export default function SettingHeader({userState, edit, setEdit}) {

    return (
        <div className = {"flex flex-row gap-12 border-b border-s-80 pb-8 items-center justify-between"}>
            <img
                className = "h-16 w-auto"
                src = "/common/person-icon.png"
                alt = "layer-icon"
            />
            <div className = {"flex flex-col gap-4 "}>
                <p className = {"h2 text-s-30"}>{userState.role}</p>
                <p className = {"h2 text-s-10"}>{userState.area}</p>
            </div>
            {
                !edit &&
                <div className = {"grow flex flex-row bg-accent-1 border-r-4 border-accent rounded gap-4 p-2 "}>
                    <HourglassBottomRoundedIcon className = {"text-accent"}/>
                    <p className = {"b1 text-s-30 "}>جهت حفظ امنیت حسابتان، لطفا نام کاربری و رمز عبور خود را تغییر
                        دهید.</p>
                </div>
            }
            {
                !edit && <IconButton className = {"bg-primary"} text = {"ویرایش اطلاعات"}
                                     icon = {<CreateRoundedIcon/>} onClick = {() => setEdit(true)}/>
            }

            {
                edit && <div
                    className = {"flex flex-row items-center justify-between w-[20vw]"}>

                    <IconButton className = {"bg-primary basis-1/2 "} text = {"تایید تغییرات"}
                                icon = {<DoneRoundedIcon/>} onClick = {() => setEdit(false)}/>

                    <IconButton className = {"basis-1/2 "} text = {"انصراف"}
                                icon = {<CloseRoundedIcon/>} onClick = {() => setEdit(false)}/>
                </div>
            }


        </div>
    )
}