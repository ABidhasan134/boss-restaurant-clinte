import React from 'react'

const FoodCard = ({foodData}) => {
    // console.log(foodData)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={foodData.image} alt="Food Image" /></figure>
  <p className='absolute right-4 text-black font-bold'>price: ${foodData.price}</p>
  <div className="card-body">
    <h2 className="card-title">{foodData.name}</h2>
    <p>{foodData.recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FoodCard
