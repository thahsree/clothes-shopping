import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL



export default axios.create({
    baseURL:BASE_URL
})

// Create another axios instance for private requests, where you might need to attach the user's access token
