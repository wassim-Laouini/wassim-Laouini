import React from "react";
import "./adminComponentsStyle.css";
function Sidebar({
    handleSideBarAdminClick,
    team,
    ourServices,
    settings,
    banner,
}) {
    return (
        <div className="AdminSidebar_Container">
            <div className="AdminSidebar_logo">
                <img
                    src={require("../../../images/Asset_27.png")}
                    className="AdminSidebar_top_image"
                    alt=""
                />
            </div>
            <div className="AdminSidebar_Menu">
                <p
                    className={`AdminSidebar_Menu_item ${
                        team ? "selectedSidebar_menu" : ""
                    }`}
                    onClick={() => handleSideBarAdminClick("Team")}
                >
                    Team
                </p>
                <p
                    className={`AdminSidebar_Menu_item ${
                        settings ? "selectedSidebar_menu" : ""
                    }`}
                    onClick={() => handleSideBarAdminClick("Settings")}
                >
                    Settings
                </p>
                <p
                    className={`AdminSidebar_Menu_item ${
                        ourServices ? "selectedSidebar_menu" : ""
                    }`}
                    onClick={() => handleSideBarAdminClick("OurServices")}
                >
                    Our services
                </p>
                <p
                    className={`AdminSidebar_Menu_item ${
                        banner ? "selectedSidebar_menu" : ""
                    }`}
                    onClick={() => handleSideBarAdminClick("Banner")}
                >
                    Banner
                </p>
            </div>
            <div className="AdminSidebar_footer">
                <img
                    src={require("../../../images/adminFooterSidebar.png")}
                    className="AdminSidebar_footer_image"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Sidebar;
