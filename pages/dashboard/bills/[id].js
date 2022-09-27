import {useRouter} from "next/router";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useSelector} from "react-redux";
import Bill from "../../../components/Bill/Bill";
import TZActiveBill from "../../../components/Bill/TZActiveBill";

export default function bill() {
    const router = useRouter()
    const {id} = router.query
    const userState = useSelector(state => state.currentUserReducer);
    const billInfo = useSelector(state => state.billsReducer)[id]

    const breadcrumb = [
        {name: 'مدیریت قبض ها', url: "/dashboard/bills"},
        {name: `قبض تجمیع کننده ${billInfo?.userName}`, url: "#"},
    ];
    return (
        <div>
            <DashboardLayout userState = {userState} breadcrumb={breadcrumb}/>
            <main className = {"w-[87%] mr-auto p-8 flex flex-col gap-16 items-center "}>
                {
                    (billInfo?.billStatus ===  "قبض در انتظار صدور" && userState.role === "تجمیع کننده") ? <TZActiveBill billInfo={billInfo}/> : <Bill info = {billInfo} lastBill = {false}/>
                }

            </main>

        </div>
    )
}