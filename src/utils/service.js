import Axios from 'axios';

export const httpService = Axios.create({
    baseURL: 'https://642f026d8ca0fe3352de510b.mockapi.io/api/v1'
})
