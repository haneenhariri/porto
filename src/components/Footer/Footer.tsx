import SocialLinks from "./SocialLinks";
import GitHubUsername from "./GitHubUsername";

export default function Footer() {
  return (
    <footer className="flex items-center text-label justify-between border-t border-border  w-full bottom-0">
      <SocialLinks />
      <GitHubUsername />
    </footer>
  );
}
