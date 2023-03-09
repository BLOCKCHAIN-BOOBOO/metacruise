
import React from 'react';
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (

<div className="w-full align z-40 absolute " style={{position: "sticky"}}> 
{/* <ul className="fixed z-10 flex flex-col
  sm:mt-20 mt-10 md:mt-20 xl:mt-20 bg-slate-800 sm:bg-slate-800 md:bg-slate-800 lg:bg-transparent
   font-bold md:flex md:items-center absolute z-[1] md:z-auto
  left-0 py-2 opacity-0 md:opacity-100 transition-all ease-in duration-500">

  <li className="relative mb-5">
        <NavLink
      to=""
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
          <span className="text-sm ml-2 self-center font-bold "> Home</span> 
        </NavLink>
      </li>

      <li className="relative mb-5">
        <NavLink
       to=""
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
          <span className="text-sm  ml-2 self-center font-bold "> Favourite</span> 
        </NavLink>
      </li>

      <li className="relative mb-5">
        <NavLink
       to=""
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
          <span className="text-sm self-center ml-2 font-bold "> Settings</span>
          
        </NavLink>
      </li>

      <li className="relative mb-5">
        <NavLink 
          to=""  
          className="py-1 justify-center flex justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded 
          grow cursor-pointer transition duration-300 ease-in-out"
        >
           <span className="text-sm ml-2 self-center font-bold "> Logout</span> 
        </NavLink>
      </li>

  </ul> */}
</div>
)
}

export default Navbar