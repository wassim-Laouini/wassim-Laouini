import React from "react";
import "./main.css";
import PropTypes from "prop-types";
// todo : only import topBar or sideBar if necessary from MainComponents folder

const Main = (props) => {
    const { children } = props;

    return (
        <div className="main">
            {/* <Topbar/> */}
            //! here we wrap our pages if necessary so that we don't code same
            //! stuff over and over (topBar/footer/sideBar) all are wrapping our
            //! website and also they are reusable components
            {/* //* only use TopBar if imported */}
            {/* <Sidebar /> */}
            {/* //* only use SideBar if imported */}
            <main className="children">
                {children}
                {/* <Footer /> */}
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
