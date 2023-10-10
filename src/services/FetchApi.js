import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY

let headers = {
  accept: 'application/json',
  Authorization: `Bearer ${AUTH_KEY}`
}

export const fetchApi = (data) => {
  console.log(data);
  return axios.get(
    `${BASE_URL}${data.path}`, 
    { 
      headers,
      params : data?.params
    }
  )
}