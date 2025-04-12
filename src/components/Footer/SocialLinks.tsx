import SocialLink from "./SocialLink";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links flex grow justify-between md:grow-0">
      <p className="border-r py-4 px-6 grow md:grow-0">find me in:</p>
      <ul className="flex items-center">
        <SocialLink href="https://facebook.com/yourusername" icon={<FaFacebookF className="text-xl" />} />
        <SocialLink href="https://linkedin.com/in/yourusername" icon={<FaLinkedinIn className="text-xl" />} />
      </ul>
    </div>
  );
}
