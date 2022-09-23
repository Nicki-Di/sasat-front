import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";
import NewTJUserContainer from "../../../components/TJ_Users/NewTJUserContainer";

export default function newTJUser() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <NewTJUserContainer/>
            </DashboardMain>
        </div>
    )
}