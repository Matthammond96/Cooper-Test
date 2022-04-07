import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
    }
})

export default api

