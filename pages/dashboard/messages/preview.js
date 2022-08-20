import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SingleMessage from "../../../components/Message/SingleMessage";
import {useSelector} from "react-redux";

export default function preview() {
    const userState = useSelector(state => state.userReducer);
    const preview = useSelector(state => state.messagesReducer)[0]

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <SingleMessage type = {1}
                           message = {preview}/>
        </div>
    )
}