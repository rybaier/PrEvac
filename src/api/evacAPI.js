import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

//restart ngrok and change url each day until backend is deployed
const instance =axios.create({
    baseURL: 'https://prevac-backend.herokuapp.com/'
})

instance.interceptors.request.use(
    async (config) => {
        const token =await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config 
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default instance