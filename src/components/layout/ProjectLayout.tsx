import { useState } from "react";
import { projectsSidebarSections } from "../../data/sidebar";
import PageSideBar from "../PageSideBar/PageSideBar";
import { ProjectData } from "../../data/Project";
import ProjCard from "../ui/Card/ProjCard";

export default function ProjectLayout() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['React']);

  const handleFilterChange = (filterText: string, isChecked: boolean) => {
    setSelectedFilters(prev => 
      isChecked 
        ? [...prev, filterText] 
        : prev.filter(item => item !== filterText)
    );
  };

  // إعداد السايدبار مع معالجات التغيير
  const sectionsWithHandlers = projectsSidebarSections.map(section => ({
    ...section,
    content: section.content.map(item => ({
      ...item,
      onChange: (checked: boolean) => handleFilterChange(item.text, checked)
    }))
  }));


  const filteredProjects = selectedFilters.length === 0
    ? ProjectData
    : ProjectData.filter(project =>
        selectedFilters.every(filter => 
          project.tools.map(tool => tool.toLowerCase()).includes(filter.toLowerCase())
        )
      );

  return (
    <div className="about-me-layout grow flex h-full w-full">
      <PageSideBar sections={sectionsWithHandlers} />
      
      <div className="!w-full">
        <div className="px-6 py-2 border-b h-12 border-border flex items-center gap-2">
          {selectedFilters.length > 0 ? (
            <>
              {selectedFilters.map((filter, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {filter}
                </span>
              ))}
            </>
          ) : ('')}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-2">
          {filteredProjects.map((p, i) => (   
            <ProjCard 
              key={i}
              img={p.img}
              title={p.projectName}
              projectLink={p.projectLink}
              description={p.projDescription}
              tools={p.iconTools}
              bgColor={p.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}