import AboutMeContent from "../components/AboutMeContent/AboutMeContent";
import AboutMeLayout from "../components/layout/AboutMeLayout";
import CodeCard from "../components/ui/Card/CodeCard";
import UserInfo from "../components/ui/UserInfo/UserInfo";
import Paragraph from "../components/ui/Paragraph/Paragraph";
import { aboutMeData } from "../data/about-me";

const AboutMe: React.FC = () => {
  return (
    <AboutMeLayout>
      <div className="left-part w-full h-full py-6 lg:py-0 xl:w-[42.99%] flex justify-center items-center">
        <AboutMeContent />
      </div>
      <div className="right-part hidden pt-3 px-10 xl:block w-[57.01%] h-full border-l border-border">
        <Paragraph p="// Code snippet showcase:" className="mb-16" />
        <div className="right-part-content flex flex-col gap-8">
          {aboutMeData.map((data, index) => (
            <div key={index}>
              <UserInfo
                user={data.avatar}
                username={data.username}
                specialization={data.specialization}
                rating={data.rating}
              />
              <CodeCard code={data.code} />
            </div>
          ))}
        </div>
      </div>
    </AboutMeLayout>
  );
};

export default AboutMe;
