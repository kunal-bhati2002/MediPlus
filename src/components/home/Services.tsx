import type { JSX } from "react";
import { FaHeart, FaTooth } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { MdBloodtype, MdHearing } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";

function Services() {

    return (<>
        <section className="container mx-auto py-20 px-4">
            <div className="text-center mb-9">
                <h3 className="text-3xl font-bold mb-4">We Offer Different Services to Improve Your Health</h3>
                <span className="text-blue-500 text-4xl inline-block mb-4">
                    <TbActivityHeartbeat />
                </span>
                <p className="text-gray-600 px-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis sit repellendus?
                </p>
            </div>
            <div className="xl:w-[80%] xl:mx-auto md:grid grid-cols-3 gap-8">
                <ContentComponent icon={<LuNotepadText />} heading="General Treatment" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<FaTooth />} heading="Teeth Whitening" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<FaHeart />} heading="Heart Surgery" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<MdHearing />} heading="Ear Treatment" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<IoEyeSharp />} heading="Vision Problems" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<MdBloodtype />} heading="Blood Transfusion" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
            </div>
        </section>
    </>);
}

export default Services

interface contentProps {
    icon: JSX.Element;
    heading: string;
    para: string;
}

const ContentComponent = ({ icon, heading, para }: contentProps) => {

    return (<>
        <div className="flex gap-4 mb-8">
            <div>
                <span className="text-blue-500 text-4xl inline-block mb-4">
                    {icon}
                </span>
            </div>
            <div>
                <a href="" className="text-xl font-semibold hover:text-primary hover:cursor-pointer">{heading}</a>
                <p className="text-gray-600 my-2">{para}</p>
            </div>
        </div>
    </>);
}