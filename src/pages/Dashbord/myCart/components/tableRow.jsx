import React from 'react'
import { MdDelete } from 'react-icons/md'
import { SlNote } from 'react-icons/sl'
import Swal from 'sweetalert2'
import useAxiosSequer from '../../../../hooks/useAxiosSequer'
import useCards from '../../../../hooks/useCards'


const TableRow = ({item,index}) => {
    // console.log(item,index)
    const [,refetch]=useCards()
    const axiosSecure=useAxiosSequer();
    const handelDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             axiosSecure.delete(`/card/${id}`)
             .then((res)=>{
                // console.log(res.data);
                if(res.data.deletedCount>0){
                  refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
             })
            }
          });
    }
  return (
    <tr>
        <th>
          <button>{index+1}</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {item.name}
          
        </td>
        <td>{item.price}</td>
        <th>
          <button className="btn text-2xl"><SlNote></SlNote></button>
        </th>
        <th>
          <button className="btn  text-2xl hover:bg-red-500" onClick={()=>handelDelete(item._id)}><span className='p-2 '><MdDelete></MdDelete></span></button>
        </th>
      </tr>
  )
}

export default TableRow
