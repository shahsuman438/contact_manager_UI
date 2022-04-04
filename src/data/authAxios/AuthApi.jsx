import axios from 'axios'

export const authKey = localStorage.getItem('authorization')
export const BaseURL = "http://localhost:4000/"

export const authaxios = axios.create({
    baseURL: BaseURL,
    headers: {
        Authorization: `Bearer ${authKey}`
    }
})