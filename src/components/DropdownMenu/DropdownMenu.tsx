import { useState } from "react";
import { DropdownProps } from "../../types/Dropdown";
import { CircleArrowDown } from "lucide-react";

const DropdownMenu = ({ title, content }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col text-link">
      <button
        onClick={toggleDropdown}
        className="flex bg-border md:bg-transparent mb-1 gap-2 pl-6 py-2 w-full md:w-[291px]  h-12 text-link-white border-b border-r-0 lg:w-[330px] text-start border-border"
      >
        {
          isOpen?
          <CircleArrowDown className="w-5 transition" />:
          <CircleArrowDown className="w-5 transition rotate-180" />
        }{title}
      </button>
      {isOpen && (
        <ul className="mt-2 mb-3">
          {content.map((item, index) => (
            <li key={index} className="pl-6 py-2 hover:bg-link-active hover:text-link-white flex items-center cursor-pointer gap-2">
              {item.icon}
              <a href={item.to}>{item.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
