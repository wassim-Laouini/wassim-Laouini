import React from "react";
import { useNavigate } from "react-router-dom";
import "./homeStyle.css";
// import API from "../../axios/axiosApi";
//* only use API when necessary to get/send data from/to server(backend)
//* API usage : API.get/post("getUserData") then handle it (example)
function Home() {
    let navigate = useNavigate();
    const handleRoute = () => {
        navigate("AboutUs");
    };
    // * a sneak peak on how the navigation between pages is gonna be handled

    return (
        <div>
            <button onClick={handleRoute}>click</button>
            <div className="center">Home</div>;
        </div>
    );
}

export default Home;
