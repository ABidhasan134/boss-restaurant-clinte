import React from 'react'

const MenuList = ({menu}) => {
    // console.log(menu)
  return (
    <div className='flex items-center '>
        <section className='mx-4 '>
            <img src={menu.image} alt="" className='h-[200px] w-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]'/>
        </section>
        <section>
            <h1>{menu.name}</h1>
            <p>{menu.recipe}</p>
        </section>
        <section>
            <p>{menu.price}</p>
        </section>

    </div>
  )
}

export default MenuList
