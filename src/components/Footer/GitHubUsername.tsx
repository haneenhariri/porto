import { Github } from "lucide-react";

export default function GitHubUsername() {
  return (
    <div className="github-username md:border-l p-4 md:px-8">
      <a href="https://github.com/test/" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <span className="hidden md:inline">@username</span> <Github />
      </a>
    </div>
  );
}
