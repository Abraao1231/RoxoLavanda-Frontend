import axios from "axios";

export const api = axios.create({
    baseURL: 'https://roxolavanda-backend-1.onrender.com'
})