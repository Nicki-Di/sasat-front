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

export default function SettingContainer({userState}) {
    const [edit, setEdit] = useState(false)


    return (
            <div className = "flex flex-col gap-8 p-8 ">
                <SettingHeader userState = {userState} edit = {edit} setEdit = {setEdit}/>
                <SettingChangeable userState = {[userState.username, userState.email, userState.password]}
                                   edit = {edit} lastRow = {userState.role !== "تجمیع کننده"}/>
                {
                    /* row 1 */
                    userState.role === "تجمیع کننده" && !edit && <Row keys = {billFormula} values = {formula}/>
                }

                {
                    /* row 2 */
                    userState.role === "تجمیع کننده" && !edit && <Row keys = {billTariff} values = {tariff}/>
                }

                {
                    /* row 3 */
                    userState.role === "تجمیع کننده" && !edit &&
                    <Row keys = {billContract} values = {contract} downloadButton = {true}/>
                }

                {
                    /* row 4 */
                    userState.role === "تجمیع کننده" && !edit &&
                    <Row keys = {billDuty} values = {duty} lastRow = {true}/>
                }

            </div>
    )
}