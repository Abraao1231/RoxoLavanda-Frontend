import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'https://roxolavanda-backend-1.onrender.com'
    // baseURL: 'http://192.168.1.118:3333'
    // baseURL: 'http://10.0.2.2:3333'
    // baseURL: 'http://192.168.1.113:3333'
  
    
})