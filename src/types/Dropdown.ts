export type DropdownProps = {
  icon?: React.ReactNode;
  title: string;
  content: {
    text: string;
    icon: React.ReactNode;
    to: string;
  }[];
};
