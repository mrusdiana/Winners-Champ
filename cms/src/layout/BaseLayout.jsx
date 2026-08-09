import SideBar from "../components/SideBar";
import { Outlet, Navigate } from "react-router"

export default function BaseLayout() {

    if(!localStorage.access_token) {
        return <Navigate to="/login"/>
    }

    return (
        <>
        <SideBar/>
        <Outlet/>
        </>
    )
}
