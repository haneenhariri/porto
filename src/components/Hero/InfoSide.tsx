import { Link } from "react-router-dom";
import { InfoSideProps } from "../../types/hero";

export default function InfoSide({name , jop , githubLink} : InfoSideProps) {
  return (
    <div className="flex flex-col gap-18.5">
        <div>
            <h3 className=" text-label xl:text-lg lg:text-base leading-7 mb-1">Hi all. I am</h3>
            <h1 className=" xl:text-6xl lg:text-5xl leading-16 text-link-white">{name}</h1>
            <h2 className=" xl:text-3xl lg:text-2xl text-job">{jop}</h2>
        </div>
        <div>
            <p className=" text-sm text-label mb-2">// find my profile on Github:</p>
            <div className=" flex items-center gap-2.5 xl:text-base text-sm">
                <span className=" text-jop">const</span>
                <span className=" text-teal">githubLink</span>
                <span className=" text-link-white">=</span>
                <Link  className=" underline text-git" target="_blank"  to={githubLink}>“{githubLink}”</Link>
            </div>
        </div>
    </div>
  )
}