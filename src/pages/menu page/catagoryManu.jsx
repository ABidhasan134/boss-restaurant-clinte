import React from 'react'
import MenuList from '../../shared/menuList'

const CatagoryManu = ({dataFilted}) => {
    // console.log(CatagoryManu);
  return (
    <div>
      <section className="grid grid-cols-2 my-10">
        {
            dataFilted.map((item)=>{

               return <MenuList menu={item} key={item._id}></MenuList>
            })
        }
      </section>
    </div>
  )
}

export default CatagoryManu
