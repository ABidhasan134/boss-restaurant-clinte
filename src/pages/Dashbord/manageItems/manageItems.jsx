import React from 'react'
import TitelandSub from '../../../shared/titelandSub'
import useMenu from '../../../hooks/useMenu'
import TableRow from '../myCart/components/tableRow';
import ManageRow from './manageRow';

const ManageItems = () => {
    const [menu, loading,refetch]=useMenu();
  return (
    <div>
      <TitelandSub heading='Hurry up' subtitel="Manage All Items "></TitelandSub>
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
        menu.map((item,index)=>{
          return   <ManageRow item={item} index={index} key={item._id} refetch={refetch}></ManageRow>
        })
      }
      <tr>
        
        <th></th>
        <th></th>
        <th>price</th>
        <th></th>
        <th><button className='btn btn-primary'>pay</button></th>
        <th></th>
      </tr>
      
    
    </tbody>

    
  </table>
</div>
    </div>
  )
}

export default ManageItems
