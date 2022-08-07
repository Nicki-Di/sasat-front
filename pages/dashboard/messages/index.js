import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import MessagesContainer from "../../../components/Message/MessagesContainer";

export default function dashboard() {
    return (
        <div>
            <DashboardLayout/>
            <MessagesContainer/>
        </div>
    )
}