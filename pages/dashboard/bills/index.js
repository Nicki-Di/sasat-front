import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import BillsContainer from "../../../components/Bill/BillsContainer";
import {useSelector} from "react-redux";

export default function bills() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <BillsContainer/>
        </div>
    )
}