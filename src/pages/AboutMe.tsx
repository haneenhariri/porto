import AboutMeLayout from "../components/layout/AboutMeLayout";

const AboutMe: React.FC = () => {
  return (
    <div>
      <AboutMeLayout>
        <div className="left-part w-full h-full py-6 lg:py-0 px-6 xl:w-[42.99%] flex justify-center items-center"></div>
        <div className="right-part hidden xl:block w-[57.01%] h-full border-l border-border"></div>
      </AboutMeLayout>
    </div>
  );
};

export default AboutMe;
