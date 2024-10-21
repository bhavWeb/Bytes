import axios from "axios"

console.log("API Base URL:", process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : "http://localhost:8080");

const apiRequest = axios.create({
    baseURL : process.env.NODE_ENV === 'production' 
    ? process.env.VITE_BACKEND_URL  // Deployed backend URL (for production)
    : "http://localhost:8080",  // Local development URL  
    withCredentials : true,
});

export default apiRequest;