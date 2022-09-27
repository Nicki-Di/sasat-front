import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import NewTJUserContainer from "../../../../components/Users/NewTJUserContainer";

export default function newTJUser() {
    const userState = useSelector(state => state.currentUserReducer);
    const previewUser = useSelector(state => state.usersReducer)[0]
    const breadcrumb = [
        {name: 'مدیریت کاربران', url: "/dashboard/users"},
        {name: 'فرم تعریف کاربر جدید', url: ""},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <DashboardMain>
                <NewTJUserContainer previewUser={previewUser}/>
            </DashboardMain>
        </div>
    )
}