import axios from "axios";

const instance =  axios.create({
    baseURL :`https://book-retail-website.onrender.com/`,
})
export default instance
