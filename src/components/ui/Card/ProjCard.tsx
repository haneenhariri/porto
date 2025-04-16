import { Link } from "react-router-dom";
import { projCardProps } from "../../../types/card";
import Paragraph from "../Paragraph/Paragraph";

export default function ProjCard({img , title , tools ,bgColor , description ,projectLink } : projCardProps) {
  
  return (
    <div className=" overflow-hidden rounded-2xl border border-border ">
      <div className=" w-full relative">
        <img src={img} alt={title} className=" w-full h-auto" />
        <div className={` absolute top-5 p-1 rounded-sm right-5 bg-[${bgColor}]   w-7 h-7 `}>
            <img src={tools} alt="tools" />
        </div>
      </div>
      <div className="flex flex-col  border-t border border-border justify-between gap-5 p-8">
        <Paragraph p={description}/>
        <Link className="bg-btnProj text-btnTextProj py-2.5 px-3 cursor-pointer rounded-lg w-max" to={projectLink}>view-project</Link>
      </div>
    </div>
  )
}
