import { React } from "react";
import "./contact.css";



function Contact() {

    return (

    <div className="containercontact">

            <form id="formcontact" action="mailto:burnsgirlphotos@gmail.com" method="post" enctype="text/plain">

            <div>
                <h2 id="contact">Contact Us</h2>
            </div>

            <label className="title" htmlFor="fname">
                Name:
            </label>

            <input
                className="inputContact"
                type="text"
                id="fname"
                name="firstname"
                placeholder="your name..."
            ></input>

            <label className="title" htmlFor="lname">
                Email:
            </label>

            <input
                className="inputContact"
                type="text"
                id="eMail"
                name="email"
                placeholder="your email..."
            ></input>

            <label className="title" htmlFor="lname">
                Phone Number:
            </label>

            <input
                className="inputContact"
                type="text"
                id="phoneNumber"
                name="phonenumber"
                placeholder="your phone number..."
            ></input>

            <label className="title" htmlFor="subject">
                subject
            </label>

            <textarea
                className="inputContact"
                id="subject"
                name="subject"
                placeholder="write something..."
                style={{ height: "200px" }}
            ></textarea>

            <input className="btnSend" type="submit" value="submit"></input>

            </form>
        

        </div>
        );
    }
    
    export default Contact;