import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

export const Root = () => {
    return (
        <>
            <Header />
            <div className="content-main">
                <Outlet />
            </div>
        </>
    )
}
