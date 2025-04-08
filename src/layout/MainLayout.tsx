import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className=" h-screen bg-mainLayout xl:p-[70px] lg:p-[50px]">
      <div className=" h-full bg-mainDiv border border-[#314158] rounded-[3px]">
        <Outlet />
      </div>
    </div>
  );
}
