import InfoSide from "./InfoSide";
import SliderSide from "./SliderSide";

export default function Hero() {
  return (
    <div className=" flex grow h-full gap-36 justify-center items-center">
      <InfoSide name={'Haneen Al-hariri'} jop={'> Front-end developer'} githubLink={'https://github.com/haneenhariri'}/>
      <SliderSide/>
    </div>
  )
}
