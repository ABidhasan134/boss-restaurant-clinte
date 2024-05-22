import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../shared/foodCard';
import MenuCatagory from './menuCatagory';

const Tabsown = () => {
    const [menu]=useMenu();
    // console.log(menu);
    const dessert=menu.filter(itme=>itme.category==="dessert");
    const pizza=menu.filter(itme=>itme.category==="pizza");
    const soup=menu.filter(itme=>itme.category==="soup");
    const salad=menu.filter(itme=>itme.category==="salad");
    const offered=menu.filter(itme=>itme.category==="offered");
    // console.log(offered);
  return (
    <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>soup</Tab>
      <Tab>Dessert</Tab>
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
