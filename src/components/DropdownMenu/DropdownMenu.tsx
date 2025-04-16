import { useState } from "react";
import { IoMdArrowDropright, IoMdCheckmark } from "react-icons/io";
import {
  DropdownMenuProps,
  ContactItem,
  NestedDropdown,
} from "../../types/Dropdown";
import { CheckboxItem } from "../../types/contact";
import { isCheckboxList, isNestedDropdown } from "../../utils/dropDown";

const DropdownMenu = ({
  title,
  icon,
  content,
  depth = 0,
}: DropdownMenuProps) => {
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
            ? (content as NestedDropdown[]).map((nested, index) => (
                <li key={index}>
                  <DropdownMenu
                    title={nested.title}
                    icon={nested.icon}
                    content={nested.content}
                    depth={depth + 1}
                  />
                </li>
              ))
            : isCheckboxList(content)
            ? (content as CheckboxItem[]).map((item, index) => (
                <li
                  key={index}
                  className="relative py-2 flex items-center gap-2 cursor-pointer hover:bg-link-active hover:text-link-white"
                  style={{ paddingLeft: `${(paddingLeft + 1) * 4}px` }}
                >
                  <input
                    type="checkbox"
                    id={item.text}
                    checked={item.checked}
                    onChange={(e) => item.onChange(e.target.checked)}
                    className="peer hidden"
                  />

                  <div
                    className="w-5 h-5 rounded border border-link flex items-center justify-center
                           peer-checked:bg-link peer-checked:border-link transition-all"
                  >
                    <IoMdCheckmark className="text-white w-4 h-4 hidden peer-checked:block" />
                  </div>

                  {item.icon}
                  <label htmlFor={item.text} className="cursor-pointer grow">
                    {item.text}
                  </label>
                </li>
              ))
            : (content as ContactItem[]).map((item, index) => (
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
