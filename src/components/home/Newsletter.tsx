// import Button from "../common/Button";

// function Newsletter() {
//     return (<>
//         <section className="container mx-auto py-20 px-4 sm:px-8 lg:px-12 flex bg-[#edf2ff] ">
//             <div className=" w-full px-28">
//                 <h3 className="text-xl font-semibold mb-4">Sign up for newsletter</h3>
//                 <p className="text-gray-600">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//             </div>
//             <div className="w-full">
//                 <form className="flex gap-3">
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="px-3 py-2 rounded-md text-gray-900 focus:outline-none border border-gray-300"
//                     />
//                     <Button
//                         variant="primary"
//                         size="md"
//                     >
//                         Subscribe
//                     </Button>
//                 </form>
//             </div>
//         </section>
//     </>);
// }

// export default Newsletter

import { useState } from "react";
import Button from "../common/Button";

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed with:", email);
        // Add your subscription API logic here
        setEmail("");
    };

    return (
        <section className="container mx-auto py-20 px-4 sm:px-8 lg:px-12 bg-[#edf2ff] rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="w-full md:w-1/2 px-4 md:px-0">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        Sign up for our Newsletter
                    </h3>
                    <p className="text-gray-600">
                        Stay updated with the latest medical news and special offers.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <form
                        className="flex gap-3 flex-col sm:flex-row"
                        onSubmit={handleSubscribe}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="px-4 py-3 rounded-md text-gray-900 focus:outline-none border border-gray-300 w-full flex-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button variant="primary" size="md" className="w-full sm:w-auto">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;