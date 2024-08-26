import { useState } from "react";
import BmiCalCulation from "../headNav/Home/bmi/bmiCalculation";
import BmiFitRates from "../headNav/Home/bmi/bmiFits";
import BmiBg from "../../assets/bmi-calculate.jpg";
import {Close} from "@mui/icons-material"

const BmiFunction = () => {
    const [bmi,setBmi] = useState("")
    const closeFunction = () => {
         setBmi("")
    }
    return(
        <main className="mb-5">
            <div className="relative">
            <img src={BmiBg} alt="" className="hidden w-full h-[35rem] md:block"/>
            <div className="md:absolute md:top-2/4 w-full text-black md:text-white text-5xl tracking-wider font-bold ">
                <h1 className="text-center">BODY MASS INDEX CALCULATOR</h1>
            </div>
            </div>
            
        <section className="md:flex w-full md:w-[95%] mx-auto gap-10 mb-9 mt-8 md:mt-16">
            <div className="md:w-1/2">
                <BmiCalCulation setBmi={setBmi}/>
            </div>
            <div className="md:w-1/2 mt-7">
                <BmiFitRates />
            </div>

        </section>
        <section>
            <div>
                {bmi !== "" && <h1 className="h-12 w-3/4 mx-auto p-3 flex items-center justify-between bg-black text-white shadow-lg transition-all duration-500 shadow-black hover:shadow-sky-200">
                <h2 className="text-base font-bold">YOUR BMI VALUE IS <span className="font-medium text-sky-400">{bmi}</span></h2> 
                <p onClick={closeFunction} className="cursor-pointer duration-300 transition-all"><Close/></p></h1>}
            </div>
        </section>
      
    </main>
    )
}

export default BmiFunction;

