import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import SingleUser from "../../../../components/Users/SingleUser";

export default function preview() {
    const userState = useSelector(state => state.currentUserReducer);
    const previewUser = useSelector(state => state.usersReducer)[0]
    const breadcrumb = [
        {name: 'مدیریت کاربران', url: "/dashboard/users"},
        {name: 'فرم تعریف کاربر جدید', url: "/dashboard/users/TJ/new"},
        {name: 'تایید اطلاعات ثبت شده', url: ""},
    ];
    console.log(previewUser)
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <SingleUser isPreview = {true}
                            user = {previewUser}
                            userState = {userState}
                />
            </DashboardMain>

        </div>
    )
}