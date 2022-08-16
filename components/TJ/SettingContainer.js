import Row from "../Setting/Row";
import {billFormula, billTariff, billContract, billDuty} from "../../utils/texts/info";
import SettingHeader from "../Common/SettingHeader";
import {useSelector} from "react-redux";
import SettingChangeable from "../Common/SettingChangeable";
import {useState} from "react";

const formula = ["فرمول D12", "14", "56"]
const tariff = ["300,000 ریال", "600,000 ریال"]
const contract = ["454323456", "gharardad tozi 1"]
const duty = ["فیدر 1  فیدر 2", "700,000 MW"]

export default function SettingContainer() {
    const userState = useSelector(state => state.userReducer);
    const [edit, setEdit] = useState(false)


    return (
        <main className = "w-[87%] mr-auto p-8 flex flex-col gap-16 items-center">
            <div className = "flex flex-col w-full p-8 bg-s-100 shadow rounded-md gap-8">
                <SettingHeader userState = {userState} edit={edit} setEdit = {setEdit}/>
                <SettingChangeable userState = {[userState.username, userState.email, userState.password]}
                                   edit = {edit}/>
                {
                    /* row 1 */
                    !edit && <Row keys = {billFormula} values = {formula}/>
                }

                {
                    /* row 2 */
                    !edit && <Row keys = {billTariff} values = {tariff}/>
                }

                {
                    /* row 3 */
                    !edit && <Row keys = {billContract} values = {contract} downloadButton = {true}/>
                }

                {
                    /* row 4 */
                    !edit && <Row keys = {billDuty} values = {duty} lastRow = {true}/>
                }

            </div>
        </main>
    )
}