import { useState } from "react";
import { departments } from "../../data/departments";

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
    icon: string;
    content: DepartmentContent;
}

export default function DepartmentTabs() {
    const [active, setActive] = useState("cardiac");
    const selected = departments.find((d) => d.id === active);

    return (
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16">

            {/* ------- TAB MENU (Responsive) ------- */}
            <div
                className="
                    grid grid-cols-2 
                    sm:grid-cols-3 
                    md:grid-cols-5 
                    gap-4 sm:gap-6 
                    text-center mb-10
                "
            >
                {departments.map((dept) => (
                    <button
                        key={dept.id}
                        onClick={() => setActive(dept.id)}
                        className={`
                            flex flex-col items-center py-4 transition rounded-xl
                            border md:border-none
                            ${active === dept.id ? "text-blue-600 bg-blue-50 md:bg-transparent" : "text-gray-600 bg-white"}
                        `}
                    >
                        <span className="text-3xl sm:text-4xl md:text-5xl">{dept.icon}</span>

                        <p className="font-semibold mt-2 text-sm sm:text-base">
                            {dept.title}
                        </p>

                        <p className="text-xs sm:text-sm text-gray-400">
                            {dept.subtitle}
                        </p>

                        {active === dept.id && (
                            <div className="hidden md:block h-[2px] w-20 bg-blue-500 mt-3 mx-auto" />
                        )}
                    </button>
                ))}
            </div>

            {/* ------- CONTENT SECTION ------- */}
            {selected && (
                <div className="grid md:grid-cols-2 items-center gap-10 mt-12">

                    {/* Left Text Section */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            {selected.title}
                        </h2>

                        <p className="text-blue-600 italic mb-4 text-sm sm:text-base">
                            {selected.content.quote}
                        </p>

                        <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                            {selected.content.desc}
                        </p>

                        <ul className="space-y-3">
                            {selected.content.points.map((point, i) => (
                                <li key={i} className="flex items-start text-sm sm:text-base">
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
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>
            )}
        </section>
    );
}
