import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SettingContainer from "../../../components/TJ/SettingContainer";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";
import Access from "../../../components/Setting/Access";

export default function setting() {
    const userState = useSelector(state => state.currentUserReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SettingContainer userState={userState}/>
                {
                    userState.role === "توانیر" && <Access/>
                }
            </DashboardMain>
        </div>
    )
}