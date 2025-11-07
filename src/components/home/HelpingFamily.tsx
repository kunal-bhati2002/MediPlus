import type { JSX } from "react";
import { FaAmbulance } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { GiCaduceus } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";

function HelpingFamily() {
    return (
        <section className="">
            <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    We Are Always Ready to Help You & Your Family
                </h2>
                <span className="text-blue-500 text-4xl inline-block mb-4">
                    <TbActivityHeartbeat />
                </span>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Our team of experienced healthcare professionals is committed to providing
                    round-the-clock medical support and personalized care for you and your loved ones.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <IconInfo
                        icon={<FaAmbulance />}
                        heading="Emergency Help"
                        paraInfo="Our emergency response unit operates 24/7 to ensure immediate medical attention when every second counts."
                    />

                    <div className="hidden md:block w-20 border-t-2 border-dotted border-blue-400"></div>

                    <IconInfo
                        icon={<GiCaduceus />}
                        heading="Enriched Pharmacy"
                        paraInfo="We provide high-quality, approved medications and expert pharmaceutical guidance to support your treatment plan."
                    />

                    <div className="hidden md:block w-20 border-t-2 border-dotted border-blue-400"></div>

                    <IconInfo
                        icon={<FaStethoscope />}
                        heading="Medical Treatment"
                        paraInfo="Our specialized doctors offer comprehensive diagnostic and treatment services using the latest medical technology."
                    />
                </div>
            </div>
        </section>
    );
}

export default HelpingFamily;

interface PropsInfo {
    icon: JSX.Element;
    heading: string;
    paraInfo: string;
}

const IconInfo = ({ icon, heading, paraInfo }: PropsInfo) => {
    return (
        <div className="group flex flex-col gap-3 text-center max-w-xs ">
            <span className="mx-auto text-4xl text-blue-500 border-2 p-5 rounded-[50%] group-hover:text-white group-hover:bg-primary">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-800">{heading}</h3>
            <p className="text-gray-600 text-sm ">{paraInfo}</p>
        </div>
    );
};
