import React from 'react'

const TitelandSub = ({heading,subtitel}) => {
  return (
    <section className='grid justify-center'>
    <h1 className='text-yellow-400 text-center'>{heading}</h1>
    <h1 className='text-3xl border-y-2'><span className='text-center flex justify-center'>{subtitel}</span></h1>
</section>
  )
}

export default TitelandSub
