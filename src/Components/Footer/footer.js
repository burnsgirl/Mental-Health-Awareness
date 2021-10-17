import { React } from "react";
import "./footer.css";
   
  

function Footer() {

    return (


    <footer>
                <div id="footer">
                    <h3 id="phoneNumber">National Suicide Prevention Lifeline: 800-273-8255</h3>
                    <ul class="list" id="footerList">
                    <li class="nav" >
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                        </Link>
                    </li>

                    <li class="nav">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About
                        </Link>
                    </li>

                    <li class="nav" >
                        <Link to="/resources" className={location.pathname === "/resources" ? "nav-link active" : "nav-link"}>
                        Resources
                        </Link>
                    </li>

                    <li class="nav">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact Us
                        </Link>
                    </li>       
                    </ul>
                </div>
                <h3>© The Developer Group</h3>
        </footer>

    );
}

export default Footer;