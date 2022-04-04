import axios from 'axios'

const authKey = localStorage.getItem('authorization')
export const BaseURL = "http://localhost:4000/"

export const authaxios = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        Authorization: `Bearer ${authKey}`
    }
})