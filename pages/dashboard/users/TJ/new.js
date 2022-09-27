import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import DashboardMain from "../../../../components/Dashboard/DashboardMain";
import NewTJUserContainer from "../../../../components/Users/NewTJUserContainer";

export default function newTJUser() {
    const userState = useSelector(state => state.currentUserReducer);
    const previewUser = useSelector(state => state.usersReducer)[0]

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <NewTJUserContainer previewUser={previewUser}/>
            </DashboardMain>
        </div>
    )
}