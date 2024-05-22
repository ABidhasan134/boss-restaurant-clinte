import React, { useEffect, useState } from "react";
import TitelandSub from "../../../shared/titelandSub";
import MenuList from "../../../shared/menuList";
import useMenu from "../../../hooks/useMenu";

const PorularItem = () => {
  // this is form coustom hook
  const [menu]=useMenu()
  const popularItems =menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("./menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       const filted = data.filter((item) => item.category === "popular");
  //       setMenu(filted);
  //     });
  // }, []);
//   console.log(menu);
  return (
    <div>
      <TitelandSub
        heading="Popular Item"
        subtitel="From our Menu"
      ></TitelandSub>
      <section className="grid grid-cols-2 my-10">
        {
            popularItems.map((item)=>{

               return <MenuList menu={item} key={item._id}></MenuList>
            })
        }
      </section>
    </div>
  );
};

export default PorularItem;
