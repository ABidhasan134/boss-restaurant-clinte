import axios from 'axios'
import React from 'react'

const axiosPublice=axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
})

const useAxiousPublic = () => {
  return axiosPublice
}

export default useAxiousPublic
