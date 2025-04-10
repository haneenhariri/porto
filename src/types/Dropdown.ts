export type DropdownProps = {
  title: string;
  content: {
    text: string;
    icon: React.ReactNode;
    to: string;
  }[];
};
