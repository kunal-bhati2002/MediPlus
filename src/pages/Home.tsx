import Banner from "../components/home/Banner";
import Card from "../components/home/Card";
import CountTimer from "../components/home/CountTimer";
import EmergencyNumber from "../components/home/EmergencyNumber";
import HelpingFamily from "../components/home/HelpingFamily";
import ImproveHealth from "../components/home/ImproveHealth";
import Portfolio from "../components/home/Portfolio";

function Home() {
    return (<>
        <Banner />
        <Card />
        <HelpingFamily />
        <CountTimer />
        <ImproveHealth />
        <EmergencyNumber />
        <Portfolio />
    </>);
}

export default Home