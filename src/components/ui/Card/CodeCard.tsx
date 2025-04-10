import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import 'highlight.js/styles/atom-one-dark.css'; 

export default function CodeCard({ code }: { code: string }) {
    const codeRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (codeRef.current) {
          hljs.highlightElement(codeRef.current);
        }
      }, []);
  return (
    <div className=" p-4 w-full border  border-border rounded-2xl text-sm overflow-hidden bg-mainLayout ">
      <pre>
        <code ref={codeRef} className="language-typescript !bg-mainLayout">
          {code}
        </code>
      </pre>
    </div>
  )
}
