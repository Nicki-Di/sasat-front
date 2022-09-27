import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import NewMessageContainer from "../../../components/Message/NewMessageContainer";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

export default function newMessage() {
    const userState = useSelector(state => state.currentUserReducer);
    const breadcrumb = [
        {name: 'پیام ها', url: "/dashboard/messages"},
        {name: 'ایجاد پیام جدید', url: ""},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <NewMessageContainer/>
            </DashboardMain>
        </div>
    )
}