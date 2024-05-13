import axios from 'axios'

const BASE_URL = 'https://clothes-shopping-1.onrender.com'



export default axios.create({
    baseURL:BASE_URL
})

// Create another axios instance for private requests, where you might need to attach the user's access token
