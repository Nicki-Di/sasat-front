import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import SingleUser from "../../../../components/Users/SingleUser";

export default function preview() {
    const userState = useSelector(state => state.currentUserReducer);
    const previewUser = useSelector(state => state.usersReducer)[0]

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SingleUser isPreview = {true}
                            user = {previewUser}
                            userState = {userState}
                />
            </DashboardMain>

        </div>
    )
}