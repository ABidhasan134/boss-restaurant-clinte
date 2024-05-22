import React from 'react'
import CoverMenu from '../../shared/coverMenu'
import coverImg from "../../assets/shop/banner2.jpg"
import Tabsown from './components/tabs'
import { useParams } from 'react-router-dom'
const Order = () => {
  const {category}=useParams();
  console.log(category)
  return (
    <div>
     <CoverMenu img={coverImg} title="Our shop" subTitle="Would you like to try a dish?"></CoverMenu>
     <Tabsown></Tabsown>
    </div>
  )
}

export default Order
