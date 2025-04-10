export interface btnProps 
{
    type?: "button" | "submit";
    text: string;
    style:string;
    onClick?: () => void;
}