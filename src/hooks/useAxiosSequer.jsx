import React from 'react'
import axios from 'axios';
export const axiosSecure=axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
})
const useAxiosSequer = () => {
  return axiosSecure
}

export default useAxiosSequer
