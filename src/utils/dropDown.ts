import { CheckboxItem, NestedDropdown } from "../types/contact";
import { DropdownContent } from "../types/Dropdown";

export const isNestedDropdown = (
  content: DropdownContent
): content is NestedDropdown[] => {
  return (
    Array.isArray(content) && "title" in content[0] && "content" in content[0]
  );
};

export const isCheckboxList = (
  content: DropdownContent
): content is CheckboxItem[] => {
  return (
    Array.isArray(content) &&
    content.length > 0 &&
    "onChange" in content[0]
  );
};