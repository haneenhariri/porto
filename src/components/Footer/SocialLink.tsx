import { SocialLinkProps } from "../../types/footer";

export default function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <li className="p-4 border-r">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </li>
  );
}
