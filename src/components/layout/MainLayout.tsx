import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-mainLayout p-4 xl:p-[40px] lg:p-[40px]">
      <div className=" h-full grow bg-mainDiv flex flex-col border border-[#314158] rounded-[8px] relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
