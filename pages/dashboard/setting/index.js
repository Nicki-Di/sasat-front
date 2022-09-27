import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SettingContainer from "../../../components/TJ/SettingContainer";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

export default function setting() {
    const userState = useSelector(state => state.currentUserReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SettingContainer userState={userState}/>
            </DashboardMain>
        </div>
    )
}