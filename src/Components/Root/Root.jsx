import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster />
    </div>
  )
}

export default Root