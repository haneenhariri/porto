import { CodeBoxProps } from "../../types/contact";
import { formatDate } from "../../utils/formatDate";

const CodeBox = ({ formData }: CodeBoxProps) => {
  const { name, email, message } = formData;

  return (
    <pre className="rounded-md overflow-auto p-4 text-sm text-white font-mono leading-relaxed">
      <code className="bg-transparent block">
        <div className="mb-6">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-[#615fff]">sendEmail</span> ={" "}
          <span className="text-purple-400">async</span> (
          <span className="text-[#615fff]">formData</span>:{" "}
          <span className="text-[#615fff]">{"{"}</span>
          <span className="block"></span>
          <span className="text-[#615fff]">name</span>:{" "}
          <span className="text-[#ffb86a]">string</span>,
          <span className="block"></span>
          <span className="text-[#615fff]">email</span>:{" "}
          <span className="text-[#ffb86a]">string</span>,
          <span className="block"></span>
          <span className="text-[#615fff]">message</span>:{" "}
          <span className="text-[#ffb86a]">string</span>
          <span className="block"></span>
          <span className="text-[#615fff]">{"}"}</span>
          ) =&gt; {"{"}
        </div>
        
        <div className="pl-4">
          <span className="text-[#615fff]">const</span>{" "}
          <span className="text-[#615fff]">templateParams</span> ={" "}
          <span className="text-[#615fff]">{"{"}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#615fff]">from_name</span>:{" "}
          <span className="text-[#ffb86a]">{name || "Your Name"}</span>,
        </div>
        <div className="pl-8">
          <span className="text-[#615fff]">from_email</span>:{" "}
          <span className="text-[#ffb86a]">{email || "you@example.com"}</span>,
        </div>
        <div className="pl-8">
          <span className="text-[#615fff]">time</span>:{" "}
          <span className="text-[#ffb86a]">{formatDate(new Date())}</span>,
        </div>
        <div className="pl-8">
          <span className="text-[#615fff]">message</span>:{" "}
          <span className="text-[#ffb86a]">{message || "Your message here..."}</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">{"}"}</span>;
        </div>

        <div className="mt-6">
          <span className="text-[#615fff]">setIsSending</span>(<span className="text-[#ffb86a]">true</span>);
        </div>

        <div>
          <span className="text-purple-400">try</span>{" {"}
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">await</span>{" "}
          <span className="text-[#615fff]">emailjs.send</span>(
          <span className="text-[#ffb86a] block">import.meta.env.VITE_SERVICE_ID,</span>
          <span className="text-[#ffb86a] block">import.meta.env.VITE_TEMPLATE_ID,</span>
          <span className="text-[#615fff] block">templateParams,</span>
          <span className="text-[#ffb86a] block">import.meta.env.VITE_EMAILJS_PUBLIC_KEY</span>
          );
        </div>

        <div>
          <span className="text-[#615fff]">setIsSent</span>(<span className="text-[#ffb86a]">true</span>);
        </div>

        <div>
          <span className="text-purple-400">{`}`}&nbsp;</span> 
          <span className="text-purple-400">catch</span>{" (error) {"}
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">alert</span>(<span className="text-[#ffb86a]">"حدث خطأ أثناء الإرسال ❌"</span>);
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">console.log</span>(<span className="text-[#ffb86a]">error</span>);
        </div>

        <div>
          <span className="text-purple-400">{`}`}</span> 
          <span className="text-[#615fff]">finally</span>{" {"}
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">setIsSending</span>(<span className="text-[#ffb86a]">false</span>);
        </div>
        <div>{"}"}</div>
      </code>
    </pre>
  );
};

export default CodeBox;
