import aboutList from "../../../assets/about";

const MainPage = () => {

    return (
        <section className="md:mt-14">
            {aboutList.map((aboutList) => (
                <div className="block md:flex md:gap-6 my-6 w-[90%] mx-auto ">
                    <div className="md:w-1/3">
                        <img src={aboutList.image} alt="about-image"  className="h-[300px] w-full md:w-[270px] ml-auto rounded-sm bg-white opacity-50 hover:opacity-100"/>
                    </div>
                    <div className="md:w-3/5 mx-auto">
                       
                        <h2 className="text-2xl font-bold text-[#42E0FF] mb-2 tracking-normal">{aboutList.floorType}</h2>
                        <p className="w-[90px] h-[2px] border bg-white "></p>
                        <p className="tracking-wide text-Base mt-[5px] text-gray-200"><span className="text-[#42E0FF] font-semibold">Floor {aboutList.floor}:</span> {aboutList.floorDescription}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default MainPage;