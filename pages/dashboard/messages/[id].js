import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SingleMessage from "../../../components/Message/SingleMessage";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

export default function message() {
    const router = useRouter()
    const {id} = router.query
    const userState = useSelector(state => state.currentUserReducer);
    const message = useSelector(state => state.messagesReducer)[id]

    const breadcrumb = [
        {name: 'پیام ها', url: "/dashboard/messages"},
        {name: ' پیام', url: "#"},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <SingleMessage isPreview = {false} message = {message}/>
            </DashboardMain>
        </div>
    )
}