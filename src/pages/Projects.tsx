import ProjCard from "../components/ui/Card/ProjCard"
import { ProjectData } from "../data/Project"

const Projects = () => {
  return (
    <div className=" grid grid-cols-4">
        {ProjectData.map((element, index) => 
        (
          <div>
          <h2> <span>Project {index+1}</span> // _{element.projectName}</h2>
          <ProjCard key={index} 
          title={element.projectName}
          img={element.img}
          projectLink={element.projectLink}
          description={element.projDescription}
          tools={element.iconTools}
          bgColor={element.bgColor} />
          </div>
        ))}
    </div>
  )
}

export default Projects