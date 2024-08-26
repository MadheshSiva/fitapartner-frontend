import BmiCalCulation from "./bmiCalculation";
import BmiFitRates from "./bmiFits";
import "./bmiBgfit.css"
import { useState } from "react";
import {Close} from "@mui/icons-material"

const BmiMain = () => {
   const [bmi,setBmi] = useState("")
   const closeFunction = () => {
    setBmi("")
}
    return (
        <main>
            <section className="md:flex w-[95%] mx-auto gap-10 mb-9 mt-16">
                <div className="md:w-1/2">
                    <BmiCalCulation setBmi={setBmi}/>
                </div>
                <div className="md:w-1/2 mt-9">
                    <BmiFitRates />
                </div>

            </section>
            <section>
            <div>
            {bmi !== "" && <h1 className="h-12 w-3/4 mb-6 mx-auto p-3 flex items-center justify-between bg-black text-white shadow-lg transition-all duration-500 shadow-black hover:shadow-sky-200">
                <h2 className="text-base font-bold">YOUR BMI VALUE IS <span className="font-medium text-sky-400">{bmi}</span></h2> 
                <p onClick={closeFunction} className="cursor-pointer duration-300 transition-all"><Close/></p></h1>}
            </div>
        </section>
        </main>

    )
}

export default BmiMain;