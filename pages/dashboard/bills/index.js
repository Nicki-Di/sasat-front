import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import BillsContainer from "../../../components/Bill/BillsContainer";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

export default function bills() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <BillsContainer userState = {userState}/>
            </DashboardMain>
        </div>
    )
}