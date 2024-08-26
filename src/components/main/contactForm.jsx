
const ContactForm = () => {
    const contact = () => {

    }
    return (
        <main>
            <h1 className="text-center text-5xl font-bold mt-4 ">Contact Us</h1>
            <p className="w-44 h-1 rounded-md bg-sky-400 mx-auto mt-1 mb-8"></p>
<section className="flex gap-3 my-5 flex-col md:flex-row w-[95%] mx-auto">
            <form onSubmit={contact} className="md:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div>
                        <p className="mb-2">First Name<span className="text-red-500">*</span></p>
                        <input type="text" name="" id="" placeholder="First Name" className="focus:outline outline-sky-700  border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300 w-full" tabIndex={0} />
                    </div>
                    <div>
                        <p className="mb-2">Last Name<span className="text-red-500">*</span></p>
                        <input type="text" name="" id="" placeholder="Last Name" className="focus:outline outline-sky-700  border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300 w-full" tabIndex={0} />

                    </div>


                </div>
                <div className="mt-5">
                    <p className="mb-2">Phone Number<span className="text-red-500">*</span></p>
                    <input type="text" name="" id="" placeholder="Phone Number" className="focus:outline outline-sky-700  border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300 w-full md:w-1/2" tabIndex={0} />
                </div>
                <div className="my-4">
                    <p className="mb-2">Email<span className="text-red-500">*</span></p>
                    <input type="text" name="" id="" placeholder="Email" className="focus:outline outline-sky-700  border h-10 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300 w-full md:w-1/2" tabIndex={0} />
                </div>

                <div>

                    <p>Note<span className="text-red-500">*</span></p>
                    <textarea
                        placeholder="Note"
                        className="focus:outline outline-sky-700 border h-40 pl-2 focus:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] shadow-sky-300 transition-all duration-300"
                        tabIndex={0}
                        cols={40}
                        rows={4}
                    />


                </div>



                <input type="submit" value={"CALCULATE"} className="border px-20 mt-6 py-2 bg-sky-300 text-white font-semibold transition-all duration-300 hover:shadow-[0.5px_0.5px_7px_rgba(3,105,161,0.7)] border-sky-300 focus:outline outline-sky-400 flex mx-auto" />
            </form>

            <div className="overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15629.158629774056!2d78.1428556!3d11.6738723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf04f5d5d86a7%3A0x8618bcba66e436!2sSinthampalayam%2C%20Fairlands%2C%20Salem%2C%20Tamil%20Nadu%20636016!5e0!3m2!1sen!2sin!4v1724577987719!5m2!1sen!2sin" width="600" height="450" style={{border: "0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        </main>
        
    )
}

export default ContactForm;