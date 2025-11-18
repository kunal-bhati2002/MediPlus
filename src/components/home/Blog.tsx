import { TbActivityHeartbeat } from "react-icons/tb";

function Blog() {
    return (<>
        <section className="container mx-auto py-20 px-4 sm:px-8 lg:px-12 ">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Keep up with Our Most Recent Medical News.</h3>
                <span className="text-primary text-4xl inline-block mb-4">
                    <TbActivityHeartbeat />
                </span>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-10">
                <BlogContent
                    image="/images/heart-health-research.jpg"
                    date="12 Nov, 2024"
                    heading="New Breakthrough in Minimally Invasive Heart Surgery"
                    para="Researchers have introduced a new catheter-based technique that reduces recovery time for patients with blocked arteries. Early trials show promising outcomes with fewer complications."
                />

                <BlogContent
                    image="/images/ai-medical-diagnosis.jpg"
                    date="03 Oct, 2024"
                    heading="AI Tool Approved for Early Detection of Lung Cancer"
                    para="A newly approved AI system can analyze CT scans and detect early-stage lung cancer with over 90% accuracy, helping doctors diagnose the disease months earlier than before."
                />

                <BlogContent
                    image="/images/vaccine-updates.jpg"
                    date="18 Sep, 2024"
                    heading="Updated Vaccine Guidelines Released for Adults"
                    para="Health organizations have issued updated immunization guidelines, including boosters for RSV and recommendations for adults above 50 to strengthen protection against seasonal infections."
                />
            </div>
        </section>
    </>);
}

export default Blog

interface BlogData {
    image: string;
    date: string;
    heading: string;
    para: string;
}

const BlogContent = ({ image, date, heading, para }: BlogData) => {

    return (<>
        {/* <div className="shadow-md">
            <img src={image} alt="" className="w-full h-[250px]" />
            <div className="px-4 py-8">
                <span className="text-white bg-primary rounded-md px-3 py-2">{date}</span>
                <h4 className="text-xl hover:text-primary hover:cursor-pointer mt-3 font-semibold">{heading}</h4>
                <p className="text-gray-600 text-base mt-4">{para}</p>
            </div>
        </div> */}
        {/* <div className="relative shadow-md overflow-hidden group">
        
            <div className="absolute bottom-0 left-0 h-[3px] bg-primary w-0 transition-all duration-500 group-hover:w-full"></div>

            <img src={image} alt="" className="w-full h-[250px]" />

            <div className="px-4 py-8">
                <span className="text-white bg-primary rounded-md px-3 py-2">{date}</span>
                <h4 className="text-xl hover:text-primary hover:cursor-pointer mt-3 font-semibold">
                    {heading}
                </h4>
                <p className="text-gray-600 text-base mt-4">{para}</p>
            </div>
        </div> */}
        <div className="relative shadow-md overflow-hidden group">
            <img src={image} alt="" className="w-full h-[250px]" />

            <div className="px-4 py-8">
                <span className="text-white bg-primary rounded-md px-3 py-2">{date}</span>
                <h4 className="text-xl hover:text-primary hover:cursor-pointer mt-3 font-semibold">{heading}</h4>
                <p className="text-gray-600 text-base mt-4">{para}</p>
            </div>

            {/* Border animation from center */}
            <div className="
        absolute bottom-0 left-1/2
        h-[3px] bg-primary 
        w-0
        -translate-x-1/2
        transition-all duration-500
        group-hover:w-full
    "></div>
        </div>


    </>);
}