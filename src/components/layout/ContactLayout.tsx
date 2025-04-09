import ContactSideBar from "../ContactSideBar/ContactSideBar";

const ContactLayout = ({ children }) => {
  return (
    <div className="contact-layout flex flex-col md:flex-row w-full">
      <ContactSideBar />
      <div className="contact-body flex flex-col w-full">
        <div className="border-b border-border h-12 hidden md:block"></div>
        <div className="w-full flex flex-wrap grow justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
