import { CheckboxItem } from "./contact";

export interface ContactItem {
  text: string;
  icon: React.ReactNode;
  to: string;
}

export type DropdownContent = ContactItem[] | NestedDropdown[] | CheckboxItem[];

export interface NestedDropdown {
  title: string;
  icon?: React.ReactNode;
  content: DropdownContent;
}

export interface DropdownMenuProps {
  title: string;
  icon?: React.ReactNode;
  content: DropdownContent;
  depth?: number;
}
