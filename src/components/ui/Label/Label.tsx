import { labelProps } from "../../../types/labels";

export default function Label({htmlFor , text} :labelProps) {
  return (
    <label className=" text-label  text-base leading-6 font-normal" htmlFor={htmlFor}>_{text}:</label>
  )
}
