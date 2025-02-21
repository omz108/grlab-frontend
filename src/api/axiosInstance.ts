import axios from "axios";

const api = axios.create({
    // baseURL: "https://api.grlab.in",
    baseURL: "http://localhost:3000",
    withCredentials: true, 
});

export default api;