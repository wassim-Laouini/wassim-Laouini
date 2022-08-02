import React, { useState } from "react";
import "./adminComponentsStyle.css";

function Banner() {
    const [bannerText, setBannerText] = useState(
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit est excepturi ab voluptates, commodi praesentium ipsum in ullam alias sequi, consequatur consequuntur! Aspernatur esse cum ab nemo suscipit quaerat?"
    );
    const handleChange = (e) => {
        setBannerText(e.target.value);
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ marginTop: "150px" }}>
                <h3>Home page Banner</h3>
                <textarea
                    name=""
                    id=""
                    cols="90"
                    rows="10"
                    className="adminPanel_editItem"
                    onChange={handleChange}
                    value={bannerText}
                />
            </div>
        </div>
    );
}

export default Banner;
