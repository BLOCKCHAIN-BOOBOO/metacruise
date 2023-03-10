
import React from 'react';
import metacruise from "../images/metacruise.png";


const Navbar = () => {

  const mobileMenutoggle = (e) => {
    let lists = document.querySelector("ul");
    lists.classList.toggle("ul-close");

    let list = document.querySelector("button");
    list.classList.toggle("close-icon");
  };

  return (
         

<div className="w-full align z-40 absolute " style={{position: "sticky"}}> 
  <nav className="w-full z-40 relative">
  {/* <div className="container mx-auto flex justify-between relative md:flex md:items-center md:justify-between py-4 md:py-4"> */}
 
  <div id="mySidenav" className="sidenav">
  <div className="block float-right self-start text-3xl relative cursor-pointer md:hidden">
          <button
            className="flex text-gray-300 flex-col float-left text-left left-2 top-6 mx-2 md:mx-0 bar-icon"
            // float-right right-8
            onClick={(e) => mobileMenutoggle(e)}
          ></button>
        </div>
 <div className='flex float-left'>
  <img
                      src={metacruise}
                      height="100" width="100"
                      className="rounded-lg self-center"
                      alt=""
                    /> 


    <ul
      className="fixed sm:flex  sm:flex-col flex-col md:flex-row xl:flex-row sm:mt-10 mt-10 md:mt-0 
      xl:mt-0 w-full bg-white sm:bg-white md:bg-transparent lg:bg-transparent font-bold md:w-auto
       md:flex md:items-center absolute z-[1] md:static md:z-auto
  left-0 py-2 opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500"
    >
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-white md:text-white sm:text-black text-black">
        <a  onClick={(e) => mobileMenutoggle(e)}
          href="#home"  className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200
           md:text-gray-200 sm:text-black text-black"
        >
          Home
        </a>
      </li>
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-gray-200
       md:text-gray-200 sm:text-black text-black">
        <a  onClick={(e) => mobileMenutoggle(e)}
         href="#about" className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 md:text-gray-200 sm:text-black text-black"
        >
          About
        </a>
      </li>
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-gray-200 md:text-gray-200 sm:text-black text-black">
        <a href="#docs"  onClick={(e) => mobileMenutoggle(e)}
          className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 md:text-gray-200 sm:text-black text-black"
        >
          Docs
        </a>
      </li>
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-gray-200 md:text-gray-200 sm:text-black text-black">
        <a href="#event"  onClick={(e) => mobileMenutoggle(e)}
          className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 md:text-gray-200 sm:text-black text-black"
        >
          Event
        </a>
      </li>
    
    
     

      {/* <div className="text-1xl mb-3 md:mb-0 float-right text-right self-end md:hidden" >
        <Link
          to="/login"   onClick={e=>mobileMenutoggle(e)}
          className="hover:text-blue-400 duration-500 mx-5"
        >
          LOGIN
        </Link>
      </div> */}

   <div>
    <button className='text-white text-md rounded-md  home-button font-semibold'>JOIN OUR DISCORD</button>
    </div>

    </ul>

   

    </div>
    
  
    </div>
   

  {/* </div> */}
</nav>
</div>
)
}

export default Navbar