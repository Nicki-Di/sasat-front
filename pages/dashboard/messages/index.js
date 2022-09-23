import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as messagesActions from "../../../store/slices/messages";
import {options} from '/utils/texts/messagesTable'
import Table from "../../../components/Table/Table";
import DashboardMain from "../../../components/Dashboard/DashboardMain";
const messagesArray = [
    {
        title: 'اعتراض به قبض',
        date: '۱۴۰۱/۰۵/۰۵',
        sender: 'توزیع کننده منطقه تهران',
        receivers: ["تجمیع کننده منطقه 1 "],
        status: "دیده شده",
        text: "متن ۱"
    },
    {
        title: 'اعتراض به قبض',
        date: '۱۴۰۱/۰۵/۰۵',
        sender: 'توزیع کننده منطقه تهران',
        receivers: ["تجمیع کننده منطقه 1 "],
        status: "جدید",
        text: "متن ۲"
    },
]

export default function messages() {
    const dispatcher = useDispatch()

    const userState = useSelector(state => state.userReducer);
    useEffect(() => {
        dispatcher(messagesActions.messagesInitialized(messagesArray))
    }, [])

    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <Table options={options} data={messagesArray}/>
            </DashboardMain>
        </div>
    )
}