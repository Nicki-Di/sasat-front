import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SingleMessage from "../../../components/Message/SingleMessage";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";
import SingleUser from "../../../components/TJ_Users/SingleUser";

export default function message() {
    const router = useRouter()
    const {id} = router.query
    const userState = useSelector(state => state.userReducer);
    const user = useSelector(state => state.tjUsersReducer)[id]

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SingleUser isPreview = {false} user = {user}/>
            </DashboardMain>
        </div>
    )
}