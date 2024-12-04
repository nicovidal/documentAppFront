import axios from 'axios'
import { getEnv } from '../hook/getEnv'

const {VITE_API_URL}=getEnv();

const apiAzure=axios.create({

    baseURL:VITE_API_URL
})

export default apiAzure