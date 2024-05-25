import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'

const FoodCard = ({foodData}) => {
  const navigate=useNavigate();
  const location =useLocation();
  const {user}=useContext(AuthContext);
    // console.log(foodData)
    const handelCard=(food)=>{
      console.log(food)
      if(user && user.email){

      }
      else{
        Swal.fire({
          title: "please login for add to the card",
          text: "You can not add items with out login",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", )

          }
        });
      }
    }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={foodData.image} alt="Food Image" /></figure>
  <p className='absolute right-4 text-black font-bold'>price: ${foodData.price}</p>
  <div className="card-body">
    <h2 className="card-title">{foodData.name}</h2>
    <p>{foodData.recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{handelCard(foodData)}}>Add to Card</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FoodCard
