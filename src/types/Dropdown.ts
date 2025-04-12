export interface ContactItem {
  text: string;
  icon: React.ReactNode;
  to: string;
}

export interface DropdownMenuProps {
  title: string;
  icon?: React.ReactNode;
  content: ContactItem[];
}
