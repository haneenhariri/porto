import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const codeString = `
const button = document.querySelector('#sendBtn');

const message = {
  name: "Jonathan Davis",
  email: "jonathan-davis@gmail.com",
  message: "Hey! Just checked",
  date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
  form.send(message);
})
`;

const CodeBox = () => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <pre className="rounded-md overflow-auto bg-transparent p-4 text-sm">
      <code ref={codeRef} className="language-javascript bg-transparent">
        {codeString}
      </code>
    </pre>
  );
};

export default CodeBox;
