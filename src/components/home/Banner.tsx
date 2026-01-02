// import Button from "../common/Button";

// function Banner() {
//     return (<>
//         <section className=" grid md:grid-cols-2 bg-[url('/images/home_banner_image_1.jpg')] bg-cover">
//             <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28">
//                 <h1 className="text-3xl md:text-5xl font-bold leading-snug">We Provide <span className="text-primary">Medical</span> Services That You Can <span className="text-primary">Trust!</span></h1>
//                 <p className="py-3 text-sm md:text-lg md:my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsam quidem aperiam libero, incidunt numquam.</p>

//                 <div className="flex flex-col gap-2 text-white font-medium sm:flex-row mb-20">
//                     <Button variant="primary">Get Appointment</Button>
//                     <Button variant="primary-dark">Learn More</Button>
//                 </div>

//             </div>
//         </section>
//     </>);
// }

// export default Banner

import Button from "../common/Button";

function Banner() {
    return (<>
        <section className="grid md:grid-cols-2 bg-[url('/images/home_banner_image_1.jpg')] bg-cover">
            <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28">
                <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                    Providing <span className="text-primary">Quality</span> Healthcare You Can
                    <span className="text-primary"> Trust</span>
                </h1>

                <p className="py-3 text-sm md:text-lg md:my-5">
                    At Mediplus Hospital, we deliver expert medical care with compassion.
                    Our skilled doctors and advanced facilities ensure you receive safe,
                    reliable, and personalized treatment for every health need.
                </p>

                <div className="flex flex-col gap-2 text-white font-medium sm:flex-row mb-20">
                    <Button variant="primary">Book Appointment</Button>
                    <Button variant="primary-dark">Learn More</Button>
                </div>

            </div>
        </section>
    </>);
}

export default Banner;
