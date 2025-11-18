// import React from "react";

// interface ButtonProps {
//     variant?: "primary" | "primary-dark" | "custom";
//     size?: "sm" | "md" | "lg";
//     children: React.ReactNode;
//     onClick?: () => void;
//     className?: string;
// }

// const Button: React.FC<ButtonProps> = ({
//     variant = "primary",
//     size = "md",
//     children,
//     onClick,
//     className = "",
// }) => {
//     const baseStyle = "rounded-sm font-medium transition-colors duration-200";

//     // 🟩 Variant styles
//     const variantStyle =
//         variant === "primary"
//             ? "bg-primary hover:bg-primary-dark text-white"
//             : variant === "primary-dark"
//                 ? "bg-primary-dark hover:bg-primary text-white"
//                 : "";

//     // 📏 Size styles
//     const sizeStyle =
//         size === "sm"
//             ? "px-3 py-1 text-sm"
//             : size === "lg"
//                 ? "px-6 py-3 text-lg"
//                 : "px-4 py-2 text-base"; // default: md

//     return (
//         <button
//             onClick={onClick}
//             className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;
import React from "react";

interface ButtonProps {
    variant?: "primary" | "primary-dark" | "custom";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    children,
    onClick,
    className = "",
}) => {

    const sizeStyle =
        size === "sm"
            ? "px-3 py-1 text-sm"
            : size === "lg"
                ? "px-6 py-3 text-lg"
                : "px-4 py-2 text-base";

    // **Default background**
    const baseBg =
        variant === "primary"
            ? "bg-primary"
            : variant === "primary-dark"
                ? "bg-primary-dark"
                : "bg-black";

    // **Hover animation background**
    const hoverBg =
        variant === "primary"
            ? "bg-primary-dark"
            : variant === "primary-dark"
                ? "bg-primary"
                : "bg-gray-800";

    return (
        <button
            onClick={onClick}
            className={`
                group 
                relative overflow-hidden
                rounded-sm font-medium 
                text-white
                ${baseBg}
                ${sizeStyle}
                ${className}
            `}
        >

            {/* ANIMATED LAYER */}
            <span
                className={`
                    absolute inset-0 ${hoverBg}
                    w-0 left-1/2 -translate-x-1/2
                    group-hover:w-full
                    transition-all duration-500
                    z-0
                `}
            ></span>

            {/* TEXT */}
            <span className="relative z-10">
                {children}
            </span>

        </button>
    );
};

export default Button;