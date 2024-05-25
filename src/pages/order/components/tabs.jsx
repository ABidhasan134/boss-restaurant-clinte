import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../shared/foodCard';
import MenuCatagory from './menuCatagory';
import { useLocation } from 'react-router-dom';

const Tabsown = () => {
  const location =useLocation();
  console.log(location.pathname)
  const catagorys=["salad","pizzas","soup","dessert","offered"]
    const [menu]=useMenu();
    console.log(menu);
    const initialCategory = location.pathname.split('/').pop();
    console.log(initialCategory);
    const initalIndex=catagorys.indexOf(initialCategory);
    console.log(initalIndex);
    const [tabIndex, setTabIndex] = useState(initalIndex);
    
    // console.log(tabIndex);
    const dessert=menu.filter(itme=>itme.category==="dessert");
    const pizza=menu.filter(itme=>itme.category==="pizzas");
    const soup=menu.filter(itme=>itme.category==="soup");
    const salad=menu.filter(itme=>itme.category==="salad");
    const offered=menu.filter(itme=>itme.category==="offered");
    // console.log(offered);
  return (
    <Tabs defaultIndex={tabIndex} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soup</Tab>
      <Tab>dessert</Tab>
      <Tab>offered</Tab>
    </TabList>

    <TabPanel>
        <MenuCatagory items={salad}></MenuCatagory>
        </TabPanel>
    <TabPanel>
    <MenuCatagory items={pizza}></MenuCatagory>
    </TabPanel>
    <TabPanel>
    <MenuCatagory items={soup}></MenuCatagory>
    </TabPanel>
    <MenuCatagory items={dessert}></MenuCatagory>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    <MenuCatagory items={offered}></MenuCatagory>
    </TabPanel>
    
  </Tabs>
  )
}

export default Tabsown
