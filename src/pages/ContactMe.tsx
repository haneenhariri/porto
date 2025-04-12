import { useState } from "react";
import CodeBox from "../components/CodeBox/CodeBox";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactLayout from "../components/layout/ContactLayout";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="contact-me flex grow">
      <ContactLayout>
        <div className="left-part w-full h-full py-6 lg:py-0 px-6 xl:w-[42.99%] flex justify-center items-center">
          <ContactForm formData={formData} setFormData={setFormData} />
        </div>
        <div className="right-part hidden xl:block w-[57.01%] h-full border-l border-border">
          <CodeBox formData={formData} />
        </div>
      </ContactLayout>
    </div>
  );
};

export default ContactMe;
