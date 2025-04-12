import { useState, useEffect } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Label from "../ui/Label/Label";
import TextArea from "../ui/TextArea";
import Success from "./Success";
import { useSendEmail } from "../../hooks/useSendEmail";
import { ContactFormProps } from "../../types/contact";


const ContactForm = ({ formData, setFormData }: ContactFormProps) => {
 
  const [isValid, setIsValid] = useState(false);
  const { sendEmail, isSending, isSent, reset } = useSendEmail(); 

  useEffect(() => {
    const { name, email, message } = formData;
    setIsValid(!!(name.trim() && email.trim() && message.trim()));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    sendEmail(formData).then(() => {
      setFormData({ name: "", email: "", message: "" });
    });
  };

  if (isSent) return <Success onReset={reset} />;

  return (
    <form
      className="contact-form flex flex-col gap-6 w- xl:max-w-[372px] shrink-0 grow"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <Label text="_name" htmlFor="name" />
        <Input
          type="text"
          id="name"
          plac="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Label text="_email" htmlFor="email" />
        <Input
          type="email"
          id="email"
          plac="Your Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Label text="_message" htmlFor="message" />
        <TextArea
          plac="Your Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        text={isSending ? "Sending..." : "submit-message"}
        style={`py-2.5 px-3 rounded-lg transition ${
          isValid ? "bg-link-active text-white" : "bg-border text-submit"
        }`}
      />
    </form>
  );
};

export default ContactForm;
