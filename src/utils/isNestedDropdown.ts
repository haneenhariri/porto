import { NestedDropdown } from "../types/contact";
import { DropdownContent } from "../types/Dropdown";

export const isNestedDropdown = (
  content: DropdownContent
): content is NestedDropdown[] => {
  return (
    Array.isArray(content) && "title" in content[0] && "content" in content[0]
  );
};
