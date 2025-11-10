import { FaFacebook, FaGooglePlusG, FaPinterestP, FaSquareTwitter, FaVimeoV } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 w-full">
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-10">

                {/* About Us */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">About MediPlus</h2>
                    <p className="text-sm leading-relaxed mb-5">
                        MediPlus is a trusted healthcare center offering top-quality medical care with compassion.
                        Our team of expert doctors, nurses, and staff ensures every patient receives personalized attention,
                        advanced treatment, and a comforting experience in every visit.
                    </p>
                    <ul className="flex flex-wrap gap-4 text-lg">
                        <li className="hover:text-blue-500 transition"><FaFacebook /></li>
                        <li className="hover:text-sky-400 transition"><FaSquareTwitter /></li>
                        <li className="hover:text-red-500 transition"><FaPinterestP /></li>
                        <li className="hover:text-rose-600 transition"><FaGooglePlusG /></li>
                        <li className="hover:text-blue-400 transition"><FaVimeoV /></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <div className="grid grid-cols-2 gap-x-4">
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="hover:text-blue-500 transition">Home</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-blue-500 transition">About Us</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-blue-500 transition">Services</NavLink></li>
                            <li><NavLink to="/departments" className="hover:text-blue-500 transition">Departments</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-blue-500 transition">Contact</NavLink></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><NavLink to="/appointments" className="hover:text-blue-500 transition">Appointments</NavLink></li>
                            <li><NavLink to="/doctors" className="hover:text-blue-500 transition">Our Doctors</NavLink></li>
                            <li><NavLink to="/testimonials" className="hover:text-blue-500 transition">Testimonials</NavLink></li>
                            <li><NavLink to="/faqs" className="hover:text-blue-500 transition">FAQs</NavLink></li>
                            <li><NavLink to="/blog" className="hover:text-blue-500 transition">Health Blog</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Open Hours */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Open Hours</h2>
                    <ul className="text-sm space-y-2">
                        <li>Monday – Friday: 8:00 AM – 8:00 PM</li>
                        <li>Saturday: 9:00 AM – 5:00 PM</li>
                        <li>Sunday: Emergency Only</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Newsletter</h2>
                    <p className="text-sm mb-4">
                        Subscribe to our newsletter to receive health tips, special offers, and the latest news from MediPlus.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none"
                        />
                        <Button
                            variant="primary"
                        >
                            Subscribe

                        </Button>
                    </form>
                </div>
            </section>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} MediPlus Hospital. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;