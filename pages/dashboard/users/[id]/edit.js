import {useSelector} from "react-redux";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import EditTZ from "../../../../components/Users/EditTZ";
import {useRouter} from "next/router";

export default function edit() {
    const userState = useSelector(state => state.currentUserReducer);
    const router = useRouter();
    const id = router.query?.id
    const editUser = useSelector(state => state.usersReducer)[0]
    const originalUser = useSelector(state => state.usersReducer)[id]
    // TV:
    const user = {name: editUser?.name || originalUser?.name, load: editUser?.load || originalUser?.load}
    const breadcrumb = [
        {name: 'مدیریت کاربران', url: "/dashboard/users"},
        {name: 'ویرایش کاربر توزیع کننده', url: ""},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <EditTZ id={id} editUser={user}/>
            </DashboardMain>
        </div>
    )
}