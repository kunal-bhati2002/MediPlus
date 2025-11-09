// import { useState, type JSX } from "react";
// import { FaHouseChimneyMedical } from "react-icons/fa6";

// function CountTimer() {
//     return (<>
//         <section className="">
//             <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center grid grid-cols-4 gap-3">
//                 <Timer icon={<FaHouseChimneyMedical />} count={20} countInfo="Hospital Rooms" />
//                 <Timer icon={<FaHouseChimneyMedical />} count={20} countInfo="Hospital Rooms" />
//                 <Timer icon={<FaHouseChimneyMedical />} count={20} countInfo="Hospital Rooms" />
//                 <Timer icon={<FaHouseChimneyMedical />} count={20} countInfo="Hospital Rooms" />
//             </div>
//         </section>
//     </>);
// }

// export default CountTimer

// interface CountProps {
//     icon: JSX.Element;
//     count: number;
//     countInfo: string;
// }

// const Timer = ({ icon, count, countInfo }: CountProps) => {

//     const [value, setValue] = useState(0);

//     const ChangeCount = () => {
//         // let changedTimer = timer + 1;

//         // setTimer = changedTimer;
//         console.log("Hello");

//         for (let i = 0; i <= count; i++) {
//             setValue(() => value + 1);
//         }
//         console.log(value);

//     }

//     return (<>
//         <div className="gird gird-cols-2 gap-0" onClick={ChangeCount}>
//             <span>{icon}</span>
//             <div className="">
//                 <p>{count}</p>
//                 <p>{countInfo}</p>
//             </div>
//         </div>

//     </>);
// }

// import { useState, useEffect, type JSX } from "react";
// import { FaHouseChimneyMedical } from "react-icons/fa6";

// function CountTimer() {
//     return (
//         <section className="bg-[url('/images/Doctor_holding_patitent_hand.avif')] bg-center bg-no-repeat bg-cover bg-primary bg-blend-overlay">
//             <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center grid grid-cols-4 gap-3">
//                 <Timer icon={<FaHouseChimneyMedical />} count={3468} countInfo="Hospital Rooms" />
//                 <Timer icon={<FaHouseChimneyMedical />} count={557} countInfo="Specialist Doctors" />
//                 <Timer icon={<FaHouseChimneyMedical />} count={4379} countInfo="Happy Patients" />
//                 <Timer icon={<FaHouseChimneyMedical />} count={32} countInfo="Years of Experience" />
//             </div>
//         </section>
//     );
// }

// export default CountTimer;

// interface CountProps {
//     icon: JSX.Element;
//     count: number;
//     countInfo: string;
// }

// const Timer = ({ icon, count, countInfo }: CountProps) => {
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const duration = 2000; // total time (ms)
//         const stepTime = Math.floor(duration / count);

//         const timer = setInterval(() => {
//             start += 1;
//             setValue(start);
//             if (start === count) clearInterval(timer);
//         }, stepTime);

//         return () => clearInterval(timer);
//     }, [count]);

//     return (
//         <div className="grid grid-cols-2 gap-2 text-center text-white">
//             <span className="flex justify-center text-4xl ">{icon}</span>
//             <div>
//                 <p className="text-3xl font-bold">{value}</p>
//                 <p className="">{countInfo}</p>
//             </div>
//         </div>
//     );
// };


import { useState, useEffect, type JSX } from "react";
import { FaCalendarAlt, FaRegSmileBeam } from "react-icons/fa";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";

function CountTimer() {
    return (
        <section className="bg-[url('/images/Doctor_holding_patitent_hand.avif')] bg-center bg-no-repeat bg-cover bg-primary bg-blend-overlay">
            <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center grid grid-cols-4 gap-3">
                <Timer icon={<FaHouseChimneyMedical />} count={3468} countInfo="Hospital Rooms" />
                <Timer icon={<GoPersonFill />} count={557} countInfo="Specialist Doctors" />
                <Timer icon={<FaRegSmileBeam />} count={4379} countInfo="Happy Patients" />
                <Timer icon={<FaCalendarAlt />} count={32} countInfo="Years of Experience" />
            </div>
        </section>
    );
}

export default CountTimer;

interface CountProps {
    icon: JSX.Element;
    count: number;
    countInfo: string;
}

const Timer = ({ icon, count, countInfo }: CountProps) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const duration = 2000; // total animation time (2s)
        const frameRate = 30; // 30 updates per second
        const totalFrames = Math.round(duration / (1000 / frameRate));
        const increment = count / totalFrames;

        let currentFrame = 0;

        const counter = setInterval(() => {
            currentFrame++;
            const newValue = Math.round(increment * currentFrame);
            setValue(newValue >= count ? count : newValue);

            if (currentFrame >= totalFrames) clearInterval(counter);
        }, 1000 / frameRate);

        return () => clearInterval(counter);
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center text-white group transition-all duration-300 hover:scale-105">
            {/* Icon circle */}
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full border-2 border-white text-4xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:shadow-lg">
                {icon}
            </div>

            {/* Counter & Label */}
            <div className="text-center space-y-1">
                <p className="text-3xl font-extrabold tracking-tight">{value}</p>
                <p className="text-sm uppercase tracking-widest text-white/80">{countInfo}</p>
            </div>
        </div>

    );
};
