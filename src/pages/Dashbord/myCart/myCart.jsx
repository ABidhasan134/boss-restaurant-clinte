import React from 'react'
import useCards from '../../../hooks/useCards'
import { SlNote } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import TableRow from './components/tableRow';

const MyCart = () => {
  const [card]=useCards();
  const total=card.reduce((total,item)=>total+item.price,0)
  // console.log(total);
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>List no:</th>
        <th>Item Img</th>
        <th>Item Name</th>
        <th>price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
      {
        card.map((item,index)=>{
          return   <TableRow item={item} index={index} key={item._id}></TableRow>
        })
      }
      <tr>
        
        <th></th>
        <th></th>
        <th>price</th>
        <th>{total}</th>
        <th><button className='btn btn-primary'>pay</button></th>
        <th></th>
      </tr>
      
    
    </tbody>

    
  </table>
</div>
  )
}

export default MyCart
