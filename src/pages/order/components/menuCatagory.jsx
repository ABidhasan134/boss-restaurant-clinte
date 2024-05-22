import React from 'react'
import FoodCard from '../../../shared/foodCard'

const MenuCatagory = ({items}) => {
  return (
    <div className='grid grid-cols-3 border-rose-50 gap-2 mt-10'>
        {
           items.map((item)=>{
            return<FoodCard foodData={item}></FoodCard>
           }) 
        } 
        </div>
  )
}

export default MenuCatagory
