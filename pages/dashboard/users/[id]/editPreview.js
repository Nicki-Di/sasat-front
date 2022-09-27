import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import SingleUser from "../../../../components/Users/SingleUser";
import {useRouter} from "next/router";

export default function editPreview() {
    const userState = useSelector(state => state.currentUserReducer);
    const router = useRouter();
    const id = router.query?.id
    const editUser = useSelector(state => state.usersReducer)[0]
    const originalUser = useSelector(state => state.usersReducer)[id]
    // TV:
    const user = {...originalUser, name: editUser?.name ?? originalUser?.name, load: editUser?.load ?? originalUser?.load}
    const breadcrumb = [
        {name: 'مدیریت کاربران', url: "/dashboard/users"},
        {name: 'ویرایش کاربر توزیع کننده', url: `/dashboard/users/${id}/edit`},
        {name: 'تایید اطلاعات ثبت شده', url: ""},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <SingleUser isPreview = {true}
                            user = {user}
                            userState = {userState}
                />
            </DashboardMain>

        </div>
    )
}