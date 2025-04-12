export type ContactFormProps = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      message: string;
    }>
  >;
};

export type ContactLayoutProps = {
  children: React.ReactNode;
};
export interface ContactItem {
  text: string;
  icon: React.ReactNode;
  to: string;
}

export interface NestedDropdown {
  title: string;
  icon?: React.ReactNode;
  content: ContactItem[];
}

export interface ContactSection {
  title: string;
  icon?: React.ReactNode;
  content: ContactItem[] | NestedDropdown[];
}

export interface ContactSideBarProps {
  sections: ContactSection[];
}

export type CodeBoxProps = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
};
