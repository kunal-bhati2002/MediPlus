import type { JSX } from "react";
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
            <div className="">
                <ContentComponent icon={<TbActivityHeartbeat />} heading="Hello" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<TbActivityHeartbeat />} heading="Hello" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<TbActivityHeartbeat />} heading="Hello" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<TbActivityHeartbeat />} heading="Hello" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<TbActivityHeartbeat />} heading="Hello" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
                <ContentComponent icon={<TbActivityHeartbeat />} heading="Hello" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum laboriosam, iure ab quas velit!" />
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
        <div className="flex gap-4 my-4">
            <div>
                <span className="text-blue-500 text-4xl inline-block mb-4">
                    {icon}
                </span>
            </div>
            <div>
                <h4 className="text-xl font-semibold">{heading}</h4>
                <p className="text-gray-600">{para}</p>
            </div>
        </div>
    </>);
}