import { React } from "react";
import "./home.css";
import { Link, useLocation } from "react-router-dom";


function Home() {

    const location = useLocation();

    return (

        <div>

        <section id="coverImage">
           
            <div id="font">
                <h1 id="cover">MENTAL<br></br>HEALTH</h1><br></br>
            </div>
            <div>
                <h3 id="cover2">AWARENESS AND SUICIDE PREVENTION</h3>
            </div>
            
        </section>

       <section class="copy">
            <h2 id="title">About</h2>
            <h3>We Can All Prevent Suicide</h3>
            <p class="copyP">Understanding the issues concerning suicide and mental health is an important way to take part in suicide prevention, help others in crisis, and change the conversation around suicide.</p>
            <h3>Hope Can Happen</h3>
            <p class="copyP">Suicide is not inevitable for anyone. By starting the conversation, providing support, and directing help to those who need it, we can prevent suicides and save lives.</p>
            <h3>We Can All Take Action</h3>
            <p class="copyP">Evidence shows that providing support services, talking about suicide, reducing access to means of self-harm, and following up with loved ones are just some of the actions we can all take to help others.</p>
        </section>

        <section id="breaker"></section>

        <section id="section3">
            <div class="cards">
                {/* <img src="Assets/get-help.jpeg"></img> */}
                <div className="img" id="img1"></div>
                <h3>Get Help</h3>
                <p> No matter what problems you’re dealing with, whether or not you’re thinking about suicide, if you need someone to lean on for emotional support, call the Lifeline. If you’re thinking about suicide, are worried about a friend or loved one, or would like emotional support, click here for more information:</p>
                <div id="cardBtn1">
                <button>
                    <Link to="/get-help" className={location.pathname === "/get-help" ? "nav-link-footer active" : "nav-link-footer"}>
                    Go
                    </Link>
                </button>
                </div>
            </div>

            <div class="cards">
                {/* <img src="src/Pages/Assets/warning-signs.jpeg"></img> */}
                <div className="img" id="img2"></div>
                <h3>Warning Signs</h3>
                <p>Risk factors are characteristics that make it more likely that someone will consider, attempt, or die by suicide. They can't cause or predict a suicide attempt, but they're important to be aware of. Find out more here:</p>
                <div className="btnDiv">
                <button>
                    <Link to="/warning-signs" className={location.pathname === "/warning-sings" ? "nav-link-footer active" : "nav-link-footer"}>
                    Go
                    </Link>
                </button>
                </div>
            </div>
            
            <div class="cards">
                {/* <img src="Assets/how-to-help.jpeg"></img> */}
                <div className="img" id="img3"></div>
                <h3>How To Help</h3>
                <p>Everybody has a role to play in preventing suicide, and there are lots of ways you can take part. With your help, we can spread awareness about suicide prevention and mental health, and save lives. Find out more here:</p>
                <div className="btnDiv">
                <button>
                    <Link to="/how-to-help" className={location.pathname === "/how-to-help" ? "nav-link-footer active" : "nav-link-footer"}>
                    Go
                    </Link>
                </button>
                </div>
            </div>
        </section>

        

        </div>
        );
    }
    
    export default Home;
