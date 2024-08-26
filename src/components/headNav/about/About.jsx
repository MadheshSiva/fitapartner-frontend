import "../../themes/main.css"
import MainPage from "./main";

const FitAbouts = () => {
    return(
    <>
    <main className="Abouts">
    <section>
        <h1 className=" text-center  "><span className="text-[48px] tracking-normal text-shadow">Fit Partner</span> <span className="text-base tracking-wide">Your Fitness. Our Passion.</span></h1>
      <article>
        <p className="text-base w-[70%] mx-auto text-center mt-8 tracking-wide text-gray-200">Welcome to <span className="text-[#42E0FF]">Fit Partner</span>, where fitness meets innovation in a state-of-the-art facility spread across 22,000 square feet. Designed to offer the ultimate workout experience, our gym is meticulously organized with each of our six floors dedicated to different muscle groups and fitness needs.</p>
      </article>
    </section>
     <MainPage/>
    </main>
    </>)
}

export default FitAbouts;