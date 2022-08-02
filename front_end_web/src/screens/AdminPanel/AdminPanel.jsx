import React, { useState } from "react";
import "./adminPanelStyle.css";
import Sidebar from "./components/Sidebar";
import OurServices from "./components/OurServices";
import Team from "./components/Team";
import Banner from "./components/Banner";
import Settings from "./components/Settings";
function AdminPanel() {
    const [team, setTeam] = useState(true);
    const [settings, setSettings] = useState(false);
    const [banner, setBanner] = useState(false);
    const [ourServices, setOurServices] = useState(false);
    const handleSideBarAdminClick = (menu) => {
        setTeam(false);
        setBanner(false);
        setSettings(false);
        setOurServices(false);
        if (menu === "Team") setTeam(true);
        if (menu === "Banner") setBanner(true);
        if (menu === "Settings") setSettings(true);
        if (menu === "OurServices") setOurServices(true);
    };
    return (
        <div className="AdminPanel_Container">
            <div className="AdminPanel_SidebarContainer">
                <Sidebar
                    handleSideBarAdminClick={handleSideBarAdminClick}
                    team={team}
                    ourServices={ourServices}
                    settings={settings}
                    banner={banner}
                />
            </div>
            <div className="AdminPanel_ContentContainer">
                {team ? <Team /> : <></>}
                {ourServices ? <OurServices /> : <></>}
                {settings ? <Settings /> : <></>}
                {banner ? <Banner /> : <></>}
            </div>
        </div>
    );
}

export default AdminPanel;
