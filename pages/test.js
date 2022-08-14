import * as messagesActions from "../store/slices/messages"
import {useDispatch} from "react-redux";

export default function Test() {
    const dispatcher = useDispatch()

    return (
        <div onClick={()=> dispatcher(messagesActions.messagedAdded(    {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            role: 'Admin',
            email: 'jane.co9oper@example.com',
            status: "دیده شده"
        }))}>click me</div>
    )
}
