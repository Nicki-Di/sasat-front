import Auth from "../components/Auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#FFFFFF";
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, [])
    return (
        <Auth/>
    )
}
