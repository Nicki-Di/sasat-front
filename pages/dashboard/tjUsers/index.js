import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as tjUsersActions from "../../../store/slices/tjUsers";
import {options, noUserModal} from '/utils/texts/usersTable'
import Table from "../../../components/Table/Table";
import Modal from "../../../components/Common/Modal";
import AddButton from "../../../components/Buttons/AddButton";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

const usersArray = [
    {
        name: "تجمیع شماره ۱۰",
        formula: "D-12",
        penalty: 12000,
        reward: 13000,
        contractNumber: "41546",
        fileName: "contract.pdf",
        email: "Tajmi123@gmail.com",
        p1: "14",
        contractDate: "",
        p2 : "56",
        feeders: "فیدر 1",
        load: 700000
    }
]

const usersTableArray = [
    {
        name: "تجمیع شماره ۱۰",
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
                <div className = {"flex flex-row justify-between items-center p-8 "}>
                    <p className = {"h2 text-s-10"}>{options.title}</p>
                    <AddButton slug={`${options.slug}/new`} text={options.button}/>
                </div>
                <Table options={options} data={usersTableArray}/>
                <Modal isOpen = {modal} setIsOpen = {setModal} title = {noUserModal.title}
                       body = {noUserModal.body} type = {2} CTA={
                    <AddButton slug={`${options.slug}/new`} text={options.button}/>
                }/>
            </DashboardMain>

        </div>
    )
}