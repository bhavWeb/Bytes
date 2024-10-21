import axios from "axios"

console.log("API Base URL:", process.env.NODE_ENV === 'production' ? "https://bytes-backend-d56w.onrender.com" : "http://localhost:8080");

const apiRequest = axios.create({
    baseURL : process.env.NODE_ENV === 'production' 
    ? "https://bytes-backend-d56w.onrender.com"  // Deployed backend URL (for production)
    : "http://localhost:8080",  // Local development URL  
    withCredentials : true,
});

export default apiRequest;