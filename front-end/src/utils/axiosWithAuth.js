import axios from 'axios'

const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')

    return axios.create({
        baseUrl: 'http://localhost:3000/',
        headers:{Authorization:token}
    })
}
export default axiosWithAuth