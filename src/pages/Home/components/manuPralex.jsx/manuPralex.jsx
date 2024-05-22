import React from 'react'
import img from "../../../../assets/home/banner.jpg";
import figture from "../../../../assets/home/featured.jpg"
import TitelandSub from '../../../../shared/titelandSub';
const ManuPralex = () => {
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();
    
    const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
    console.log(dateString);
  return (
   <div>
    <TitelandSub heading="check it out" subtitel="From our menu"></TitelandSub>
     <div className="hero min-h-screen bg-fixed mt-6" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className='flex gap-6'>
    <div>
    <img className='max-w-sm rounded-lg shadow-2xl' src={figture} alt="" />
    </div>
    <div className='text-white'>
        <h1>{dateString}</h1>
        <h3>WHERE CAN I GET SOME?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,<br /> deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusanda <br /> ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
    </div>
  </div>
</div>
   </div>
  )
}

export default ManuPralex
