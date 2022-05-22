import React, { useState } from "react";
import "./main.css";
import PropTypes from "prop-types";
import TopBar from "./MainComponenets/TopBar";
import Footer from "./MainComponenets/Footer";
// todo : only import topBar or sideBar if necessary from MainComponents folder
const console = () => {
    console.log("console");
};
const Main = (props) => {
    const { children, scroll, setScroll } = props;

    return (
        //! here we wrap our pages if necessary so that we don't code same
        //! stuff over and over (topBar/footer/sideBar) all are wrapping our
        //! website and also they are reusable components
        <div className="main">
            <TopBar scroll={scroll} setScroll={setScroll} />
            {/* //* only use TopBar if imported */}
            {/* <Sidebar /> */}
            {/* //* only use SideBar if imported */}
            <main className="children">
                {children}
                <Footer />
                {/* //*  same thing goes for Footer*/}
            </main>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node,
};
//* the protypes are there to check for the properties type we are passing thourgh Main component

export default Main;
