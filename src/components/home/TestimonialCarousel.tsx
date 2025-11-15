// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css";
// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css/pagination";
// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonials: TestimonialDetails[] = [
    {
        image: "/images/Doctor_holding_patitent_hand.avif",
        name: "MR. India",
        comment: "This is a good hospital.",
    },
    {
        image: "/images/home_banner_image_1.jpg",
        name: "Mrs. Sharma",
        comment: "Excellent care and friendly staff.",
    },
    {
        image: "/images/video-bg.jpg",
        name: "Dr. Verma",
        comment: "State-of-the-art facilities and compassionate service.",
    },
    {
        image: "/images/MRI_scan_photo.webp",
        name: "Rahul Singh",
        comment: "Quick diagnosis and professional treatment.",
    },
];

export default function TestimonialCarousel() {
    return (
        <section className="">
            {/* Swiper Section */}
            <div className="relative mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // navigation={{
                    //     nextEl: ".swiper-button-next-custom",
                    //     prevEl: ".swiper-button-prev-custom",
                    // }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="overflow-visible">
                            <TestimonialContent
                                image={testimonial.image}
                                name={testimonial.name}
                                comment={testimonial.comment}
                            />
                        </SwiperSlide>
                    ))}

                    {/* {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-64 rounded-xl overflow-hidden group">
                                <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                                <TestimonialContent name="testimonial.name" comment="testimonial.comment" image="testimonial.image" />
                            </div>
                        </SwiperSlide>
                    ))} */}

                </Swiper>

                {/* Custom Navigation Buttons */}
                {/* <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                    ❮
                </button>
                <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                    ❯
                </button> */}
            </div>
        </section>
    );
}

interface TestimonialDetails {
    image: string;
    comment: string;
    name: string;
}

// const TestimonialContent = ({ image, comment, name }: TestimonialDetails) => {
//     return (<>
//         <div className="text-center mx-10 bg-white">
//             <p className="text-gray-600">{comment}</p>
//             <p>{name}</p>
//             <img src={image} alt={name} className="w-16 rounded-[50%] relative top-5 " />
//         </div>
//     </>);
// }

// const TestimonialContent = ({ image, comment, name }: TestimonialDetails) => {
//     return (
//         <>
//             <div className="px-5 py-5 mx-10 bg-white relative">
//                 <p className="text-gray-600 my-3 ">{comment}</p>
//                 <p className="font-semibold text-xl my-3 ">{name}</p>
//                 <img
//                     src={image}
//                     alt={name}
//                     // className="w-16 rounded-[50%] absolute left-1/2 -translate-x-1/2 top-full -mt-8"
//                     className="w-16 h-16 rounded-full absolute  z-10"
//                 />
//             </div>
//         </>
//     );
// };

const TestimonialContent = ({ image, comment, name }: TestimonialDetails) => {
    return (
        <div className="px-5 py-5 mx-10 bg-white relative overflow-visible">
            <p className="text-gray-600 my-3">{comment}</p>
            <p className="font-semibold text-xl my-3">{name}</p>
            <img
                src={image}
                alt={name}
                // className="w-16 h-16 rounded-full absolute left-12 -translate-x-1/2 top-full -mt-8 z-10"
                className="w-16 h-16 rounded-full relative top-10 z-20"
            />
        </div>
    );
};