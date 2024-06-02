import { Query, useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSequer from '../../../hooks/useAxiosSequer'

const AdminHome = () => {
   const axiosSecure=useAxiosSequer();
  const {data:states=[]}=useQuery({
    querykey: ['admin-state'],
    queryFn: async()=>{
      const res =await axiosSecure.get('/admin-state')
      return res.data;
    }
  })
  console.log(states)
  return (
    <div>
      {states.user}
    </div>
  )
}

export default AdminHome
