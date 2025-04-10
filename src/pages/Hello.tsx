import InfoSide from "../components/Hero/InfoSide"
import SliderSide from "../components/Hero/SliderSide"
import background from '../assets/background blurs.png'

const Hello: React.FC = () => {
  return (
    <div className="hero-container  overflow-hidden relative p-6 flex  justify-center gap-[7%]  items-center h-full grow">
      <InfoSide name={'Haneen Al-hariri'} jop={'> Front-end developer'} githubLink={'https://github.com/haneenhariri'}/>
      <SliderSide/>
      <img src={background} alt="background" className=" absolute lg:w-[60%]  right-0 z-0 " />
    </div>
  )
}

export default Hello