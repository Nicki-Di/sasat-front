import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import NewMessageContainer from "../../../components/Message/NewMessageContainer";
import {useSelector} from "react-redux";

export default function newMessage() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <NewMessageContainer/>
        </div>
    )
}