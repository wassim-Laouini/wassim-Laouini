import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./topBarHomeSectionStyle.css";
function TopBarSection({ scroll }) {
    let navigate = useNavigate();
    const [activehome, setActivehome] = useState("");
    const [activeServices, setActiveServices] = useState("");
    const [activeAboutUs, setActiveAboutUs] = useState("");
    const [activeContactUs, setActiveContactUs] = useState("");
    const handleRoute = (val) => {
        navigate(val);
    };
    useEffect(() => {
        handleQueryString();
    }, []);
    const handleQueryString = () => {
        setActivehome("");
        setActiveServices("");
        setActiveAboutUs("");
        setActiveContactUs("");
        const queryString = window.location.href;
        const active = "activeTopBarSection";
        if (queryString.includes("Services")) {
            setActiveServices(active);
        } else if (queryString.includes("AboutUs")) {
            setActiveAboutUs(active);
        } else if (queryString.includes("ContactUs")) {
            setActiveContactUs(active);
        } else {
            setActivehome(active);
        }
    };
    const handleSelectedNav = (e, val) => {
        handleQueryString();
        handleRoute(val);
    };
    return (
        <div>
            {scroll ? (
                <></>
            ) : (
                <div className="home_topBarSection_container">
                    <img
                        className="TopBar_homeLefticon"
                        src={require("../images/Asset_27.png")}
                        alt=""
                    />
                    <div className="home_topBarSection">
                        <p
                            className={`TopBar_home pTag ${activehome}`}
                            onClick={(e) => handleSelectedNav(e, "/")}
                        >
                            Home
                        </p>
                        <p
                            className={`TopBar_ourServices pTag ${activeServices}`}
                            onClick={(e) => handleSelectedNav(e, "/Services")}
                        >
                            Our Services
                        </p>
                        <p
                            className={`TopBar_contactUs pTag ${activeContactUs}`}
                            onClick={(e) => handleSelectedNav(e, "/ContactUs")}
                        >
                            Contact Us
                        </p>
                        <p
                            className={`TopBar_aboutUS pTag ${activeAboutUs}`}
                            onClick={(e) => handleSelectedNav(e, "/AboutUs")}
                        >
                            About Us
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TopBarSection;
