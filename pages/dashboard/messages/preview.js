import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SingleMessage from "../../../components/Message/SingleMessage";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

export default function preview() {
    const userState = useSelector(state => state.currentUserReducer);
    const previewMessage = useSelector(state => state.messagesReducer)[0]

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SingleMessage isPreview = {true}
                               message = {previewMessage}/>
            </DashboardMain>

        </div>
    )
}