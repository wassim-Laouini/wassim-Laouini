import React, { useState } from "react";
import first from "../../../images/web dev.png";
import second from "../../../images/music.png";
import third from "../../../images/scraping.png";
import fourth from "../../../images/security.png";
import fifth from "../../../images/mobile.png";
import sixth from "../../../images/disgne icon.png";

const defaultText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita reprehenderit laudantium repellendus qui ab tenetur, aliquam facere veritatis autem adipisci maxime ullam iste magnam eaque esse cupiditate obcaecati repellat?";
const services = [
    { title: "Web Development", text: defaultText, logo: first },
    { title: "IT Solution", text: defaultText, logo: second },
    { title: "IT Solution", text: defaultText, logo: third },
    { title: "IT Solution", text: defaultText, logo: fourth },
    { title: "IT Solution", text: defaultText, logo: fifth },
    { title: "Design", text: defaultText, logo: sixth },
];
function OurServices() {
    const [data, setData] = useState(services);
    const [check, setCheck] = useState();

    const handleCheck = (i) => {
        setCheck(i);
    };
    const handleChange = (e, tag, index) => {
        if (tag === "logo") {
            const newData = [...data];
            newData[index][tag] = e;
            setData(newData);
        } else {
            const newData = [...data];
            newData[index][tag] = e.target.value;
            setData(newData);
        }
    };
    const handlePictureChange = async (e) => {
        const reader = new FileReader();
        await reader.addEventListener("load", async () => {
            const uploaded_image = await reader.result;
            handleChange(uploaded_image, "logo", check);
        });
        reader.readAsDataURL(e.target.files[0]);
    };
    const handleDelete = (i) => {
        console.log(i);
        const newData = [...data];
        newData.splice(i, 1);
        console.log(newData);
        setData(newData);
    };
    const handleAddService = () => {
        const newData = [...data];
        newData.push({
            title: "title",
            text: defaultText,
            logo: sixth,
        });
        setData(newData);
    };
    return (
        <div className="services_adminPanel">
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "10px",
                    marginBottom: "20px",
                }}
            >
                <button
                    className="adminPanel_editItem adminPanel_saveButton"
                    onClick={handleAddService}
                >
                    Add service
                </button>
                <button
                    style={{ marginRight: "20px" }}
                    className="adminPanel_editItem adminPanel_saveButton"
                >
                    Save changes
                </button>
            </div>
            <div className="services-wrapper_adminPanel">
                {data.map((elem, index) => (
                    <div key={index} className="servicescomponent_adminPanel">
                        {check === index ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    gap: "20px",
                                }}
                            >
                                <input
                                    type="file"
                                    accept="image/jpeg, image/png, image/jpg"
                                    onChange={handlePictureChange}
                                    className="adminPanel_editItem"
                                />
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        handleChange(e, "title", index)
                                    }
                                    value={elem.title}
                                    // onBlur={() => {
                                    //     console.log(elem);
                                    // }}
                                    className="adminPanel_editItem"
                                />
                                <textarea
                                    onChange={(e) =>
                                        handleChange(e, "text", index)
                                    }
                                    value={elem.text}
                                    cols="40"
                                    rows="7"
                                    // onBlur={() => {
                                    //     console.log(elem);
                                    // }}
                                    className="adminPanel_editItem"
                                />
                                <button
                                    onClick={() => {
                                        setCheck("");
                                    }}
                                    className="adminPanel_editItem adminPanel_saveButton"
                                >
                                    save
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="services-component_adminPanel_topIcons">
                                    {" "}
                                    <div className="serviceswrapper_adminPanel">
                                        <img
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                            src={elem.logo}
                                            alt=""
                                        />{" "}
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <img
                                            className="services_adminPanel_editButton"
                                            src={require("../../../images/delete.png")}
                                            alt=""
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                            }}
                                            onClick={() => handleDelete(index)}
                                        />

                                        <img
                                            className="services_adminPanel_editButton"
                                            src={require("../../../images/edit.png")}
                                            alt=""
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                            }}
                                            onClick={() => handleCheck(index)}
                                        />
                                    </div>
                                </div>
                                <div className="services-text_adminPanel">
                                    {" "}
                                    <h3 className="services-text_adminPanelH3Tag">
                                        {" "}
                                        {elem.title}
                                    </h3>
                                    <p className="services-text_adminPanelPTag">
                                        {elem.text}
                                    </p>
                                </div>
                            </>
                        )}
                        {/* <a href="link"> Read More </a> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurServices;
