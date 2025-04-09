import { useState } from "react";
import emailjs from "emailjs-com";

export const useSendEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    setIsSending(true);
    try {
      await emailjs.send(
        "service_wo2tkc5",
        "template_kvi8tf8",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSent(true);
    } catch (error) {
      alert("حدث خطأ أثناء الإرسال ❌");
      console.log(error)
    } finally {
      setIsSending(false);
    }
  };

  const reset = () => setIsSent(false); 
  
  return { sendEmail, isSending, isSent, reset };
};
