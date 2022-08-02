import React, { useState } from "react";
import user from "../../../images/DefaultUserImage.jpg";
import jdidi from "../../../images/jdidi.jfif";

const defaultText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita reprehenderit laudantium repellendus qui ab tenetur, aliquam facere veritatis autem adipisci maxime ullam iste magnam eaque esse cupiditate obcaecati repellat?";
const teamMembers = [
    {
        name: "el jdidi",
        email: "3am7seneljdidi@gmail.com",
        description: "assla3",
        profilePic: jdidi,
        profession: "Porn star",
        upworkLink: "pornhub.com",
    },
    {
        name: "IT Solution",
        email: "JhonDoe@gmail.com",
        description: defaultText,
        profilePic: user,
        profession: "Porn star",
        upworkLink: "pornhub.com",
    },
    {
        name: "IT Solution",
        email: "JhonDoe@gmail.com",
        description: defaultText,
        profilePic: user,
        profession: "Porn star",
        upworkLink: "pornhub.com",
    },
    {
        name: "IT Solution",
        email: "JhonDoe@gmail.com",
        description: defaultText,
        profilePic: user,
        profession: "Porn star",
        upworkLink: "pornhub.com",
    },
    {
        name: "IT Solution",
        email: "JhonDoe@gmail.com",
        description: defaultText,
        profilePic: user,
        profession: "Porn star",
        upworkLink: "pornhub.com",
    },
    {
        name: "Design",
        email: "JhonDoe@gmail.com",
        description: defaultText,
        profilePic: user,
        profession: "Porn star",
        upworkLink: "pornhub.com",
    },
];
function Team() {
    const [data, setData] = useState(teamMembers);
    const [check, setCheck] = useState();

    const handleCheck = (i) => {
        setCheck(i);
    };
    const handleChange = (e, tag, index) => {
        if (tag === "profilePic") {
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
            handleChange(uploaded_image, "profilePic", check);
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
            name: "Design",
            email: "JhonDoe@gmail.com",
            description: defaultText,
            profilePic: user,
            profession: "Porn star",
            upworkLink: "pornhub.com",
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
                                    gap: "5px",
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
                                        handleChange(e, "name", index)
                                    }
                                    value={elem.name}
                                    // onBlur={() => {
                                    //     console.log(elem);
                                    // }}
                                    className="adminPanel_editItem"
                                />
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        handleChange(e, "email", index)
                                    }
                                    value={elem.email}
                                    // onBlur={() => {
                                    //     console.log(elem);
                                    // }}
                                    className="adminPanel_editItem"
                                />
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        handleChange(e, "upworkLink", index)
                                    }
                                    value={elem.upworkLink}
                                    // onBlur={() => {
                                    //     console.log(elem);
                                    // }}
                                    className="adminPanel_editItem"
                                />
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        handleChange(e, "profession", index)
                                    }
                                    value={elem.profession}
                                    // onBlur={() => {
                                    //     console.log(elem);
                                    // }}
                                    className="adminPanel_editItem"
                                />
                                <textarea
                                    onChange={(e) =>
                                        handleChange(e, "description", index)
                                    }
                                    value={elem.description}
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
                                    <div>
                                        <img
                                            className="adminPanel_userProfileImage"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                            src={elem.profilePic}
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
                                        {elem.name}
                                    </h3>
                                    <h5> {elem.email}</h5>
                                    <p className="services-text_adminPanelPTag">
                                        {elem.upworkLink}
                                    </p>
                                    <p className="services-text_adminPanelPTag">
                                        {elem.profession}
                                    </p>
                                    <p className="services-text_adminPanelPTag">
                                        {elem.description}
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

export default Team;
