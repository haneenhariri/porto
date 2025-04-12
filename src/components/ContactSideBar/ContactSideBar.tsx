import { ContactSideBarProps } from "../../types/contact";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const PageSideBar = ({ sections }: ContactSideBarProps) => {
  return (
    <div className="border-r border-border">
      {sections.map((section, index) => (
        <DropdownMenu
          key={index}
          title={section.title}
          content={section.content}
          icon={section.icon}
        />
      ))}
    </div>
  );
};

export default PageSideBar;
