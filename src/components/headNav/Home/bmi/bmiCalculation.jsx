import { useEffect, useState } from "react";



const BmiCalCulation = ({setBmi}) => {
  const [bmiValue,setBmiValue] = useState({
    height: "",
    weight: ""
  })
  const [errbmiValue,setErrBmiValue] = useState({
    errHeight: false,
    errWeight: false
  })
 
  const calculation = (event) => {
      event.preventDefault()
      if(bmiValue.height == "" || bmiValue.weight == "") {
          bmiValue.height == "" && setErrBmiValue((prev) => ({...prev,errHeight : true})) 
          bmiValue.weight == "" && setErrBmiValue((prev) => ({...prev, errWeight : 
          true
          }))
          bmiValue.height.replace(/[A-Za-z]/g , "&&")
      } 
      
      else{
        let meterValue = Number(bmiValue.height)
        const heightValue = meterValue * meterValue
        console.log(heightValue)
        const bmiCalculate =  Number(bmiValue.weight) /heightValue
        setBmi(bmiCalculate) 
        console.log(bmiCalculate,"bmiCalculate16")
   
      }
          
  }

  useEffect(() => {
    bmiValue.height !== "" && setErrBmiValue((prev) => ({...prev,errHeight : false}))
    bmiValue.weight !== "" && setErrBmiValue((prev) => ({...prev,errWeight : false}))
  },[bmiValue])
    return(
        <section>
            <h2 className="text-center md:text-left uppercase text-3xl md:text-5xl font-bold">bmi calculator</h2>
            <p className="text-center md:text-left uppercase text-sm md:text-base text-gray-400 my-3">*please enter height meter/cm and Weight others are optional</p>

            <form onSubmit={calculation}>
                <div className="grid justify-center md:grid-cols-2 gap-5 mx-auto">
                    <div>
                    <input type="text" name="" id=""  placeholder="Height Meter/cm" className="focus:outline outline-sky-700 w-full border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300" tabIndex={0} onChange={(e) => setBmiValue((prev) => ({...prev,height : e.target.value.replace(/[A-Za-z]/g , "")})) }/>
                    {errbmiValue.errHeight && <p className="text-xs mt-2 text-red-500">*Please Enter the correct Value for Height</p>}
                    </div>
                <div>
                <input type="text" name="" id=""  placeholder="Weight / Kg" className="focus:outline outline-sky-700 w-full border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300" tabIndex={0} onChange={(e) => setBmiValue((prev) => ({...prev,weight : e.target.value.replace(/[A-Za-z]/g ,"")}))}/>
                {errbmiValue.errWeight && <p className="text-xs mt-2 text-red-500">*Please Enter the correct Value for Weight</p>}
                </div>
                
                <input type="text" name="" id=""  placeholder="Age" className="focus:outline outline-sky-700  border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300" tabIndex={0}/>
                <select className="focus:outline outline-sky-700  border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300">
                    <option aria-required>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>
               <input type="submit" value={"CALCULATE"} className="border px-20 mt-6 py-2 bg-sky-300 text-white font-semibold transition-all duration-300 hover:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] border-sky-300 focus:outline outline-sky-400 flex mx-auto"/>
            </form>
        </section>
    )
}

export default BmiCalCulation;