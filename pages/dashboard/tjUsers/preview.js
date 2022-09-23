import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../components/Dashboard/DashboardMain";
import SingleUser from "../../../components/TJ_Users/SingleUser";

export default function preview() {
    const userState = useSelector(state => state.userReducer);
    const previewUser = useSelector(state => state.tjUsersReducer)[0]
    console.log(previewUser)

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <SingleUser isPreview = {true}
                            user = {previewUser}/>
            </DashboardMain>

        </div>
    )
}