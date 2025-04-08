import { btnProps } from "../../../types/button";

export default function Button({text,style,onClick} : btnProps) {
  return (
    <button className={`${style} py-2.5 px-3 cursor-pointer rounded-lg w-max`}  onClick={onClick}>
      {text}
    </button>
  )
}
