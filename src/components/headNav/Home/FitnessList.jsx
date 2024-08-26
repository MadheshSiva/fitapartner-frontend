import Chest from "../../../assets/chest.jpg"
import dubmells from "../../../assets/dubmells.jpg"
import leg from "../../../assets/leg.jpg"
import snacks from "../../../assets/snacks.jpg"
import cardio from "../../../assets/cardio.jpg"
import latDown from "../../../assets/lat-down.jpg"
import "./fitnesslist.css"
const FitnessList = () => {

    return (
        <>
        <div className="relative w-[95%] mx-auto ">
        <div className="md:flex w-full bg-black">
                <div className="heading-img relative w-full bg-black h-[20rem] md:h-[37.9rem] md:w-[30%]">
                    <img src={Chest} alt="chest" className="w-full bg-black md:h-[38rem] md:absolute" />
                    <div className="heading-text">
                        <h1 className="text-sm">Fitness</h1>
                        <p className="text-xl font-semibold">Chest</p>
                    </div>

                </div>
                <div className="heading-img relative bg-black w-full md:h-[40px] md:w-1/3">
                    <img src={dubmells} alt="chest" className="w-full h-[20rem] md:h-[20rem] md:absolute" />
                    <div className="heading-text">
                        <h1 className="text-sm">Fitness</h1>
                        <p className="text-xl font-semibold">Dumbells</p>
                    </div>

                </div>
                <div className="heading-img relative bg-black md:w-[37%]">
                    <img src={leg} alt="chest" className="w-full h-[20rem] md:h-auto md:absolute" />
                    <div className="heading-text">
                        <h1 className="text-sm">Fitness</h1>
                        <p className="text-xl font-semibold">Leg</p>
                    </div>

                </div>
            </div>
            <div className="md:flex  bg-black md:absolute md:top-80 right-0 md:w-[70%] h-64">
                <div className="heading-img relative bg-black md:h-[40px] md:w-1/2 ">
                    <img src={cardio} alt="chest" className="w-full h-[20rem] md:h-[17.9rem] md:absolute" />
                    <div className="heading-text">
                        <h1 className="text-sm">Fitness</h1>
                        <p className="text-xl font-semibold">Cardio</p>
                    </div>

                </div>
                <div className="heading-img relative bg-black md:w-1/2">
                    <img src={snacks} alt="chest" className="w-full h-[20rem] md:h-[17.9rem] md:absolute" />
                    <div className="heading-text">
                        <h1 className="text-sm">Fitness</h1>
                        <p className="text-xl font-semibold">Foods</p>
                    </div>

                </div>
            </div>
        </div>
            

        </>)
}

export default FitnessList;