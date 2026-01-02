import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoReorderThreeOutline, IoCloseOutline } from "react-icons/io5";
import Button from "../common/Button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Medical Services", path: "/" },
    { name: "Departments", path: "/" },
    { name: "Health Articles", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50 ">
      <nav className="container mx-auto px-4 sm:px-6 md:px-20 flex justify-between items-center py-3">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
          Mediplus Hospital
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3 text-sm lg:gap-5 lg:text-base text-gray-700 font-medium xl:text-lg xl:gap-7">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-primary transition ${isActive ? "text-primary" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink to="/">
              <Button variant="primary">Book Appointment</Button>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <IoCloseOutline size={28} /> : <IoReorderThreeOutline size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden flex flex-col items-center gap-4 text-gray-800 font-medium bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out
        ${menuOpen
            ? "max-h-[400px] opacity-100 translate-y-0 py-6"
            : "max-h-0 opacity-0 -translate-y-4 py-0"
          }`}
      >
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Our Doctors</NavLink></li>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Medical Services</NavLink></li>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Departments</NavLink></li>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Health Articles</NavLink></li>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <button className="bg-primary px-6 py-2 rounded text-white font-semibold hover:bg-primary-dark transition">
              Book Appointment
            </button>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
