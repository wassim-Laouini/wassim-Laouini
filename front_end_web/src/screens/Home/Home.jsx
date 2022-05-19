import React from "react"; // { useState, useEffect }
import { useNavigate } from "react-router-dom";
import "./homeStyle.css";
// import API from "../../axios/axiosApi";
// import AboutUs from "../AboutUs";
//* only use API when necessary to get/send data from/to server(backend)
//* API usage : API.get/post("getUserData") then handle it (example)

function Home() {
    let navigate = useNavigate();
    // const [formValues,setFormValues]=useState("")
    const handleRoute = () => {
        navigate("AboutUs");
    };


    // const newFormValues="hhh"
    // setFormValues(newFormValues)
    // * a sneak peak on how the navigation between pages is gonna be handled

    //     useEffect(()=>{
    // API.get('data').then((newdata)=>{
    //     set(newdata)
    // })
    // })

    // const data = ["r", "s"];

    return (
         //* start of home

            <div className="home-area">

                <div className="home-content">
                    <h1>
                        Ready <span>For The Future.</span>
                    </h1>
                    <div className="container-btn">
                        <button   className="btn1"> About Us</button>
                        <button className="btn2"> Contact Us</button>
                    </div>

                </div>

            </div>



    );

}

export default Home;
