import Carousel from "./Carousel";

function Portfolio() {
    // flex items-center justify-center
    return (
        <section className="w-full bg-white py-16 text-center">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    We Maintain Cleanliness Rules Inside Our Hospital
                </h2>
                <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                    aliquet.
                </p>
                <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-4"></div>
            </div>
            {/* Carousel goes here */}
            <div className="">
                <Carousel />
            </div>
        </section>
    );
}

export default Portfolio;
