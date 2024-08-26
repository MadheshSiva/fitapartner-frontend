import "./ItemType.css";
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
const ItemTypes = () => {
    const {params} = useParams()
    const location = window.location.pathname
console.log(location,"params05")
const navigate = useNavigate()

const navPage = (type) => {
    console.log(type,"222")
   if(type == "Home") {
    navigate("/")
   } else if(type == "BMI") {
    navigate("/Bmi")
   } else if(type == "About"){
    navigate("/about")
   } else if(type == "Contact") {
    navigate("/contact")
   }
}
    return (
        <ul className="md:w-3/4 md:flex md:items-center md:justify-between">
            <li className={`main-line block uppercase ${location == "/" ? "text-[#18a1f0]" : "text-white"} tracking-wider cursor-pointer md:w-1/5 md:text-center  text-[14px] mt-2 md:mt-0`} onClick={() => navPage("Home")}>
                Home
                <p className="line md:mx-auto  "></p>
            </li >
            <li className={`main-line block uppercase ${location =="/Bmi" ? "text-[#1c83ea]": "text-white"} tracking-wide cursor-pointer md:w-1/5 md:text-center text-[14px] my-2 md:my-0`} onClick={() => navPage("BMI")}>
                Bmi calculator
                <p className="line md:mx-auto"></p>
            </li>
            <li className={`main-line block uppercase ${location =="/about" ? "text-[#1c83ea]": "text-white"} tracking-wide cursor-pointer md:w-1/5 md:text-center text-[14px] mt-2 md:mt-0`} onClick={() => navPage("About")}>
                About
                <p className="line md:mx-auto"></p>
            </li>
            <li className={`main-line block uppercase ${location =="/contact" ? "text-[#1c83ea]": "text-white"} tracking-wide cursor-pointer md:w-1/5 md:text-center text-[14px] mt-2 md:mt-0`} onClick={() => navPage("Contact")}>
                Contact Us
                <p className="line md:mx-auto"></p>
            </li>
        </ul>
    );
}

export default ItemTypes;
