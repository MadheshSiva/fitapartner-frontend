import MainImg from "../../../assets/new-bg-img.jpg"

const HomeHead = () => {

  return (
    <>
      <section className="text-center w-full mx-auto">
        <div className="md:h-96">
        <img src={MainImg} alt="" className=" hidden md:block w-full absolute top-0 z-10 h-full" />
        </div>
        
        <div className="md:mt-60 mb-8 w-[95%] mx-auto">
          <h1 className="uppercase text-4xl font-bold">fit partner - the largest gym in tamil nadu</h1>
          <p className="tracking-wider text-gray-500 mt-2"> The premier gym in Salem where passion for fitness meets cutting-edge innovation. Located in the heart of Salem, we recognized the need for a space that truly inspires and motivates, leading to the creation of our state-of-the-art facility. Established in 2022, Fit Partner spans six floors and 22,000 square feet, offering a diverse range of instructor-led classes—48 to be exact—that cater to strength, stamina, flexibility, and overall wellness.

            Each of our six floors is meticulously organized to focus on specific muscle groups and fitness activities. For example, cardio enthusiasts can head to the 5th floor, while those looking to build their chest muscles can start on the 1st floor. Our expansive fitness hub features specialized zones for cardio, weight training, and cross-fit, with each space equipped with the latest and most premium gym equipment from Precor USA, ensuring a world-class workout experience.

            Discover the best of fitness at Fit Partner, the largest and most advanced gym in Salem, Tamil Nadu. Come visit us today!</p>
        </div>

      </section>
    </>
  )
}

export default HomeHead;