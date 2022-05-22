import React, { useEffect, useState } from "react";
import "./componentsStyle.css";
import { useNavigate } from "react-router-dom";

function TopBar({ scroll, setScroll }) {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState("");
    const [activehome, setActivehome] = useState("active");
    const [activeServices, setActiveServices] = useState("");
    const [activeAboutUs, setActiveAboutUs] = useState("");
    const [activeContactUs, setActiveContactUs] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 350);
        });
    }, []);
    const handleRoute = (val) => {
        navigate(val);
    };

    useEffect(() => {
        handleQueryString();
    });
    const handleQueryString = () => {
        setActivehome("");
        setActiveServices("");
        setActiveAboutUs("");
        setActiveContactUs("");
        const queryString = window.location.href;
        const active = "active";
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
        <nav className={scroll ? "TopBar_container sticky" : "topPageNone"}>
            <div className="TopBar_Lefticon">
                <img
                    className="TopBar_Lefticon_img"
                    src={require("../../../images/Asset_26.png")}
                    alt=""
                />
            </div>
            <div>
                <p
                    className={`TopBar_contactUs p ${activeContactUs}`}
                    onClick={(e) => handleSelectedNav(e, "/ContactUs")}
                >
                    Contact Us
                </p>
                <p
                    className={`TopBar_aboutUS p ${activeAboutUs}`}
                    onClick={(e) => handleSelectedNav(e, "/AboutUs")}
                >
                    About Us
                </p>
                <p
                    className={`TopBar_ourServices p ${activeServices}`}
                    onClick={(e) => handleSelectedNav(e, "/Services")}
                >
                    Our Services
                </p>
                <p
                    className={`TopBar_home p ${activehome}`}
                    onClick={(e) => handleSelectedNav(e, "/")}
                >
                    Home
                </p>
            </div>
        </nav>
    );
}

export default TopBar;
