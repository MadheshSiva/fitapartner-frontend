import { useEffect, useState } from "react";
import NavItems from "./NavItems";
import mainImg from "../../assets/new-bg-img.jpg";

const HeaderMain = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTabletView, setIsTabletView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        const handleResize = () => {
            setIsTabletView(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const location = window.location.pathname;

    return (
        <>
            <div className={`z-40 sticky top-0 text-white transition-all duration-500 ease-in-out ${isSticky ? 'bg-[#23232f] bg-opacity-100 h-16' : `${location == "/" ? "bg-opacity-80 bg-[#232323]" : "bg-[#232323]"} p-1`}`}>
                {isTabletView ? (
                    <>
                        <button onClick={toggleMenu} className="p-2">
                            {/* Hamburger Icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute  left-0 w-full bg-[#000000]">
                                <NavItems />
                            </div>
                        )}
                    </>
                ) : (
                    <NavItems />
                )}
            </div>
        </>
    );
};

export default HeaderMain;
