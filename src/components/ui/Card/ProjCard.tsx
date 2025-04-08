import { projCardProps } from "../../../types/card";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";

export default function ProjCard({img , title , tools ,bgColor , description } : projCardProps) {
  return (
    <div className="w-max rounded-2xl border border-border ">
      <div className=" relative">
        <img src={img} alt={title} />
        <div className={` absolute top-5 p-1 rounded-sm right-5 ${bgColor} w-7 h-7 `}>
            <img src={tools} alt="tools" />
        </div>
      </div>
      <div className="flex flex-col  border-t border border-border justify-between gap-5 p-8">
        <Paragraph p={description}/>
        <Button text="view-project" style=" bg-btnProj text-btnTextProj"/>
      </div>
    </div>
  )
}
