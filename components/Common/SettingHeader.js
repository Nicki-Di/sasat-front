import {useSelector} from "react-redux";
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function SettingHeader({userState, edit, setEdit}) {

    return (
        <div className = {"flex flex-row gap-12 border-b border-s-80 pb-8 items-center justify-between"}>
            <img
                className = "h-16 w-auto"
                src = "/common/person-icon.png"
                alt = "layer-icon"
            />
            <div className = {"flex flex-col gap-4 grow "}>
                <p className = {"h2 text-s-30"}>{userState.role}</p>
                <p className = {"h2 text-s-10"}>{userState.area}</p>
            </div>
            {
                !edit && <div className = {"grow flex flex-row bg-accent-1 border-r-4 border-accent rounded gap-4 p-2 "}>
                    <HourglassBottomRoundedIcon className = {"text-accent"}/>
                    <p className = {"b1 text-s-30 "}>جهت حفظ امنیت حسابتان، لطفا نام کاربری و رمز عبور خود را تغییر
                        دهید.</p>
                </div>
            }
            {
                !edit && <div
                    className = {"flex flex-row bg-primary b1 rounded p-2 gap-4 items-center justify-center cursor-pointer "}
                    onClick = {() => setEdit(true)}
                >
                    <p>ویرایش اطلاعات</p>
                    <CreateRoundedIcon/>
                </div>
            }

            {
                edit &&  <div
                    className = {"flex flex-row items-center justify-between w-[20vw]"}>
                    <div
                        className = {"basis-1/2 flex flex-row bg-primary b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}>
                        <p>تایید تغییرات</p>
                        <DoneRoundedIcon/>
                    </div>
                    <div
                        className = {"basis-1/2 flex flex-row b1 rounded py-2 gap-4 items-center justify-center cursor-pointer"}
                    onClick={() => setEdit(false)}
                    >
                        <p>انصراف</p>
                        <CloseRoundedIcon/>
                    </div>
                </div>
            }






        </div>
    )
}