import BannerImg from "./Banner";
import ItemTypes from "./ItemTypes";

  

  const NavItems = () => {

    return(
        <>
        <nav className="md:flex md:items-center gap-10">
            <BannerImg/>
            <ItemTypes/>
        </nav>
        </>
    )
  }

  export default NavItems;