import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

function AppLayout() {
    return (
        <>
            <Header />
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout