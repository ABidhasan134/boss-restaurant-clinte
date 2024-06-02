import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosSequer, { axiosSecure } from '../../../hooks/useAxiosSequer';

const PaymentHistory = () => {
    const axiosSecure=useAxiosSequer()
   const {user}=useContext(AuthContext);
   const {data: payments=[]}=useQuery({
    queryKey: ['payments', user.email],
    queryFn: async()=>{
        const res=await axiosSecure.get(`/payments/${user.email}`)
        return res.data;
    }
   })
   console.log(payments)
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Transation Id</th>
        <th>pay time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((item,index)=>{
            return<tr>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.id}</td>
        <td>{item.date}</td>
      </tr>
        })
      }
      
      {/* row 2 */}
 
    </tbody>
  </table>
</div>
  )
}

export default PaymentHistory
