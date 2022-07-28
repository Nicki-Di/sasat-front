import Login from "../components/Auth/Login";
import Forget from "../components/Auth/Forget";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as authActions from "../store/slices/auth";

export default function Home() {
    const authState = useSelector(state => state.authReducer);
    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(authActions.loginSet())
    }, [])
    return (
        <div>
            {
                authState.login ? <Login/> : <Forget/>
            }
        </div>
    )
}
