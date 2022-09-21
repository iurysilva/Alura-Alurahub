import axios from "axios";

const api = axios.create({
    baseURL: "192.168.100.35:3000/",
})

export default api;