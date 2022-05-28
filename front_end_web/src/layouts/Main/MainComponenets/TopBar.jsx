import React, { useEffect, useState } from "react";
import "./componentsStyle.css";
import { useNavigate } from "react-router-dom";
import Whitelogo from "../../../images/Asset_27.png";
import blackLogo from "../../../images/Asset_26.png";
function TopBar() {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState("");
    const [activehome, setActivehome] = useState("active");
    const [activeServices, setActiveServices] = useState("");
    const [activeAboutUs, setActiveAboutUs] = useState("");
    const [activeContactUs, setActiveContactUs] = useState("");
    const [stickyClass, setStickyClass] = useState("");
    const [leftNavLogo, setLeftNavLogo] = useState(Whitelogo);
    const [rightNavTabsCss, setRightNavTabsCss] = useState("pBeforeTopPic");
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            if (windowHeight < 60) {
                setStickyClass("");
            }
            if (windowHeight < 450 && windowHeight >= 60) {
                setStickyClass("sticky-nav ");
                setLeftNavLogo(Whitelogo);
                setRightNavTabsCss("pBeforeTopPic");
            } else if (windowHeight > 450) {
                setStickyClass(" sticky-nav sticky-nav_afterPic");
                setLeftNavLogo(blackLogo);
                setRightNavTabsCss("p");
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => window.removeEventListener("scroll", stickNavbar);
    }, [stickyClass, stickNavbar]);

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
        <div className={`TopBar_container ${stickyClass}`}>
            <div className="TopBar_Lefticon">
                <img className="TopBar_Lefticon_img" src={leftNavLogo} alt="" />
            </div>
            <div className="topBar_right">
                <p
                    className={`${rightNavTabsCss} ${activeContactUs}`}
                    onClick={(e) => handleSelectedNav(e, "/ContactUs")}
                >
                    Contact us
                </p>
                <p
                    className={` ${rightNavTabsCss} ${activeAboutUs}`}
                    onClick={(e) => handleSelectedNav(e, "/AboutUs")}
                >
                    About us
                </p>
                <p
                    className={` ${rightNavTabsCss} ${activeServices}`}
                    onClick={(e) => handleSelectedNav(e, "/Services")}
                >
                    Our services
                </p>
                <p
                    className={`${rightNavTabsCss} ${activehome}`}
                    onClick={(e) => handleSelectedNav(e, "/")}
                >
                    Home
                </p>
            </div>
        </div>
    );
}

export default TopBar;
