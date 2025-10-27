import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="flex justify-between items-center py-3 px-[8%] max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">MEDIPLUS</h1>

        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-6 md:gap-10 text-black font-medium">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Doctor</NavLink></li>
            <li><NavLink to="/">Services</NavLink></li>
            <li><NavLink to="/">Pages</NavLink></li>
            <li><NavLink to="/">Blogs</NavLink></li>
            <li><NavLink to="/">Contact Us</NavLink></li>
          </ul>

          <NavLink to="">
            <button className="bg-primary px-6 py-2 ml-5 rounded text-white font-semibold hover:bg-primary-dark transition">
              Appointment
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;