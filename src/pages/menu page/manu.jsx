import React from 'react'
import CoverMenu from '../../shared/coverMenu'
import cover from "../../assets/menu/banner3.jpg"
import useMenu from '../../hooks/useMenu'
import TitelandSub from '../../shared/titelandSub'
import CatagoryManu from './catagoryManu'
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"

const Manu = () => {
    const [menu]=useMenu()
    // console.log(menu);
    const dessert=menu.filter(itme=>itme.category==="dessert");
    const pizza=menu.filter(itme=>itme.category==="pizza");
    const soup=menu.filter(itme=>itme.category==="soup");
    const salad=menu.filter(itme=>itme.category==="salad");
    const offered=menu.filter(itme=>itme.category==="offered");
    // console.log(offered);
    
    return (
    <div>
      <CoverMenu img={cover} title="Our Menu" subTitle="would you like to try a dish"></CoverMenu>
      <TitelandSub heading="---Don't Miss---" subtitel="Today best offer"></TitelandSub>
      <CatagoryManu dataFilted={offered}></CatagoryManu>
      <CoverMenu img={dessertImg} title="dessert" subTitle="lorem epson"></CoverMenu>
      <CatagoryManu dataFilted={dessert}></CatagoryManu>
      <CoverMenu img={pizzaImg} title="Pizzas" subTitle="lorem epson"></CoverMenu>
      <CatagoryManu dataFilted={pizza}></CatagoryManu>
      <CoverMenu img={saladImg} title="Salads" subTitle="lorem epson"></CoverMenu>
      <CatagoryManu dataFilted={salad}></CatagoryManu>
      <CoverMenu img={soupImg} title="Soup" subTitle="lorem epson"></CoverMenu>
      <CatagoryManu dataFilted={soup}></CatagoryManu>
    </div>
  )
}

export default Manu
