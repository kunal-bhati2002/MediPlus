import Banner from "../components/home/Banner";
import Card from "../components/home/Card";
import CountTimer from "../components/home/CountTimer";
import Departments from "../components/home/Departments";
import EmergencyNumber from "../components/home/EmergencyNumber";
import HelpingFamily from "../components/home/HelpingFamily";
import ImproveHealth from "../components/home/ImproveHealth";
import Portfolio from "../components/home/Portfolio";
import Pricing from "../components/home/Pricing";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

function Home() {
    return (<>
        <Banner />
        <Card />
        <HelpingFamily />
        <CountTimer />
        <ImproveHealth />
        <EmergencyNumber />
        <Portfolio />
        <Services />
        <Testimonials />
        <Departments />
        <Pricing />
    </>);
}

export default Home