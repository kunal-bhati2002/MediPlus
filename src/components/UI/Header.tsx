import { NavLink } from "react-router-dom";

function Header() {
    return (<>
        <header className="">
            <nav className="grid grid-cols-[1fr,2fr] sm:flex-row justify-between items-center py-3 px-[8%] max-w-7xl mx-auto transition-all duration-300">
                <h1>MEDIPLUS</h1>

                <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6 md:gap-10">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Doctor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Pages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <button className="bg-blue-500 px-2 py-1 text-white hover:bg-blue-900">
                                Appointment
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>);
}

export default Header