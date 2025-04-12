import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { DropdownMenuProps } from "../../types/Dropdown";
import { isNestedDropdown } from "../../utils/isNestedDropdown";

const DropdownMenu = ({ title, icon, content, depth = 0 }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const paddingLeft = 6 + depth * 4;

  return (
    <div className="flex flex-col text-link">
      <button
        onClick={toggleDropdown}
        className={`flex items-center md:bg-transparent mb-1 gap-2 py-2 w-full md:w-[291px] h-12 text-link-white border-b border-r-0 lg:w-[330px] text-start border-border`}
        style={{ paddingLeft: `${paddingLeft * 4}px` }}
      >
        {isOpen ? (
          <IoMdArrowDropright className="w-5 transition rotate-90 duration-250" />
        ) : (
          <IoMdArrowDropright className="w-5 transition" />
        )}
        {icon}
        {title}
      </button>

      {isOpen && (
        <ul className="mt-2 mb-3">
          {isNestedDropdown(content)
            ? content.map((nested, index) => (
                <li key={index}>
                  <DropdownMenu
                    title={nested.title}
                    icon={nested.icon}
                    content={nested.content}
                    depth={depth + 1}
                  />
                </li>
              ))
            : content.map((item, index) => (
                <li
                  key={index}
                  className="py-2 hover:bg-link-active hover:text-link-white flex items-center cursor-pointer gap-2"
                  style={{ paddingLeft: `${(paddingLeft + 1) * 4}px` }}
                >
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
