import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as usersActions from "../../../store/slices/users";
import {tjOptions, noUserModal, tzOptions} from '/utils/texts/usersTable'
import Table from "../../../components/Table/Table";
import Modal from "../../../components/Common/Modal";
import AddButton from "../../../components/Buttons/AddButton";
import DashboardMain from "../../../components/Dashboard/DashboardMain";

const tjUsersArray = [
    {
        name: "تجمیع شماره ۱۰",
        formula: "D-12",
        penalty: 12000,
        reward: 13000,
        contractNumber: "41546",
        username: "Taj341",
        email: "Tajmi123@gmail.com",
        fileName: "contract.pdf",
        p1: "14",
        p2: "56",
        feeders: ["فیدر 1"],
        load: 700000
    },
    {
        name: "تجمیع شماره ۱۱",
        formula: "D-15",
        penalty:  9000,
        reward: 11000,
        contractNumber: "3556",
        username: "Taj123",
        email: "Tajmi42123@gmail.com",
        fileName: "contract2.pdf",
        p1: "15",
        p2: "526",
        feeders: ["فیدر 1"],
        load: 800000
    },
]

const tzUsersArray = [
    {
        name: "منطقه شهر تهران",
        load: 700000,
        username: "Tozi123",
        email: "Tozi123@gmail.com",
        TJs: ["منطقه 1", "منطقه 2"],
    },
    {
        name: "منطقه استان زنجان",
        load: 800000,
        username: "Tozi456",
        email: "Tozi456@gmail.com",
        TJs: ["منطقه 1", "منطقه 2"],
    },
]


const usersTable = (array, slice) => {
    const usersTableArray = []
    for (let item of array) {
        usersTableArray.push(Object.fromEntries(Object.entries(item).slice(0, slice)))
    }
    return usersTableArray
}


export default function users() {
    const dispatcher = useDispatch()
    const [modal, setModal] = useState(tjUsersArray.length === 0);
    const tjUsersTableArray = usersTable(tjUsersArray, 5)
    const tzUsersTableArray = usersTable(tzUsersArray, 2)
    const userState = useSelector(state => state.currentUserReducer);

    useEffect(() => {
        if (userState.role === "توزیع کننده")
            dispatcher(usersActions.usersInitialized(tjUsersArray))
        if (userState.role === "توانیر")
            dispatcher(usersActions.usersInitialized(tzUsersArray))
    }, [])


    return (
        <div>
            <DashboardLayout userState = {userState}/>
            <DashboardMain>
                <div className = {"flex flex-row justify-between items-center p-8 "}>
                    <p className = {"h2 text-s-10"}>مدیریت کاربران</p>
                    {
                        (userState.role === "توزیع کننده") &&
                        <AddButton slug = {`${tjOptions.slug}/TJ/new`} text = {tjOptions.button}/>
                    }
                </div>
                {
                    (userState.role === "توزیع کننده") &&
                    <>
                        <Table options = {tjOptions} data = {tjUsersTableArray}/>
                        <Modal isOpen = {modal} setIsOpen = {setModal} title = {noUserModal.title}
                               body = {noUserModal.body} type = {2} CTA = {
                            <AddButton slug = {`${tjOptions.slug}/TJ/new`} text = {tjOptions.button}/>
                        }/>
                    </>
                }
                {
                    (userState.role === "توانیر") &&
                    <Table options = {tzOptions} data = {tzUsersTableArray}/>
                }

            </DashboardMain>

        </div>
    )
}