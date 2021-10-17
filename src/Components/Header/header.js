import { React } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";


function Header() {

    const location = useLocation();

    return (

 <div>
 <ul class="list">
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

    );
}

export default Header;