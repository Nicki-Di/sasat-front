import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SettingContainer from "../../../components/TJ/SettingContainer";
import {useSelector} from "react-redux";

export default function setting() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <SettingContainer/>
        </div>
    )
}