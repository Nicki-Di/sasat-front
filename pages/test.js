import {useEffect} from "react";
import * as actions from "../store/bugs"
import {useDispatch, useSelector} from "react-redux";

export default function Test() {
    const dispatcher = useDispatch()
    const bugs = useSelector(state => state.bugsReducer)

    useEffect(() => {
        console.log("bugs")
    }, []);

    return (
        <div>
            <div onClick = {() => {
                dispatcher(actions.bugAdded({title: "hi"}))
            }} className = {"h1"}>
                add bug!
            </div>

            <div onClick = {() => {
                dispatcher(actions.bugResolved({id: 0}))
            }}>
                resolve bug!
            </div>
            <ul>
                {
                    bugs.map(bug => <li key = {bug.id}>{`${bug.id}, ${bug.title}`}</li>)
                }
            </ul>
        </div>
    )
}
