import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://192.168.100.2:9990'
})

export default Api
