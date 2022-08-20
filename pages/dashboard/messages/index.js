import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import MessagesContainer from "../../../components/Message/MessagesContainer";
import {useSelector} from "react-redux";

export default function messages() {
    const userState = useSelector(state => state.userReducer);

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <MessagesContainer/>
        </div>
    )
}