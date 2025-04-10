import { CodeBoxProps } from "../../types/contact";

const CodeBox = ({ formData }: CodeBoxProps) => {
  const { name, email, message } = formData;

  return (
    <pre className="rounded-md overflow-auto p-4 text-sm text-white font-mono leading-relaxed">
      <code className="bg-transparent block">
        <div className="mb-6">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-[#615fff]">button</span> ={" "}
          <span className="text-[#615fff]">document</span>.
          <span className="text-[#615fff]">querySelector</span>(
          <span className="text-[#ffb86a]">'#sendBtn'</span>);
        </div>

        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-[#615fff]">message</span> = {"{"}
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">name</span>:{" "}
          <span className="text-[#ffb86a]">"{name || "Your Name"}"</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">email</span>:{" "}
          <span className="text-[#ffb86a]">"{email || "you@example.com"}"</span>
          ,
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">message</span>:{" "}
          <span className="text-[#ffb86a]">
            "{message || "Your message here..."}"
          </span>
          ,
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">date</span>:{" "}
          <span className="text-[#ffb86a]">"{new Date().toDateString()}"</span>
        </div>
        <div className="mb-6">{"}"}</div>

        <div>
          <span className="text-[#615fff]">button</span>.
          <span className="text-[#615fff]">addEventListener</span>(
          <span className="text-[#ffb86a]">'click'</span>, () =&gt; {"{"}
        </div>
        <div className="pl-4">
          <span className="text-[#615fff]">form</span>.
          <span className="text-[#615fff]">send</span>(
          <span className="text-[#615fff]">message</span>);
        </div>
        <div>{"})"}</div>
      </code>
    </pre>
  );
};

export default CodeBox;
