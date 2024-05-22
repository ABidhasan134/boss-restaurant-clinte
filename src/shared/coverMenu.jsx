import React from 'react'
import { Link } from 'react-router-dom'
const CoverMenu = ({img,title,subTitle}) => {
  return (
    <div className="hero h-[600px]" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{subTitle}</p>
      <Link to={`/order/:${title}`}><button className='btn'>{title} Items</button></Link>
    </div>
  </div>
</div>
  )
}

export default CoverMenu
