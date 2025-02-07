import axios from "axios";

const api = axios.create({
    baseURL: "https://api.grlab.in",
    withCredentials: true, 
});

export default api;