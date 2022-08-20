import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import DashboardMain from "../../components/Dashboard/DashboardMain";
import {useSelector} from "react-redux";

export default function dashboard() {
    const userState = useSelector(state => state.userReducer);
    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain userState = {userState}/>
        </div>
    )
}