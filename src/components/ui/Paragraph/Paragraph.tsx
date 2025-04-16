
export default function Paragraph({p, className} : {p : string; className?: string}) {
  return (
    <p className={`font-normal text-lg text-label ${className}`}>{p}</p>
  )
}
