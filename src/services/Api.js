import axios from 'axios';

let Api = axios.create({
    baseURL: 'https://p-server-api.herokuapp.com/api'
})

Api.defaults.withCredentials = true;
export default Api