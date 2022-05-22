import React from "react";
import "./componentsStyle.css";
function Footer() {
    return (
        <footer className="footer_container">
            <div className="footer_icons_container">
                <div className="footer_icons">
                    <img
                        src={require("../../../images/emailWhite.png")}
                        alt=""
                    />
                    <img
                        src={require("../../../images/upworkWhite.png")}
                        alt=""
                    />
                </div>
            </div>
            <div className="footer_rightSide">
                <div className="footer_logo">
                    <img src={require("../../../images/Asset_32.png")} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim adipisci, in est doloribus porro illum incidunt
                    accusantium illo aliquam officiis eveniet aspernatur unde.
                    Amet nihil, soluta saepe esse consectetur odio.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
