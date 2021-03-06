import axios from 'axios'

const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')

    return axios.create({
        baseUrl: 'https://bwpt20-recipes-backend.herokuapp.com',
        headers:{Authorization:token}
    })
}
export default axiosWithAuth