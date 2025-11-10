// import Button from "../common/Button";

// function EmergencyNumber() {
//     return (<>
//         <section className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center bg-[url('/images/MRI_scan_photo.webp')] bg-fixed bg-no-repeat bg-cover bg-primary bg-blend-overlay">
//             <div className="text-white w-[40%] mx-auto">
//                 <h3>DO you need Emergency Medical Care?</h3>
//                 <p>Call @ 1234 56789</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati delectus magni?</p>
//                 <div className="flex gap-4">
//                     <Button  variant="primary" >
//                         Contact Now
//                     </Button>
//                     <Button className="">
//                         Learn More
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     </>);
// }
// export default EmergencyNumber

// import Button from "../common/Button";

// function EmergencyNumber() {
//   return (
//     <section
//       className="relative bg-[url('/images/MRI_scan_photo.webp')] bg-cover bg-center bg-no-repeat py-28"
//     >
//       {/* Blue Overlay */}
//       <div className="absolute inset-0 bg-primary/80"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-20 text-center text-white">
//         <h3 className="text-3xl md:text-4xl font-bold mb-4">
//           Do you need Emergency Medical Care? <br />
//           Call @ 1234 56789
//         </h3>
//         <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.
//         </p>

//         <div className="flex justify-center gap-4 flex-wrap">
//           <Button variant="primary" size="md" className="w-auto px-6">
//             Contact Now
//           </Button>
//           <Button variant="primary-dark" size="md" className="w-auto px-6 border border-white hover:bg-white hover:text-primary">
//             Learn More →
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default EmergencyNumber;


import Button from "../common/Button";

function EmergencyNumber() {
    return (
        <section
            className="relative h-[80vh] flex items-center justify-center bg-[url('/images/MRI_scan_photo.webp')] bg-cover bg-center bg-no-repeat"
        >
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-600/85"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10 w-[90%] md:w-[45%]">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-snug">
                    Do you need <span className="text-white">Emergency Medical Care?</span>
                    <br />
                    Call @ 1234 56789
                </h3>
                <p className="text-white/90 mb-8 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <Button
                        variant="custom"
                        className="bg-white text-primary hover:bg-primary hover:text-white w-auto px-6 font-semibold"
                    >
                        Contact Now
                    </Button>

                    <Button
                        variant="custom"
                        className="bg-transparent border border-white hover:bg-white hover:text-primary w-auto px-6 font-semibold"
                    >
                        Learn More →
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default EmergencyNumber;
