import Login from "./Login";
import Forget from "./Forget";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as authActions from "../../store/slices/auth";

export default function Auth() {
    const authState = useSelector(state => state.authReducer);
    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(authActions.loginSet())
    }, [])
    return (
        <div className = {"flex flex-row"}>
            {
                authState.login ? <Login/> : <Forget/>
            }
            <div className = {"basis-2/3"}>
                <img src = {"/auth/login-bg.jpg"} alt = {"bg"} className = {"h-screen w-full"}/>
            </div>
        </div>
    )
}
