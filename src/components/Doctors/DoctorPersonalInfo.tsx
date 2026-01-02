import { useParams } from "react-router-dom";
import { doctors } from "../../data/doctors";
import { MdEmail, MdLocalPhone } from "react-icons/md";

function DoctorPersonalInfo() {
    const { slug } = useParams();

    const doctor = doctors.find((doc) => doc.slug === slug);

    if (!doctor) {
        return <p>Doctor not found</p>;
    }

    return (<>
        <div className="container mx-auto px-4 sm:px-6 md:px-20 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT CARD */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <img
                        src={doctor.profileImage}
                        alt={doctor.name}
                        className="w-full object-contain rounded-lg mb-6"
                    />

                    <h4 className="text-xl font-semibold mb-3">Contact Info</h4>

                    <p className="flex items-center gap-2 text-gray-600 mb-2">
                        <MdLocalPhone className="text-blue-600" />
                        {doctor.contact.phone}
                    </p>

                    <p className="flex items-center gap-2 text-gray-600 mb-4">
                        <MdEmail className="text-blue-600" />
                        {doctor.contact.email}
                    </p>

                    <h4 className="text-xl font-semibold mt-6 mb-2">Working Schedule</h4>
                    <p className="text-gray-600">
                        <span className="font-medium">Days:</span>{" "}
                        {doctor.availability.days.join(", ")}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Time:</span>{" "}
                        {doctor.availability.time}
                    </p>
                </div>

                {/* RIGHT CARD */}
                <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-8">
                    <h1 className="text-3xl font-bold mb-1">{doctor.name}</h1>
                    <p className="text-blue-600 font-medium mb-6">
                        {doctor.specialty}
                    </p>

                    <h2 className="text-xl font-semibold mb-2">About</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {doctor.about}
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        {doctor.qualifications.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Services</h2>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        {doctor.services.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                        <p>
                            <span className="font-semibold">Languages:</span>{" "}
                            {doctor.languages.join(", ")}
                        </p>
                        <p>
                            <span className="font-semibold">Experience:</span>{" "}
                            {doctor.experienceYears} years
                        </p>
                        <p>
                            <span className="font-semibold">Consultation Fee:</span>{" "}
                            ₹{doctor.consultationFee}
                        </p>
                        <p>
                            <span className="font-semibold">Rating:</span>{" "}
                            ⭐ {doctor.rating}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default DoctorPersonalInfo;