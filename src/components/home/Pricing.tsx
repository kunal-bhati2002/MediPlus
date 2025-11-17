import type { JSX } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import Button from "../common/Button";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiScissors2Fill } from "react-icons/ri";
import { FaHeart, FaTooth } from "react-icons/fa6";

function Pricing() {

    return (<>
        <section className="container mx-auto py-20 px-4 sm:px-8 lg:px-12 ">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">We Provide You The Best Treatment In Resonable Price</h3>
                <span className="text-primary text-4xl inline-block mb-4">
                    <TbActivityHeartbeat />
                </span>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <Pricecard icon={<RiScissors2Fill />} name="Plastic Surgery" price={200}
                    points={[
                        { text: "Lorem Ipsum Dolor Sit", available: true },
                        { text: "Cubitur Sollicitudin Fentum", available: true },
                        { text: "Nullam Interdum Enim", available: false },
                        { text: "Donec Ultricies Metus", available: false },
                        { text: "Pellentesque Eget Nibh", available: false },
                    ]}
                />
                <Pricecard icon={<FaTooth />} name="Plastic Surgery" price={200}
                    points={[
                        { text: "Lorem Ipsum Dolor Sit", available: true },
                        { text: "Cubitur Sollicitudin Fentum", available: true },
                        { text: "Nullam Interdum Enim", available: false },
                        { text: "Donec Ultricies Metus", available: false },
                        { text: "Pellentesque Eget Nibh", available: false },
                    ]}
                />
                <Pricecard icon={<FaHeart />} name="Plastic Surgery" price={200}
                    points={[
                        { text: "Lorem Ipsum Dolor Sit", available: true },
                        { text: "Cubitur Sollicitudin Fentum", available: true },
                        { text: "Nullam Interdum Enim", available: false },
                        { text: "Donec Ultricies Metus", available: false },
                        { text: "Pellentesque Eget Nibh", available: false },
                    ]}
                />
            </div>
        </section>
    </>);
}

export default Pricing

interface PointItem {
    text: string;
    available: boolean;
}

interface PriceCardContent {
    icon: JSX.Element;
    name: string;
    price: number;
    points: PointItem[];
}

const Pricecard = ({ icon, name, price, points }: PriceCardContent) => {
    return (
        <div className="
            p-8 bg-[#F9F9F9] border border-gray-200 
            rounded-xl shadow-md 
            h-full flex flex-col 
            transition hover:shadow-lg hover:-translate-y-1
        ">

            {/* Top Section */}
            <div className="text-center mb-6">
                <span className="text-primary text-5xl inline-block mb-4">
                    {icon}
                </span>

                <h4 className="text-2xl font-semibold">{name}</h4>

                <p className="text-gray-600 mt-2">
                    <span className="text-primary font-bold text-3xl">
                        ₹{price}
                    </span>{" "}
                    / Per Visit
                </p>
            </div>

            {/* Points */}
            <ul className="text-left space-y-4 mb-6 flex-grow">
                {points.map((point, index) => (
                    <li key={index}
                        className="flex justify-between items-center text-gray-700"
                    >
                        <p>{point.text}</p>
                        {point.available ? (
                            <FaCheckCircle className="text-primary text-lg" />
                        ) : (
                            <FaTimesCircle className="text-red-400 text-lg" />
                        )}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <Button className="w-full mt-auto">
                Book Now
            </Button>
        </div>
    );
};
