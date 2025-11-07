// import { FaLongArrowAltRight } from "react-icons/fa";

// function Card() {
//     return (<>
//         <section className=" container mx-auto grid grid-cols-3">
//             <div className="bg-primary py-4 px-3 text-white">
//                 <p className="text-sm">Lorem, ipsum.</p>
//                 <h3 className="text-xl font-medium">Emergency Cases</h3>
//                 <p className="text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum excepturi perspiciatis officia nulla!</p>

//                 <a href="#"><span> LEARN MORE<FaLongArrowAltRight /></span></a>
//             </div>
//         </section>
//     </>);
// }

// export default Card

import InfoCard from "../common/InfoCard";

function CardSection() {
    return (
        <section className="container mx-auto sm:px-6 md:px-20 grid md:grid-cols-3 gap-6 px-4">
            <InfoCard
                label="24/7 Support"
                title="Emergency Cases"
                description="Our emergency department is open around the clock for immediate medical attention. Contact us anytime for urgent care and ambulance services."
                linkText="LEARN MORE"
                className="relative bottom-28 transform hover:-translate-y-2.5 transition-transform duration-200 hover:shadow-2xl hover:shadow-primary"
            />

            <InfoCard
                label="Schedule"
                title="Doctors Timetable"
                description="Check out our weekly doctors’ schedule and book your appointment in advance. Specialists are available Monday to Saturday from 9:00 AM to 8:00 PM."
                linkText="VIEW SCHEDULE"
                className="relative bottom-28 transform hover:-translate-y-2.5 transition-transform duration-200 hover:shadow-2xl hover:shadow-primary"
            />

            <InfoCard
                label="Timings"
                title="Opening Hours"
                description="Our hospital is open every day for your convenience. Regular OPD: Mon–Sat 8:00 AM – 8:00 PM, Sunday 9:00 AM – 4:00 PM."
                linkText="CONTACT US"
                className="relative bottom-28 transform hover:-translate-y-2.5 transition-transform duration-200 hover:shadow-2xl hover:shadow-primary"
            />
        </section>
    );
}

export default CardSection;
