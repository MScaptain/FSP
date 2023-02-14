import axios from 'axios'
const axiosInstance = () => {
    return axios.create({
        baseURL: 'http://localhost:8000/' 
    })
}

export default axiosInstance
