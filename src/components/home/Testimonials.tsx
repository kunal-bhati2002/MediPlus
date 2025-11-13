import { TbActivityHeartbeat } from "react-icons/tb";
import TestimonialCarousel from "./TestimonialCarousel";

function Testimonials() {

    return (<>
        <section className="relative h-[80vh] flex items-center justify-center bg-[url('/images/MRI_scan_photo.webp')] bg-cover  bg-no-repeat bg-fixed">
            <div className="absolute inset-0 bg-blue-600/85"></div>

            <div className="container mx-auto py-20 z-10">

                <div className="px-8 text-center mb-9">
                    <h3 className="text-white text-3xl font-bold mb-4">What Our Patients say About Our Medical Treatments</h3>
                    <span className="text-white text-4xl inline-block mb-4">
                        <TbActivityHeartbeat />
                    </span>
                </div>
                <TestimonialCarousel />
            </div>
        </section>
    </>);
}
export default Testimonials