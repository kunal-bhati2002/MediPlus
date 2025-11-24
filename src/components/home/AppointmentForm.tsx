import { useState } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";

function AppointmentForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [dept, setDept] = useState("");


    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const contactData = {
            username,
            email,
            message,
        };

        console.log(contactData);
    }
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
            <div className="flex gap-6">
                <form onSubmit={handleFormSubmit} className="">
                    <div>
                        <input
                            type="text"
                            name="username"
                            autoComplete="off"
                            required
                            placeholder="Name"
                            className="border border-gray-600"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                            placeholder="Email"
                            className="border border-gray-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                            placeholder="Phone"
                            className="border border-gray-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <select
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            className="rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-blue-600 focus:ring-blue-600"
                        // className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                        >
                            <option value="">Select…</option>
                            <option value="it">IT</option>
                            <option value="cse">CSE</option>
                            <option value="ece">ECE</option>
                        </select>
                    </div>
                    <div>
                        <select
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            className="rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-blue-600 focus:ring-blue-600"
                        // className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                        >
                            <option value="">Select…</option>
                            <option value="it">IT</option>
                            <option value="cse">CSE</option>
                            <option value="ece">ECE</option>
                        </select>
                        <input
                            type="text"
                            name="messgae"
                            autoComplete="off"
                            required
                            placeholder="Date"
                            className="border border-gray-600"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div>
                        <textarea
                            placeholder="message"
                            rows={5}
                            className="border border-gray-600 w-full"
                        />
                    </div>

                    <button type="submit" className='bg-orange-600 text-white text-sm p-1 rounded-[5px] m-5'>Send Message</button>
                </form>
                <div>
                    <p>Lorem ipsum dolor sit amet co</p>
                </div>
            </div>
        </section>
    </>);
}

export default AppointmentForm