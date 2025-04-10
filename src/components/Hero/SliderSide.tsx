import Slider from "react-slick";
import CodeCard from "../ui/Card/CodeCard";
import './SliderSlide.css';

export default function SliderSide() {
    const codeSnippets = [
      `function initializedGoalsToGame(Goals: Weaklycached(Goals): T {  
        cout value = parseMeds(Comm, .response, chunk, .value);  
        initializedGuns_status = INITIALIZED;  
        initializedGuns_value = Value;  
        return value;`,
        `function initializedGoalsToGame(Goals: Weaklycached(Goals): T {  
    cout value = parseMeds(Comm, .response, chunk, .value);  
    initializedGuns_status = INITIALIZED;  
    initializedGuns_value = Value;  
    return value;`,
    `function initializedGoalsToGame(Goals: Weaklycached(Goals): T {  
      cout value = parseMeds(Comm, .response, chunk, .value);  
      initializedGuns_status = INITIALIZED;  
      initializedGuns_value = Value;  
      return value;`,
    ];

    const settings = {
        className: "center",
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
    };
    return (
        <div className="overflow-hidden relative hidden lg:block z-10 w-1/2 h-full">
            <Slider {...settings}>
                {codeSnippets.map((code, index) => (
                    <div key={index} className="slick-slide">
                        <div className="card-wrapper">
                            <CodeCard code={code} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}