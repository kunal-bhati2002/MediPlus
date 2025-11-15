import { useState } from "react";
import { departments } from "../../data/departments"

export interface DepartmentContent {
    quote: string;
    desc: string;
    points: string[];
    image: string;
}

export interface Department {
    id: string;
    title: string;
    subtitle: string;
    icon: string; // or React.ReactNode if using react-icons
    content: DepartmentContent;
}

export default function DepartmentTabs() {
    const [active, setActive] = useState("cardiac");
    const selected = departments.find((d) => d.id === active);

    return (
        <section className="container mx-auto px-6 py-16">

            {/* ------- TAB MENU ------- */}
            <div className="grid grid-cols-5 gap-6 text-center mb-10">
                {departments.map((dept) => (
                    <button
                        key={dept.id}
                        onClick={() => setActive(dept.id)}
                        className={`flex flex-col items-center py-4 transition ${active === dept.id ? "text-blue-600" : "text-gray-600"
                            }`}
                    >
                        <span className="text-5xl">{dept.icon}</span>

                        <p className="font-semibold mt-2">{dept.title}</p>
                        <p className="text-sm text-gray-400">{dept.subtitle}</p>

                        {active === dept.id && (
                            <div className="h-[2px] w-20 bg-blue-500 mt-3 mx-auto" />
                        )}
                    </button>
                ))}
            </div>

            {/* ------- CONTENT SECTION ------- */}
            {selected && (
                <div className="grid md:grid-cols-2 items-center gap-10 mt-12">

                    {/* Left Text Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
                        <p className="text-blue-600 italic mb-4">{selected.content.quote}</p>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {selected.content.desc}
                        </p>

                        <ul className="space-y-3">
                            {selected.content.points.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-blue-600 mt-1 mr-2">✔</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <img
                        src={selected.content.image}
                        alt={selected.title}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            )}
        </section>
    );
}

