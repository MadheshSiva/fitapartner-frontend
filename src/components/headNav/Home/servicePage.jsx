import outLookOne from "../../../assets/outlook1.jpg"
import outLookTwo from "../../../assets/outlook2.webp"
import outLookThree from "../../../assets/outlook3.jpg"
import outLookFour from "../../../assets/outlook4.jpg"


const ServicePage = () => {
const listService = [{
heading : "weight loss program",
description : "It is never too late to feel great! Why put off feeling good when you can cut off those extra inches at Meridian Fitness!",
img : outLookOne

},
{
    heading : "body building program",
    description : "Life’s tough! Get fit first! Explore numerous tailormade bodybuilding programs for the warrior in you!",
    img : outLookTwo
    
    },
    {
        heading : "wellness program",
        description : "A stressed mind is a devil’s home. Find bliss and zen through our state of the art wellness programs at meridian fitness, the best and largest gym in bangalore.",
        img : outLookThree
        
        },
        {
            heading : "nutrition program",
            description : "Just for the health of it! Choose from various lip-smacking meals forged by our in-house nutritional experts.",
            img : outLookFour
            
            },

]



return(
    <>
    <section className="mt-14">
        <h2 className="uppercase text-center text-3xl font-bold">Fit partner's tailored services bring out the best in you </h2>
        <div className="grid mt-7 grid-cols-1 md:grid-cols-2 gap-7 w-[95%] mx-auto">
            {listService.map((services) => (
              <div className="relative">
                    <div >
                        <img src={services.img} alt="service-img" className="w-[100%] h-[20rem] transition-all hover:scale-105 duration-300" />
                         </div>
                    <div className="absolute bg-black h-[20rem] top-0 flex justify-center flex-col bg-opacity-65 text-white w-[100%] transition-all hover:scale-105 duration-300">
                        <h3 className="text-4xl tracking-wide uppercase text-center font-bold">{services.heading}</h3>
                         <p className="text-lg tracking-wide my-3 text-center font-semibold">{services.description}</p>
                         </div>
                </div>
            ))}
        </div>
    </section>
    
    </>
)
}

export default ServicePage; 