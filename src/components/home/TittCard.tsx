// import { useRef } from "react";

// import React from "react";

// export default function TiltCard({ src, alt }:any) {
//     const cardRef = useRef(null);

//     const handleMouseMove = (e:any) => {
//         const card = cardRef.current;
//         const rect = card.getBoundingClientRect();

//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const midX = rect.width / 2;
//         const midY = rect.height / 2;

//         const rotateX = (y - midY) / 12;
//         const rotateY = (midX - x) / 12;

//         card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     };

//     const handleMouseLeave = () => {
//         const card = cardRef.current;
//         card.style.transform = "rotateX(0deg) rotateY(0deg)";
//     };

//     return (
//         <div
//             className="
//         w-full h-full rounded-3xl overflow-hidden 
//         bg-white/10 backdrop-blur-xl shadow-2xl
//         cursor-pointer 
//         transition-transform duration-200 ease-out
//       "
//             style={{ transformStyle: "preserve-3d" }} // IMPORTANT
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
//             <img
//                 src={src}
//                 alt={alt}
//                 className="w-full h-full object-cover pointer-events-none"
//             />
//         </div>
//     );
// }
// const { useState, useEffect } = React;

// export const TiltCard = () => {
//     const [mouse, setMouse] = useState({ x: 0, y: 0 });
//     const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

//     // Configurable state
//     const [cardWidth, setCardWidth] = useState(300);
//     const [cardHeight, setCardHeight] = useState(400);
//     const [tiltStrength, setTiltStrength] = useState(100);
//     const [cardColor, setCardColor] = useState("#222");
//     const [bgGradient, setBgGradient] = useState("linear-gradient(135deg, #1a1a1a, #111)");
//     const [cursorColor, setCursorColor] = useState("#00ffcc");

//     useEffect(() => {
//         const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
//         const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

//         window.addEventListener("mousemove", handleMove);
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("mousemove", handleMove);
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     // Calculate rotation for card
//     const rotateX = ((mouse.y / windowSize.height) - 0.5) * tiltStrength;
//     const rotateY = ((mouse.x / windowSize.width) - 0.5) * tiltStrength;

//     return (
//         <div style={{
//             width: "100vw",
//             height: "100vh",
//             background: bgGradient,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             perspective: "1000px",
//             overflow: "hidden",
//             position: "relative",
//             color: "#fff",
//             fontFamily: "sans-serif"
//         }}>

//             {/* 3D Card */}
//             <div style={{
//                 width: `${cardWidth}px`,
//                 height: `${cardHeight}px`,
//                 background: cardColor,
//                 borderRadius: "20px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontSize: "24px",
//                 transformStyle: "preserve-3d",
//                 transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
//                 transition: "transform 0.1s ease-out",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
//             }}>
//                 3D Parallax Card
//             </div>

//             {/* Cursor circle */}
//             <div style={{
//                 position: "fixed",
//                 left: mouse.x - 10,
//                 top: mouse.y - 10,
//                 width: "20px",
//                 height: "20px",
//                 borderRadius: "50%",
//                 background: cursorColor,
//                 pointerEvents: "none",
//                 zIndex: 9999,
//                 transform: "translateZ(0)"
//             }} />

//             {/* Control Panel */}
//             <div style={{
//                 position: "absolute",
//                 top: 10,
//                 left: 10,
//                 background: "#222",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 zIndex: 1
//             }}>
//                 <div style={{ marginBottom: "8px" }}>Customise 3D Parallax:</div>

//                 <div>
//                     <label>Card Width: </label>
//                     <input type="range" min="100" max="600" value={cardWidth} onChange={(e) => setCardWidth(Number(e.target.value))} />
//                 </div>
//                 <div>
//                     <label>Card Height: </label>
//                     <input type="range" min="100" max="600" value={cardHeight} onChange={(e) => setCardHeight(Number(e.target.value))} />
//                 </div>
//                 <div>
//                     <label>Tilt Strength: </label>
//                     <input type="range" min="5" max="50" value={tiltStrength} onChange={(e) => setTiltStrength(Number(e.target.value))} />
//                 </div>
//                 <div>
//                     <label>Card Colour: </label>
//                     <input type="color" value={cardColor} onChange={(e) => setCardColor(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Background: </label>
//                     <input type="color" value={bgGradient.split(",")[1].trim().slice(0, -1)} onChange={(e) => setBgGradient(`linear-gradient(135deg, #1a1a1a, ${e.target.value})`)} />
//                 </div>
//                 <div>
//                     <label>Cursor Colour: </label>
//                     <input type="color" value={cursorColor} onChange={(e) => setCursorColor(e.target.value)} />
//                 </div>
//             </div>

//             {/* Explanation Text */}
//             <div style={{
//                 position: "absolute",
//                 bottom: 20,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 fontSize: "16px",
//                 opacity: 0.7,
//                 textAlign: "center"
//             }}>
//                 Move your mouse to tilt the card in 3D! Customise sizes, colours, and tilt strength using the panel.
//             </div>
//         </div>
//     );
// };

// ReactDOM.render(<ParallaxCursor />, document.getElementById("root"));

// import { useState, useEffect } from "react";

// export const TiltCard = () => {
//     const [mouse, setMouse] = useState({ x: 0, y: 0 });
//     const [windowSize, setWindowSize] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight
//     });

//     useEffect(() => {
//         const handleMove = (e:any) => setMouse({ x: e.clientX, y: e.clientY });
//         const handleResize = () =>
//             setWindowSize({ width: window.innerWidth, height: window.innerHeight });

//         window.addEventListener("mousemove", handleMove);
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("mousemove", handleMove);
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     // Simple tilt calculation (fixed strength)
//     const rotateX = ((mouse.y / windowSize.height) - 0.5) * 20;
//     const rotateY = ((mouse.x / windowSize.width) - 0.5) * 20;

//     return (
//         <div
//             style={{
//                 width: "100vw",
//                 height: "100vh",
//                 background: "#0e0e0e",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 perspective: "1000px",
//                 overflow: "hidden"
//             }}
//         >
//             <div
//                 style={{
//                     width: "300px",
//                     height: "400px",
//                     background: "#222",
//                     borderRadius: "20px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: "24px",
//                     transformStyle: "preserve-3d",
//                     transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
//                     transition: "transform 0.1s ease-out",
//                     boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
//                 }}
//             >
//                 3D Tilt Card
//             </div>
//         </div>
//     );
// };
