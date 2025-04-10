export type ContactFormProps = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    message: string;
  }>>;
};

export type CodeBoxProps = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
};