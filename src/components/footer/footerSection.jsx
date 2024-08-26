import footerLogo from "../../assets/logo.png"
import { Instagram, WhatsApp, YouTube } from "@mui/icons-material"
const FooterSection = () => {

    return (
        <section className="w-[95%] mx-auto text-center md:text-left md:flex justify-around pt-6">
            <article className="md:w-1/4">
                <img src={footerLogo} alt="footer-logo" className="w-10 mx-auto md:mx-0" />
                <p className="text-white mt-5">Power is a champ in providing its users with absolutely everyting a fitness or gym site needs</p>

                <h2 className="text-white font-semibold text-base uppercase mt-5">our socials</h2>
                <div className="md:flex items-center gap-4 mt-2">
                    <Instagram className="text-[#e35644] transition-all hover:scale-125 duration-500 " /> <WhatsApp className="text-[#25cc63] transition-all hover:scale-125 duration-500" /> <YouTube className="text-[#f60100] transition-all hover:scale-125 duration-500 hover:shadow-white " />
                </div>
            </article>
            <article className="w-[95%] mx-auto text-center md:text-left md:w-1/4 text-white mt-5 md:mt-0">
                <h2 className="text-2xl font-bold">Blog posts</h2>
                <div>
                    <h3 className=" mt-5 uppercase text-sm tracking-wide text-white font-semibold">your future is created by what you do today, not tomorrow</h3>
                    <span className="mt-1 hover:text-gray-400 duration-500 tracking-widest text-white text-xs uppercase">june 18, 2019</span>
                </div>

                <div className="my-4">
                    <h3 className="uppercase text-sm text-white tracking-wide font-semibold ">10 tips how to prepare meals fast easy.</h3>
                    <span className=" mt-1 hover:text-gray-400 duration-500 tracking-widest text-white text-xs uppercase">june 21, 2019</span>
                </div>

                <div>
                    <h3 className="uppercase text-sm text-white tracking-wide font-semibold">How to maximise time spent at the gym.</h3>
                    <span className="mt-1 hover:text-gray-400 duration-500 tracking-widest text-white text-xs uppercase">june 28, 2019</span>
                </div>
            </article>
            <article className="w-[95%] mx-auto text-center md:text-left my-5 md:my-0 md:w-1/4">
                <h2 className="text-2xl font-bold text-white">Location</h2>
             

                <div>
                    <h3 className="uppercase text-sm text-white mt-5">251 rathakirishana road, fair land, salem - 7</h3>
                    
                </div>
            </article>
            <article className="text-white w-[95%] md:w-1/4 mx-auto text-center md:text-left">
                <h2 className="text-2xl font-bold">Working Hours</h2>
             

                <div className="mt-5">
                   <p className="font-semibold">Monday - Friday</p>
                   <p className="text-sm text-gray-400">07:00 - 21:00</p>

                   <p className="font-semibold mt-3">Saturday</p>
                   <p className="text-sm text-gray-400 mb-3">07:00 - 16:00</p>

                   <p className="font-semibold">Sunday Closed</p>
                   
                </div>
            </article>
        </section>
    )
}

export default FooterSection;