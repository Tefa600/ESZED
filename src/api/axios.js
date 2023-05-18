import axios from 'axios'

export default axios.create({
    baseURL: 'https://spacezone-backend.cyclic.app',timeout: 10000,
    withCredentials: true,
})
