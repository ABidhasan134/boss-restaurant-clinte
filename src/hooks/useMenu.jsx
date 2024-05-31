import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiousPublic from "./useAxiousPublic";



const useMenu=()=>{
  const axiosPublic=useAxiousPublic()
  //   const [menu, setMenu] = useState([]);
  //   const [loading, setloading]=useState(true)
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setMenu(data);
  //     });
  // }, []);
  const {data: menu=[], isPending: loading,refetch}=useQuery({
    queryKey: ["menu"],
    queryFn: async()=>{
      const res=await axiosPublic.get("menu");
      return res.data;
    }
  })
  return[menu, loading,refetch]
}
export default useMenu;