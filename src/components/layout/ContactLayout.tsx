import { contactsSidebarSections} from "../../data/contact";
import { ContactLayoutProps } from "../../types/contact";
import PageSideBar from "../ContactSideBar/ContactSideBar";


const ContactLayout = ({ children }: ContactLayoutProps) => {

  return (
    <div className="contact-layout flex flex-col md:flex-row w-full">
      <PageSideBar sections={contactsSidebarSections} />
      <div className="contact-body flex flex-col grow w-full">
        <div className="border-b border-border h-12 hidden md:block"></div>
        <div className="w-full flex flex-wrap grow justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
