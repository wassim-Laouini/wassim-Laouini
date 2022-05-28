import React, { useState } from "react";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";
import TopBarSection from "../../components/TopBarSection";
function ContactUs({ scroll, setScroll }) {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState("");
    const handleRoute = () => {
        navigate("AboutUs");
    };
    return (
        <div className="contactUs_container">
            <div className="contactUs_1stSection">
                <TopBarSection scroll={scroll} />
 <div className="contactUs-title-container">
<div className="page-title-content">
<h2> Contact</h2>
<ul>
    <li id="home-li" > Home  </li>
    <li  > Contact </li>

</ul>
</div>

</div>
            </div>
            <div className="contactUsh1">
                <h1>LET'S GET STARTED!</h1>
            </div>
            <div className="contactUs_secondSection">
                <div className="contactUs_leftSide">
                    <h2> ARE YOU READY</h2>
                    <h3>to get started on the journey?</h3>
                    <p className="contactUs_p">
                        We use UpWork Platform to manage projects and billing.
                        Please go here to create an Upwork Account:
                    </p>
                    <button className="contactUs_btn">
                        Create a free Upwork Account
                    </button>
                    <p className="contactUs_p">
                        if you use the link above, any project that we work on
                        together, UpWork will not charge either of us any fees.
                        Once your (free) Account is set-up, create a project and
                        invite us to apply.
                    </p>
                    <h4>Here are the links to the profiles we use :</h4>
                    <div className="contactUs_btns">
                        <button className="contactUs_btn">
                            Create a free Upwork Account
                        </button>
                        <button className="contactUs_btn">
                            Create a free Upwork Account
                        </button>
                    </div>

                    <p className="contactUs_p">
                        This is one other way that we work to keep the costs
                        low, so we cam cotinue to provide best-in- class
                        pricing.
                    </p>
                </div>
                <div className="contactUs_rightSide_container">
                    <div className="contactUs_rightSide">
                        <h2>CONTACT US DIRECTLY</h2>
                        <h3>
                            Create account to hear more or schedule an
                            appointement.
                        </h3>
                        <form action="" className="contactUs_form">
                            <textarea
                                className="contactUs_input"
                                type="text"
                                placeholder="Your name"
                                rows="2"
                            />
                            <textarea
                                className="contactUs_input"
                                type="text"
                                placeholder="Your email"
                                rows="2"
                            />
                            <textarea
                                className="contactUs_input"
                                type="text"
                                placeholder="Phone number"
                                rows="2"
                            />
                            <textarea
                                className="contactUs_input"
                                type="text"
                                placeholder="Project brief detail/Notes ..."
                                rows="7"
                            />
                            <div className="submitButton_container">
                                <button className="contactUs_submitBtn">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
