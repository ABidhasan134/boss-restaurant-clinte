import axios from 'axios'
import React from 'react'

const axiosPublice=axios.create({
    baseURL: 'http://localhost/5173'
})

const useAxiousPublic = () => {
  return axiosPublice
}

export default useAxiousPublic
