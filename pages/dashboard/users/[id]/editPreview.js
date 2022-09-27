import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import SingleUser from "../../../../components/Users/SingleUser";
import {useRouter} from "next/router";

export default function editPreview() {
    const userState = useSelector(state => state.currentUserReducer);
    const router = useRouter();
    const editUser = useSelector(state => state.usersReducer)[0]
    const originalUser = useSelector(state => state.usersReducer)[router.query?.id]
    // TV:
    const user = {...originalUser, name: editUser?.name ?? originalUser?.name, load: editUser?.load ?? originalUser?.load}

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SingleUser isPreview = {true}
                            user = {user}
                            userState = {userState}
                />
            </DashboardMain>

        </div>
    )
}