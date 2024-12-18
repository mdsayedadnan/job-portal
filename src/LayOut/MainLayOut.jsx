import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheared/Navbar";
import Footer from "../Pages/Sheared/Footer";

const MainLayOut = () => {
    return (
        <div className="mx-w-7 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;