import { CodeBoxProps } from "../../types/contact";
import { formatDate } from "../../utils/formatDate";

const CodeBox = ({ formData }: CodeBoxProps) => {
  const { name, email, message } = formData;

  return (
    <pre className="text-sm text-white font-mono rounded-md overflow-auto p-4 leading-relaxed">
      <code className="block space-y-1">
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">sendEmail</span>{" "}
          = <span className="text-purple-400">async</span>{" () => {"}
        </div>
        <div className="pl-4">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">p</span> = {"{"}
        </div>
        <div className="pl-8">
          <span className="text-green-400">from_name</span>:{" "}
          <span className="text-yellow-300">"{name || 'Name'}"</span>,
        </div>
        <div className="pl-8">
          <span className="text-green-400">from_email</span>:{" "}
          <span className="text-yellow-300">"{email || 'email'}"</span>,
        </div>
        <div className="pl-8">
          <span className="text-green-400">time</span>:{" "}
          <span className="text-yellow-300">"{formatDate(new Date())}"</span>,
        </div>
        <div className="pl-8">
          <span className="text-green-400">message</span>:{" "}
          <span className="text-yellow-300">"{message || 'Message'}"</span>
        </div>
        <div className="pl-4">{"};"}</div>
        <div className="pl-4 text-blue-300">setIsSending(true);</div>
        <div className="pl-4">
          <span className="text-purple-400">try</span> {"{"}{" "}
          <span className="text-blue-300">await</span> emailjs.send(...p);
          <span className="text-blue-300"> setIsSent(true);</span> {"}"}
        </div>
        <div className="pl-4">
          <span className="text-purple-400">catch</span> (e) {"{"}
          <span className="text-blue-300"> alert</span>(
          <span className="text-yellow-300">"خطأ"</span>);
          <span className="text-blue-300"> console.log</span>(e); {"}"}
        </div>
        <div className="pl-4">
          <span className="text-purple-400">finally</span> {"{"}
          <span className="text-blue-300"> setIsSending</span>(
          <span className="text-yellow-300">false</span>); {"}"}
        </div>
        <div>{"}"}</div>
      </code>
    </pre>
  );
};

export default CodeBox;
