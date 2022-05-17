import axios from "axios";

const api = axios.create({
    baseURL: "http://0powerdev.ir:85"
});

export default api;