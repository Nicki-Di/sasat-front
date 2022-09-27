import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import MainPage from "../../components/Common/MainPage";
import {useSelector} from "react-redux";

export default function dashboard() {
    const userState = useSelector(state => state.currentUserReducer);
    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <MainPage userState = {userState}/>
        </div>
    )
}