export interface InputProps {
    type?: string;
    name: string;
    plac?: string;
    value?: string;
    id?: string;
    error?: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;}