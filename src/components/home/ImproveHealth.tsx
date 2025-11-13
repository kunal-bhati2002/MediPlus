import { FaArrowAltCircleRight } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

function ImproveHealth() {

    return (<>
        <section className="container mx-auto px-4 sm:px-6 md:px-20 py-28 ">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    We Offer Different Services To Improve Your Health
                </h3>
                <span className="text-blue-500 text-4xl inline-block mb-4">
                    <TbActivityHeartbeat />
                </span>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, placeat!
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 mt-3 ">
                <div>
                    <h4 className="text-2xl font-semibold">
                        Who We Are
                    </h4>
                    <p className="my-5 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quibusdam ullam ratione ipsa maxime assumenda, explicabo quisquam provident earum suscipit.
                    </p>
                    <p className="my-3 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui!
                    </p>
                    <span className="flex items-center gap-2 font-semibold text-white ">
                        <a href="" className="transition-colors duration-200">
                            Hello
                        </a>
                        <FaArrowAltCircleRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <ul className="grid grid-cols-2 text-gray-500 gap-4">
                        <ListItems content="Hello1" />
                        <ListItems content="Hello1" />
                        <ListItems content="Hello1" />
                        <ListItems content="Hello1" />
                        <ListItems content="Hello1" />
                        <ListItems content="Hello1" />
                    </ul>
                </div>
                <div>
                    <YouTubePlayer />
                </div>
            </div>
        </section>
    </>);
}

export default ImproveHealth

interface listProps {
    content: string;
}

const ListItems = ({ content }: listProps) => {

    return (<>
        <li>
            <span className="flex items-center gap-2 font-semibold">
                <FaArrowAltCircleRight className="text-primary" />
                {content}
            </span>
        </li>
    </>);
}

function YouTubePlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
            {!isPlaying ? (
                <>
                    {/* Thumbnail */}
                    <img
                        src="/images/video-bg.jpg"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay with play button */}
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                    >
                        <FaPlay className="text-white text-5xl" />
                    </button>
                </>
            ) : (
                /* YouTube iframe when playing */
                <iframe
                    className="w-full h-full"
                    src="https://youtu.be/g-jj4KrmYPI?si=l5uQmNCC76QCuSj_"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
}