import axios from "axios";
import { BASE_API_PATH } from "../config";
import authService from "../services/authService";
import Cookies from "universal-cookie";

import { TOKEN_NAME } from "../config";

const API = axios.create({
    baseURL: BASE_API_PATH,
    headers: { "Content-Type": "application/json" },
});

// * this function takes care of the requests going to the server
API.interceptors.request.use(
    (config) => {
        if (config.url !== "admin/login" && config.url !== "refresh_token") {
            authService.checkToken();
        }
        const cookies = new Cookies();
        config.headers["Authorization"] = `Bearer ${cookies.get(TOKEN_NAME)}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// * this function takes care of the responces coming back from the server
API.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        if (
            response.data.success &&
            response.data.token !== undefined &&
            response.data.token !== ""
        ) {
            const cookies = new Cookies();
            cookies.set(TOKEN_NAME, response.data.token, { path: "/" });
            if (response.config.url !== "refresh_token") {
                localStorage.setItem(
                    "user_data_BBH",
                    JSON.stringify(
                        response.data.data.userData
                        // * depends on the response type it self
                    )
                );
            }
        }
        if (
            response.data.success === false &&
            response.data.status !== undefined &&
            response.data.status === "logged-out"
        ) {
            authService.logout();
        }
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        console.log("API call error :", error.response);
        if (
            error.response &&
            error.response.data.success === false &&
            error.response.data.status !== undefined &&
            error.response.data.status === "logged-out"
        ) {
            authService.logout();
        }
        return Promise.reject(error);
    }
);

export default API;
