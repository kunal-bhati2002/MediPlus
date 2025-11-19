// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css";
// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css/pagination";
// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
    "/images/logo-1.png",
    "/images/logo-2.png",
    "/images/logo-3.png",
    "/images/logo-4.png",
    "/images/logo-1.png",
];

function Client() {
    return (<>
        <section className="container mx-auto py-20 px-20 bg-[url(../images/Doctor_holding_patitent_hand.avif)] bg-cover bg-center ">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="">
                            <img
                                src={src}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </>);
}

export default Client