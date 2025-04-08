export interface InputProps {
    type: string;
    plac: string;
    value: string;
    id: string;
    error?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}