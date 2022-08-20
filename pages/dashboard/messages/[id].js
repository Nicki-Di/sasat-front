import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SingleMessage from "../../../components/Message/SingleMessage";
import {useSelector} from "react-redux";

export default function message() {
    const router = useRouter()
    const {id} = router.query
    const userState = useSelector(state => state.userReducer);
    const message = useSelector(state => state.messagesReducer)[id]

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <SingleMessage type = {2} message = {message}/>
        </div>
    )
}