export interface ContactItem {
  text: string;
  icon: React.ReactNode;
  to: string;
}

export type DropdownContent = ContactItem[] | NestedDropdown[];

export interface NestedDropdown {
  title: string;
  icon?: React.ReactNode;
  content: ContactItem[];
}

export interface DropdownMenuProps {
  title: string;
  icon?: React.ReactNode;
  content: DropdownContent;
  depth?: number;
}