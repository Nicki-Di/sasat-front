import {useRouter} from "next/router";
import DashboardLayout from "/components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "/components/Dashboard/DashboardMain";
import SingleUser from "/components/Users/SingleUser";

export default function message() {
    const router = useRouter()
    const {id} = router.query
    const userState = useSelector(state => state.currentUserReducer);
    const user = useSelector(state => state.usersReducer)[id]
    const breadcrumb = [
        {name: 'مدیریت کاربران', url: "/dashboard/users"},
        {name: ' کاربر', url: "#"},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <SingleUser isPreview = {false} user = {user} userState = {userState}/>
            </DashboardMain>
        </div>
    )
}