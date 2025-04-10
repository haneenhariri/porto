import { useState } from "react";
import emailjs from "emailjs-com";
import { formatDate } from "../utils/formatDate";

export const useSendEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      time: formatDate(new Date()),
      message: formData.message,
    };
    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSent(true);
    } catch (error) {
      alert("حدث خطأ أثناء الإرسال ❌");
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  const reset = () => setIsSent(false);

  return { sendEmail, isSending, isSent, reset };
};
