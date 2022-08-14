import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SingleMessage from "../../../components/Message/SingleMessage";
import {useSelector} from "react-redux";

export default function preview() {
    const router = useRouter()
    const preview = useSelector(state => state.messagesReducer)[0]

    return (
        <div>
            <DashboardLayout/>
            <SingleMessage type = {1}
                           message = {preview}/>
        </div>
    )
}