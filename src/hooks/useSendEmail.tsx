import { useState } from "react";
import emailjs from "emailjs-com";

export const useSendEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

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
