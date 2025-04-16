import { aboutMeSidebarSections } from "../../data/sidebar";
import { AboutMeLayoutProps } from "../../types/about-me";
import PageSideBar from "../PageSideBar/PageSideBar";

const AboutMeLayout = ({ children }: AboutMeLayoutProps) => {
  return (
    <div className="about-me-layout grow h-full flex flex-col md:flex-row w-full">
      <PageSideBar sections={aboutMeSidebarSections} />
      <div className="about-me-body flex flex-col grow w-full">
        <div className="border-b border-border h-12 hidden md:block"></div>
        <div className="w-full flex flex-wrap grow justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutMeLayout;
