import CodeBox from "../components/CodeBox/CodeBox";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactLayout from "../components/layout/ContactLayout";

const ContactMe = () => {
  return (
    <div className="contact-me flex grow">
      <ContactLayout>
        <div className="left-part w-full px-6 md:w-[42.99%] h-full flex justify-center items-center">
          <ContactForm />
        </div>
        <div className="right-part hidden xl:block w-[57.01%] h-full border-l border-border">
          <CodeBox />
        </div>
      </ContactLayout>
    </div>
  );
};

export default ContactMe;
