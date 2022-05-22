import React from "react";
import "./servicesStyle.css";
import TopBarSection from "../../components/TopBarSection";
function Services({ scroll }) {
    return (
        <div>
            <TopBarSection scroll={scroll} />
            Services
        </div>
    );
}

export default Services;
