import Button from "../common/Button";

function Banner() {
    return (<>
        <section className=" md:grid grid-cols-2 bg-[url(/public/images/home_banner_image_1.jpg)] bg-cover">
            <div className="w-[80%] mx-auto py-28 ">
                <h1 className="text-2xl font-semibold sm:font-bold md:text-[2.5rem] leading-[50px]  ">We Provide <span className="text-primary">Medical</span> Services That You Can <span className="text-primary">Trust!</span></h1>
                <p className="py-3 text-sm md:text-lg md:my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsam quidem aperiam libero, incidunt numquam.</p>

                <div className="flex flex-col gap-2 text-white font-medium sm:flex-row">
                    <Button variant="primary">Get Appointment</Button>
                    <Button variant="primary-dark">Learn More</Button>
                </div>

            </div>
            <div className="hidden">
                {/* <p>hello</p> */}
            </div>
        </section>
    </>);
}

export default Banner