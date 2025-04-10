import Slider from "react-slick";
import CodeCard from "../ui/Card/CodeCard";

export default function SliderSide() {
    const settings = {
        className: "center",
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
      };
  return (
    <div className=" overflow-hidden!  relative z-10  w-1/3 h-full ">
      <Slider  {...settings}>
        <div className="slick-slide">
            <div className="card-wrapper">
            <CodeCard code={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;}`}/>           
         </div>
    </div>
        <div className="slick-slide">
            <div className="card-wrapper">
            <CodeCard code={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;}`}/>           
         </div>
    </div>
        <div className="slick-slide">
            <div className="card-wrapper">
            <CodeCard code={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;}`}/>           
         </div>
    </div>
      </Slider>
    </div>
  )
}
