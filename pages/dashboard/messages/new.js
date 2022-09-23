import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import NewMessageContainer from "../../../components/Message/NewMessageContainer";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

export default function newMessage() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <NewMessageContainer/>
            </DashboardMain>
        </div>
    )
}