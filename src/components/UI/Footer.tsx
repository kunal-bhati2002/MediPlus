import { FaFacebook, FaGooglePlusG, FaPinterestP, FaSquareTwitter, FaVimeoV } from "react-icons/fa6";

function Footer() {
    return (<>
        <footer>
            <section className="container grid grid-cols-4 gap-5">
                <div>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat quos aut voluptate, accusamus aperiam dolore maiores cupiditate molestias incidunt!</p>
                    <ul className="flex gap-5">
                        <li><span><FaFacebook /></span></li>
                        <li><span><FaSquareTwitter /></span></li>
                        <li><span><FaPinterestP /></span></li>
                        <li><span><FaGooglePlusG /></span></li>
                        <li><span><FaVimeoV /></span></li>
                    </ul>
                </div>
                <div>
                    <h2>Quick Links</h2>
                </div>
                <div>
                    <h2>Open Hours</h2>
                </div>
                <div>
                    <h2>Newsletter</h2>
                </div>
            </section>
        </footer>
    </>);
}

export default Footer