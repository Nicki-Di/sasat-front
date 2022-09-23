import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as tjUsersActions from "../../../store/slices/tjUsers";
import {options, modalTexts} from '/utils/texts/usersTable'
import Table from "../../../components/Table/Table";
import Modal from "../../../components/Common/Modal";
import AddButton from "../../../components/Buttons/AddButton";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

const usersArray = [
    {
        tjName: "تجمیع شماره ۱۰",
        formula: "D-12",
        penalty: 12000,
        reward: 13000,
        contractNumber: "41546",
    }
]

export default function users() {
    const dispatcher = useDispatch()
    const [modal, setModal] = useState(usersArray.length === 0);

    const userState = useSelector(state => state.userReducer);
    useEffect(() => {
        dispatcher(tjUsersActions.tjUsersInitialized(usersArray))
    }, [])


    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <Table options={options} data={usersArray}/>
                <Modal isOpen = {modal} setIsOpen = {setModal} title = {modalTexts.title}
                       body = {modalTexts.body} type = {2} CTA={
                    <AddButton slug={`${options.slug}/new`} text={options.button}/>
                }/>
            </DashboardMain>

        </div>
    )
}