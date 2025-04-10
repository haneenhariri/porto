import { btnProps } from "../../../types/button";

export default function Button({ text, style, onClick, type }: btnProps) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${style} py-2.5 px-3 cursor-pointer rounded-lg w-max`}
    >
      {text}
    </button>
  );
}
