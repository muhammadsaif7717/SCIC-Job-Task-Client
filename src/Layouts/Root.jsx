
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;