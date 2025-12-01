import { useState } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import Button from "../common/Button";

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
        <section className="container mx-auto pt-20 px-4 sm:px-8 lg:px-12 ">
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
                <form onSubmit={handleFormSubmit} className="w-full px-20 flex flex-col gap-6 pt-10">
                    <div className="flex gap-6">
                        <input
                            type="text"
                            name="username"
                            autoComplete="off"
                            required
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-md px-6 py-3"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                            placeholder="Email"
                            className="border border-gray-300 rounded-md px-6 py-3 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="flex gap-6">
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                            placeholder="Phone"
                            className="border border-gray-300 rounded-md px-6 py-3 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <select
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            className="rounded-md border border-gray-300 px-6 py-3 bg-white focus:border-blue-600 focus:ring-blue-600 w-full text-gray-600"
                        >
                            <option value="">Department</option>
                            <option value="cardiac">Cardiac Clinic</option>
                            <option value="neuro">Neurology</option>
                            <option value="denti">Dentistry</option>
                            <option value="gastro">Gastroenterology</option>
                        </select>
                    </div>
                    <div className="flex gap-6">
                        <select
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            className="rounded-md border border-gray-300 px-6 py-3 bg-white focus:border-blue-600 focus:ring-blue-600 w-full"
                        >
                            <option value="">Select…</option>
                            <option value="d1">Dr. 1</option>
                            <option value="d2">Dr. 2</option>
                            <option value="d3">Dr. 3</option>
                        </select>
                        <input
                            type="text"
                            name="messgae"
                            autoComplete="off"
                            required
                            placeholder="Date"
                            className="border border-gray-300 rounded-md px-6 py-3 w-full"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div>
                        <textarea
                            placeholder="message"
                            rows={5}
                            className="border border-gray-300 rounded-md px-6 py-3 w-full"
                        />
                    </div>
                    <div className="flex gap-16">
                        <Button >Type your message here...</Button>
                        <p className="text-gray-400 pt-2">(We will confirm by a text message)</p>
                    </div>
                </form>

                <div className="w-full">
                    <img src="../images/contact-form-img.png" alt="" className="bg-cover bg-center" />
                </div>
            </div>
        </section>
    </>);
}

export default AppointmentForm