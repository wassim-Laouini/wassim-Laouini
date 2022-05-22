import React, { useState } from "react"; // { useState, useEffect }
import { useNavigate } from "react-router-dom";
import "./homeStyle.css";
import SecondSectionHome from "../../components/Second-section-home";
// import API from "../../axios/axiosApi";
// import AboutUs from "../AboutUs";
// import image from "../../images/Asset_26.png";
import TopBarSection from "../../components/TopBarSection";
//* only use API when necessary to get/send data from/to server(backend)
//* API usage : API.get/post("getUserData") then handle it (example)

function Home({ scroll }) {
    let navigate = useNavigate();
    // const [formValues,setFormValues]=useState("")
    const handleRoute = (val) => {
        navigate(val);
    };

    // const newFormValues="hhh"
    // setFormValues(newFormValues)
    // * a sneak peak on how the navigation between pages is gonna be handled

    //     useEffect(()=>{
    // API.get('data').then((newdata)=>{
    //     setFormValues(newdata)
    // })
    // })

    // const data = ["r", "s"];

    return (
        //* home section & services section
        <div className="home-container">
            {/***** start of home section 1   *****/}

            <div className="home-section1">
                <TopBarSection scroll={scroll} />
                <div className="home-content">
                    <h1>
                        {" "}
                        Ready <span>For The Future.</span>{" "}
                    </h1>
                    {/***** 2 types of image loading  *****/}
                    {/* <img src={require("../../images/Asset_26.png")} alt="" /> */}
                    {/* <img src={image} alt="" /> */}

                    <div className="container-btn">
                        <button className="btn1"> About Us</button>
                        <button className="btn2"> Contact Us</button>
                    </div>
                </div>
                {/***** the bottom wave shope   *****/}
                <div className="wave-shape">
                    <img src={require("../../images/Asset_2.png")} alt="" />
                </div>
                {/***** end of the wave shope   *****/}

                {/***** Upwork /email/ whatsapp Icons    *****/}
                <div className="contact-icons">
                    <a target="blank" href="email">
                        {" "}
                        <img
                            className="email-icon"
                            src={require("../../images/email.png")}
                            alt=""
                        />{" "}
                    </a>
                    <a target="blank" href="phone">
                        {" "}
                        <img
                            className="phone-icon"
                            src={require("../../images/phone.png")}
                            alt=""
                        />{" "}
                    </a>
                    <a target="blank" href="upwork">
                        {" "}
                        <img
                            className="upwork-icon"
                            src={require("../../images/upwork.png")}
                            alt=""
                        />{" "}
                    </a>
                </div>
                {/*****  End of  Upwork /email/ whatsapp Icons    *****/}
            </div>
            {/***** end of home section 1*  *****/}

            {/***** start of services section  *****/}
            <div className="services">
                <h1 className="services-heading"> Our Services </h1>
                <div className="services-wrapper">
                    <div className="services-component">
                        <div className="services-icon">
                            {" "}
                            <img
                                style={{ width: "40px" }}
                                src={require("../../images/web dev.png")}
                                alt=""
                            />{" "}
                        </div>
                        <div className="services-text">
                            {" "}
                            <h3> Web Development</h3>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur expedita
                                reprehenderit laudantium repellendus qui ab
                                tenetur, aliquam facere veritatis autem adipisci
                                maxime ullam iste magnam eaque esse cupiditate
                                obcaecati repellat?{" "}
                            </p>
                        </div>
                        <a href="link"> Read More </a>
                    </div>
                    <div className="services-component">
                        <div className="services-icon">
                            {" "}
                            <img
                                style={{ width: "40px" }}
                                src={require("../../images/music.png")}
                                alt=""
                            />{" "}
                        </div>
                        <div className="services-text">
                            {" "}
                            <h3> IT Solution</h3>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur expedita
                                reprehenderit laudantium repellendus qui ab
                                tenetur, aliquam facere veritatis autem adipisci
                                maxime ullam iste magnam eaque esse cupiditate
                                obcaecati repellat?{" "}
                            </p>
                        </div>
                        <a href="link"> Read More </a>
                    </div>
                    <div className="services-component">
                        <div className="services-icon">
                            {" "}
                            <img
                                style={{ width: "40px" }}
                                src={require("../../images/scraping.png")}
                                alt=""
                            />{" "}
                        </div>
                        <div className="services-text">
                            {" "}
                            <h3> IT Solution</h3>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur expedita
                                reprehenderit laudantium repellendus qui ab
                                tenetur, aliquam facere veritatis autem adipisci
                                maxime ullam iste magnam eaque esse cupiditate
                                obcaecati repellat?{" "}
                            </p>
                        </div>
                        <a href="link"> Read More </a>
                    </div>
                    <div className="services-component">
                        <div className="services-icon">
                            {" "}
                            <img
                                style={{ width: "40px" }}
                                src={require("../../images/security.png")}
                                alt=""
                            />{" "}
                        </div>
                        <div className="services-text">
                            {" "}
                            <h3> IT Solution</h3>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur expedita
                                reprehenderit laudantium repellendus qui ab
                                tenetur, aliquam facere veritatis autem adipisci
                                maxime ullam iste magnam eaque esse cupiditate
                                obcaecati repellat?{" "}
                            </p>
                        </div>
                        <a href="link"> Read More </a>
                    </div>
                    <div className="services-component">
                        <div className="services-icon">
                            {" "}
                            <img
                                style={{ width: "40px" }}
                                src={require("../../images/mobile.png")}
                                alt=""
                            />{" "}
                        </div>
                        <div className="services-text">
                            {" "}
                            <h3> IT Solution</h3>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur expedita
                                reprehenderit laudantium repellendus qui ab
                                tenetur, aliquam facere veritatis autem adipisci
                                maxime ullam iste magnam eaque esse cupiditate
                                obcaecati repellat?{" "}
                            </p>
                        </div>
                        <a href="link"> Read More </a>
                    </div>
                    <div className="services-component">
                        <div className="services-icon">
                            {" "}
                            <img
                                style={{ width: "40px" }}
                                src={require("../../images/disgne icon.png")}
                                alt=""
                            />{" "}
                        </div>
                        <div className="services-text">
                            {" "}
                            <h3> Design</h3>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur expedita
                                reprehenderit laudantium repellendus qui ab
                                tenetur, aliquam facere veritatis autem adipisci
                                maxime ullam iste magnam eaque esse cupiditate
                                obcaecati repellat?{" "}
                            </p>
                        </div>
                        <a href="link"> Read More </a>
                    </div>
                </div>
            </div>
            {/***** End of services section  *****/}

            <a href="ss">
                {" "}
                <img
                    className="arrow"
                    src={require("../../images/up-arrow.png")}
                    alt=""
                />{" "}
            </a>

            <SecondSectionHome />
        </div>
    );
}

export default Home;
