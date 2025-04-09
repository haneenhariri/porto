import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Label from "../ui/Label/Label";
import TextArea from "../ui/TextArea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [isSending, setIsSending] = useState(false);

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

    setIsSending(true);

    emailjs
      .send(
        "service_wo2tkc5", // 👈 من لوحة EmailJS
        "template_kvi8tf8", // 👈 من قالب الرسالة
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "vhWYZuYls8m9w9FsF" // 👈 من حسابك
      )
      .then(() => {
        alert("تم إرسال الرسالة بنجاح ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("حدث خطأ أثناء الإرسال ❌");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form
      className="contact-form flex flex-col gap-6 max-w-[372px]"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <Label text="_name" htmlFor="name" />
        <Input
          type="text"
          id="name"
          plac="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Label text="_email" htmlFor="email" />
        <Input
          type="text"
          id="email"
          plac="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Label text="_message" htmlFor="message" />
        <TextArea
          plac="Your Message"
          id="message"
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
