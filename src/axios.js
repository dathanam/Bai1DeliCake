import Axios from "axios";

export const axios = Axios.create({
    // baseURL: "https://rn-app-bc1e7.firebaseio.com",
    baseURL: "http://192.168.1.251:5012/",
    // headers: { Auth: "Simple AUTH" },
    timeout: 3000,
});