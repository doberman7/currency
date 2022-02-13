import axios from 'axios'

const access_key='138ca01354c449d7741ab9dbca4f4252'
const baseUrl = `http://api.currencylayer.com/live?${access_key}&format=1&currencies=MXN`

const currencylayerService = axios.create({baseUrl,withCredentials:true})
// console.log('aaa:');
export const getPesos = () =>
    currencylayerService.get(`/pesos/get-pesos`);