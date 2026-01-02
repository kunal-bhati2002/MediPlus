import { NavLink } from "react-router-dom";
import DocDetails from "./DocDetails";

function AllDoctors() {
    return (
        <section className="">
            <div className="bg-[url('/images/Doctor_holding_patitent_hand.avif')] bg-center bg-no-repeat bg-cover bg-blue-600/85 bg-blend-overlay">
                <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-extrabold">Meet our Qualified Doctors</h1>
                        <pre className="pt-10 ">
                            <NavLink to="/" className="font-semibold" >Home</NavLink>  ›  Doctors
                        </pre>
                    </div>
                </div>
            </div>
            <div className="">
                <DocDetails />
            </div>
        </section>
    );
}

export default AllDoctors;