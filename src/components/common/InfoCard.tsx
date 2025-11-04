import { FaLongArrowAltRight } from "react-icons/fa";

interface InfoCardProps {
    label: string;
    title: string;
    description: string;
    linkText: string;
    linkHref?: string;
    bgColor?: string; // Optional Tailwind class (e.g. bg-primary)
}

function InfoCard({
    label,
    title,
    description,
    linkText,
    linkHref = "#",
    bgColor = "bg-primary",
}: InfoCardProps) {
    return (
        <div
            className={`${bgColor} py-6 px-5 text-white rounded-2xl shadow-xl/30 transition-shadow duration-300 hover:relative bottom-2 `}
        >
            <p className="text-sm uppercase tracking-wide opacity-80 mb-2">{label}</p>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-base mb-5 leading-relaxed opacity-90">{description}</p>

            <span className="flex items-center gap-2 font-semibold text-white hover:text-gray-200 cursor-pointer group">
                <a href={linkHref} className="transition-colors duration-200">
                    {linkText}
                </a>
                <FaLongArrowAltRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
        </div>
    );
}

export default InfoCard;
