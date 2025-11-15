import { TbActivityHeartbeat } from "react-icons/tb";
import DepartmentTabs from "./DepartmentTabs";

function Departments() {

    return (<>
        <section className="container mx-auto py-20">
            <div className="px-8 text-center mb-9">
                <h3 className=" text-3xl font-bold mb-4">We Offer Different Departments To Diagnose Your Diseases</h3>
                <span className="text-primary text-4xl inline-block mb-4">
                    <TbActivityHeartbeat />
                </span>
            </div>
            <div>
                <DepartmentTabs />
            </div>
        </section>
    </>);
}

export default Departments