import React from 'react'
import useAxiosSequer from '../../../hooks/useAxiosSequer'
import { useQuery } from '@tanstack/react-query';
import AlluserCard from './alluserCard';

const AllUser = () => {
    const axiosSecure=useAxiosSequer();
    const {data: users=[],refetch}=useQuery({
      queryKey: "alluser",
      queryFn: async()=>{
        const result= await axiosSecure.get('/users');
        return result.data;
      }
    })
  return (
    <div className="overflow-x-auto">
      <div className='flex justify-center font-bold text-3xl'> 
        <h1>All user List</h1>
      </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Eamil</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
       users.map((item, index)=>{
        return<AlluserCard item={item} key={item.key} index={index} refetch={refetch}></AlluserCard>

      })
     }
    </tbody>
  </table>
</div>
  )
}

export default AllUser
