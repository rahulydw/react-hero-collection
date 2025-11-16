import { Outlet } from "react-router-dom";
import FloatingNav from "./FloatingNav";

export default function Layout() {
    return (
        <>
            <FloatingNav />
            <Outlet />
        </>
    );
}
