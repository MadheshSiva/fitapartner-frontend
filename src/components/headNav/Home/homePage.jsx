import BmiMain from "./bmi/bmiMain";
import FitnessList from "./FitnessList";
import HomeHead from "./HomeHead";
import ProductList from "./productList";
import ServicePage from "./servicePage";


const HomePage = () => {
return(
    <>
    <HomeHead/>
    <FitnessList/>
    <ProductList/>
    <ServicePage/>
    <BmiMain/>
    </>
)
}

export default HomePage;