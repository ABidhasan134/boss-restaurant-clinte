import React, { useContext } from 'react'
import useAxiosSequer from './useAxiosSequer'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/authProvider';

const useCards = () => {
    const {user}=useContext(AuthContext);
    // console.log(user?.email)
    const axiousSecquer=useAxiosSequer();
    const {refetch,data: card=[]}=useQuery({
        queryKey: ['card',user?.email],
        queryFn: async ()=>{
            const res= await axiousSecquer.get(`/card?email=${user?.email}`);
            return res.data
        }
    })
  return [card,refetch]
}

export default useCards
