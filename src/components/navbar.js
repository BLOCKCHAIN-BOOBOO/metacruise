
import React,{useState,useEffect} from 'react';
import metacruise from "../images/metacruise.png";



const Navbar = () => {

//   const [page, setPage] = useState(pathname);

// const prevPage = usePrevious(pathname);

// useEffect(() => {
//   if (pathname !== prevPage) {
//     setFadeEffectVisible(true);
//     setPage(page);
//   }
// }, [pathname]);


  
  const [path, setPath] = useState("Home");
console.log("path",path)
  // const url = "https://google.com/music/playlist";
  const url=window.location.href;
  console.log(url)
  const lastSegment = url.substring(url.lastIndexOf("#") + 1); 
  console.log(lastSegment);


  const mobileMenutoggle = (e) => {
    // setPath(path);
    let lists = document.querySelector("ul");
    lists.classList.toggle("ul-close");

    let list = document.querySelector("button");
    list.classList.toggle("close-icon");
  };

// useEffect(()=>{
//   console.log(lastSegment)
// },[lastSegment])

  return (
         

<div className="w-full align z-40 absolute nav-bg " style={{position: "fixed"}}> 
  <nav className="w-full z-40 relative">
  {/* <div className="container mx-auto flex justify-between relative md:flex md:items-center md:justify-between py-4 md:py-4"> */}
 
  <div id="mySidenav" className="sidenav">
    <div className='flex float-right self-end mt-4 justify-end'>
  <div className='flex float-right justify-right self-end'>
    <a className='text-white xl:text-md md:text-md sm:text-md text-xs rounded-md  home-button font-semibold'>JOIN OUR DISCORD</a>
    <div className='color-shade shadow-2xl'></div>
    </div>
  <div className="block float-right self-center text-3xl relative cursor-pointer md:hidden">
          <button
            className="flex text-gray-300 top-8 mx-2 md:mx-0 bar-icon"
            // float-right right-8  right-4
            onClick={(e) => mobileMenutoggle(e)}
          ></button>
        </div>
        </div>
 <div className='flex float-left'>
  <img
                      src={metacruise}
                      height="60" width="60"
                      className="rounded-lg m-2 self-center"
                      alt=""
                    /> 


    <ul
      className="fixed sm:flex  sm:flex-col flex-col md:flex-row xl:flex-row sm:-mt-4 -mt-4 md:mt-0 
      xl:mt-0 w-full bg-white sm:bg-white md:bg-transparent lg:bg-transparent font-bold md:w-auto
       md:flex md:items-center absolute z-[1] md:static md:z-auto
  left-0 py-2 opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500"
    >
     
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:pt-10 pt-10 md:pt-0 xl:pt-0 sm:my-2 my-2 list-none text-xl xl:text-white md:text-white sm:text-black text-black">
        <a  onClick={(e) => {mobileMenutoggle(e);setPath("home")}}
          href="#home" 
          //  className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200
          //  md:text-gray-200 sm:text-black text-black"

           className={`hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200
           md:text-gray-200 sm:text-black text-black +
           ${
             path === "home" ? "active"  : ""
           }`}
        >
          Home
        </a>
      </li>
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-gray-200
       md:text-gray-200 sm:text-black text-black">
        <a  onClick={e =>{mobileMenutoggle(e);setPath("about")}}
         href="#about" 
        //  className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 
        //  md:text-gray-200 sm:text-black text-black"

        className={`hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 
          md:text-gray-200 sm:text-black text-black +
        ${
          path === "about" ? "active"  : ""
        }`}

        >
          About
        </a>
      </li>
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-gray-200 md:text-gray-200 sm:text-black text-black">
        <a href="#docs"  onClick={(e) => {mobileMenutoggle(e);setPath("docs")}}
          // className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 
          // md:text-gray-200 sm:text-black text-black"
          className={`hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 
           md:text-gray-200 sm:text-black text-black +
          ${
            path === "docs" ? "active"  : ""
          }`}

        >
          Docs
        </a>
      </li>
      <li className="cursor-pointer mx-4 xl:my-0 md:my-0 sm:my-2 my-2 list-none text-xl xl:text-gray-200 md:text-gray-200 sm:text-black text-black">
        <a href="#event"  onClick={(e) => {mobileMenutoggle(e);setPath("event")}}
          // className="hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 
          // md:text-gray-200 sm:text-black text-black"

          className={`hover:text-2xl active:text-2xl text-xl duration-500 xl:text-gray-200 
          md:text-gray-200 sm:text-black text-black +
         ${
           path === "event" ? "active"  : ""
         }`}
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

  

    </ul>

   

    </div>
    
  
    </div>
   

  {/* </div> */}
</nav>
</div>
)
}

export default Navbar