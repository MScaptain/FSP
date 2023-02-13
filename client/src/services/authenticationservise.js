import axiosInstance from "./Api"

export default{
    register(credentials){
        return axiosInstance().post('/register', credentials)
    }
}

// authenticationservice.register({
//     email:'test@gmail.com',
//     password:12345,
// })