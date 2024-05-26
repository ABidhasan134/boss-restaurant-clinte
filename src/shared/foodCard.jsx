import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';
import useAxiosSequer from '../hooks/useAxiosSequer';
import useCards from '../hooks/useCards';


const FoodCard = ({ foodData }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSequer();
  const [,refetch]=useCards();

  const handleCard = (foodData) => {
    if (user && user.email) {
      const cardItem = {
        menuId: foodData._id,
        email: user.email,
        name: foodData.name,
        image: foodData.image,
        price: foodData.price,
      };

      axiosSecure.post('/card', cardItem)
        .then((response) => {
          console.log(response.data);
          if(response.data.insertedId){
            Swal.fire({
              icon: 'success',
              title: 'Added to Cart',
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
          
        })
    } else {
      Swal.fire({
        title: "Please log in to add to the cart",
        text: "You cannot add items without logging in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={foodData.image} alt="Food Image" />
        </figure>
        <p className='absolute right-4 text-black font-bold'>price: ${foodData.price}</p>
        <div className="card-body">
          <h2 className="card-title">{foodData.name}</h2>
          <p>{foodData.recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => handleCard(foodData)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
