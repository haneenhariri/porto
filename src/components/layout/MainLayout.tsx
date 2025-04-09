import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div className=" h-screen bg-mainLayout p-4 xl:p-[70px] lg:p-[50px]">
      <div className=" h-full bg-mainDiv border border-[#314158] rounded-[8px] relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
