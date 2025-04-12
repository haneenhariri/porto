import { BsGithub } from "react-icons/bs";

export default function GitHubUsername() {
  return (
    <div className="github-username md:border-l p-4 md:px-8">
      <a href="https://github.com/test/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <span className="hidden md:inline">@haneenhariri</span> <BsGithub className="text-xl" />
      </a>
    </div>
  );
}
