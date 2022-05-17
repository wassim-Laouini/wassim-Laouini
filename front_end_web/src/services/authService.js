import { useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";
import API from "../axios/axiosApi";
import Cookies from "universal-cookie";

import { TOKEN_NAME } from "../config";

const cookies = new Cookies();

const getAuth = () => {
    return cookies.get(TOKEN_NAME);
};

const Logout = () => {
    let navigate = useNavigate();
    const cookies = new Cookies();
    localStorage.clear();
    cookies.remove(TOKEN_NAME, { path: "/" });
    navigate("/Home");
};

const getToken = (storageName) => {
    return localStorage.getItem(storageName) !== undefined
        ? localStorage.getItem(storageName)
        : false;
};

const getTokenExpirationDate = (token) => {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
};

const isTokenExpired = (token) => {
    if (!token) token = this.getToken(TOKEN_NAME);
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return true;
    return !(date.valueOf() > new Date().valueOf());
};

const checkToken = () => {
    try {
        let token = getAuth();
        if (!token) {
            return false;
        }
        let userData = getToken("user_data_BBH");
        if (!userData || userData === undefined) {
            return false;
        }
        userData = JSON.parse(userData);
        let date = getTokenExpirationDate(token);
        let current = new Date();

        if (date.valueOf() < current.valueOf()) {
            console.log("expired");
            Logout();
            return false;
        }

        if (current.valueOf() >= date.valueOf() - 24 * 60 * 60000) {
            console.log("Time to refresh token");
            refreshToken(token, userData);
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.log("CHECK TOKEN ERROR : ", error);
        return false;
    }
};

//* here we are gonna check the user type and on that we will return if the user is authorized or not depending on what data we have (cookies/local Storage)
const checkRoute = (userType) => {
    try {
        let token = getAuth();
        if (!token) {
            return true;
            //! it's supposed to be false but I changed it so that we can use the adminPanel for the moment without checking token
        }

        const decoded = jwt_decode(token);
        if (userType === "admin" && !decoded.is_admin) {
            return false;
        } else if (userType === "staff" && decoded.is_admin) {
            return false;
        } else if (userType === "user" && decoded.is_admin) {
            return false;
        }
        let date = getTokenExpirationDate(token);
        let current = new Date();

        if (date.valueOf() < current.valueOf()) {
            console.log("expired");
            return false;
        }
        return true;
    } catch (error) {
        console.log("CHECK TOKEN ERROR : ", error);
        return false;
    }
};

const refreshToken = async (token, userData) => {
    try {
        const data = { token, userData };
        await API.post("refresh_token", data);
    } catch (error) {
        Logout();
        console.log("ERROR in refreshToken : ", error);
    }
};

export default { getAuth, Logout, checkToken, isTokenExpired, checkRoute };
