
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homefirst from "../images/home-first.png";
import homesecond from "../images/home-second.png";
import homethird from "../images/home-third.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import metacruise from "../images/metacruise.png";
import docsbg from "../images/docs-bg.png"

const Home = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
 
  return (
  <div className='home-bg-color p-3'>
     <section className="py-2 md:py-5 relative pointer-default" id="home">

        <div className="container mt-2 py-10 mx-auto self-center justify-center flex flex-col md:flex md:flex-col lg:flex lg:flex-row align">
          <div
            className="relative flex flex-col justify-center self-center pointer-default"
            style={{ cursor: "default" }}
          >
            <h4 className=" mb-5 text-center font-semibold text-white lg:self-start text-3xl">
            Welcome to
            </h4>
            <h1 className=" font-extrabold font-sans text-white mb-5 md:mb-4 text-4xl md:text-6xl lg:text-5xl text-center lg:text-left">
             MetaCruise
            </h1>
            <span className='text-lg mb-5 text-center text-gray-200 lg:text-left font-semibold'>Your Ultimate Virtual Escape</span>
           
            <p className="mb-8 text-center text-gray-400 text-sm lg:text-left">
              Escape to the high seas and embark on a one-of-a-kind adventure with the [metaCruise] Metaverse experience.
              From the moment you step aboard our virtual ship.you'll be transportedto a world of luxury,relaxation and adventure.
            </p>
            <div className="flex flex-col lg:flex lg:flex-row mb-4 lg:mb-10 self-center lg:self-start">
            <a
                style={{ margin: "10px !important" }}
                className="home-button-gradient-line rounded-3xl bg-transparent text-white m-2 
               hover:bg-white hover:text-black"
              >
                <span className="text-md font-semibold px-0 ">
                  {" "}
               DOWNLOAD
                </span>
              </a>
             <button className='text-white text-md rounded-3xl  home-button font-semibold'>OPEN IN BROWSER</button>
            
            </div>
           
          </div>

          {/* <div className="flex justify-between ">
            <div className=" mx-auto">  */}
            {/* mt-5 w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96  rounded-full */}
              {/* <div className='w-full flex'> */}
                <img src={homefirst} alt="" className="image1 mx-auto" />
                {/* </div> sm:w-2/4 sm:h-2/4 md:w-2/4 md:h-2/4 */}
            {/* </div>
            <div className="flex flex-col md:flex md:flex-col mx-auto absolute right-0 bottom-0"></div>
          </div> */}
        </div>
      </section>


      <div className='color-shade float-right'></div>
      <div className='color-shade-right float-right'></div>
      <section className="py-2 md:py-5 relative pointer-default" id="about" >      

<div className="container justify-center self-center mx-auto flex flex-col md:flex md:flex-col lg:flex lg:flex-row align">
 

  {/* <div className="flex justify-between ">
    <div className=" mt-5 w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 mx-auto rounded-full">   */}
     {/* <div> */}
       <img src={homesecond} alt="" className=" image2 mx-auto" />
       {/* </div> md:w-2/4 */}
     {/* </div>
    <div className="flex flex-col md:flex md:flex-col mx-auto absolute right-0 bottom-0"></div> 
  </div> */}

  <div
    className="relative flex flex-col justify-center self-center pointer-default"
    style={{ cursor: "default" }}
  >
    <div className='text-left float-left mb-5'>
      <span className='text-3xl text-gray-400 border-b-2 border-gray-400'>About Us</span>
      </div>
    <h2 className=" mb-5 text-center font-semibold text-gray-300 lg:self-start xl:text-6xl md:text-5xl sm:text-5xl text-4xl">
    Fully immersive 3D virtual environment
    </h2>
   
   
    <p className="mb-8 mt-4 text-center text-gray-400 text-xl lg:text-left">
    that allows you to explore every corner of the ship interact with other players in real-time and build lasting 
    connections with people from all over the world Customize your avatar to reflect your unique style and personality
    </p>
   
  </div>

</div>
</section>


<div className='color-shade float-left'></div>
<section className="py-10 md:py-10 relative pointer-default" id="docs">
<div className="about-background mx-auto py-10 self-center text-center justify-center flex flex-col md:flex md:flex-col lg:flex lg:flex-row align"
style={{backgroundImage: `url(${docsbg})`,
  backgroundRepeat: "no-repeat", 
  backgroundSize: "cover"
}}  

>
          <div className="relative flex flex-col justify-center pointer-default" style={{cursor:"default"}}>
          
          <div className='flex flex-col xl:w-3/5 md:w-3/5 sm:w-full w-full self-center justify-center '>
          
             <span className="text-gray-300 xl:w-3/4 md:w-3/4 sm:w-full py-6 w-full self-center font-semibold xl:text-5xl md:text-4xl sm:text-4xl text-4xl">
                Participate in onboard activities and events</span>
            <span className="text-gray-400 mt-5 mb-10 text-lg w-full font-normal">
     from poolside parties to themed dinners and more Discover hidden secrets and unlock new areas of the ship as you progress 
     through the game Earn rewards and prizes for completing challenges and achievements
            </span>

            </div>
          
            {/* <div className="flex justify-center "> */}
            {/* <div className=" mt-5 w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 mx-auto rounded-full">   */}
              <img src={homethird} alt="" className="w-2/4 self-center text-center family-image" />
            {/* </div>
            <div className="flex flex-col md:flex md:flex-col mx-auto absolute right-0 bottom-0"></div> */}
          {/* </div>     */}
          </div>
        
        </div>
</section>

<div className='color-shade float-left'></div>
<div className='color-shade-right1 float-right'></div>
<section className="py-2 md:py-5 relative pointer-default" id="event">
<div className='container mt-2 mx-auto self-center justify-center align'>
    <div className='text-4xl text-white font-semibold float-left text-left pb-10'>Latest News</div>
  
    <Carousel
             swipeable={true}
             draggable={true}
             showDots={false}
             centerMode={true}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
             // autoPlay={window.deviceType !== "mobile" ? true : false}
             // autoPlaySpeed={2000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={500}
             containerClass="carousel-container w-full py-10"
             // removeArrowOnDeviceType={["tablet", "mobile"]}
             // deviceType={this.props.deviceType}
             dotListClass="custom-dot-list-style"
            //  itemClass="carousel-item-padding-40-px "
          >
            <div className="star-div">
             
              <div className="news-card z-0 rounded-xl">
                <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                  <div className='relative'>
                    <img
                      src={person1}
                      height="200px"
                      className="rounded-lg self-center"
                      alt=""
                    />
                    <div className='w-full absolute bottom-0 p-4'>
                        <div className='flex justify-left'>
                            <button type="button" className='bg-yellow-500 px-3 text-black font-normal text-md rounded-2xl'>Travel</button>
                        
                        <div className='flex text-white px-3 font-normal text-md'>
                            <i className='fa fa-calendar self-center'></i><span>15 sep,2021</span>
                        </div>
                        </div>
<div className=' text-gray-300 font-semibold text-md text-left float-left mt-2 mb-2'>

                   Mauris ullamcorper tortor sed purus interdum, fermentum efficitur dictu.
</div>
<div className='float-left text-gray-300'>Read More <i className='fa fa-arrow-right text-white'></i></div>
</div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="star-div">
             
              <div className="news-card z-0 rounded-xl">
                <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                  <div className='relative'>
                    <img
                      src={person2}
                      height="200px"
                      className="rounded-lg self-center"
                      alt=""
                    />
                    <div className='w-full absolute bottom-0 p-4'>
                        <div className='flex justify-left'>
                            <button type="button" className='bg-yellow-500 px-3 text-black font-normal text-md rounded-2xl'>Travel</button>
                        
                        <div className='flex text-white px-3 font-normal text-md'>
                            <i className='fa fa-calendar self-center'></i><span>15 sep,2021</span>
                        </div>
                        </div>
<div className=' text-gray-300 font-semibold text-md text-left float-left mt-2 mb-2'>

                   Mauris ullamcorper tortor sed purus interdum, fermentum efficitur dictu.
</div>
<div className='float-left text-gray-300'>Read More <i className='fa fa-arrow-right text-white'></i></div>
</div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="star-div">
             
              <div className="news-card z-0 rounded-xl">
                <div className="flex flex-col -mt-3 p-4 w-full self-center text-center mx-auto">
                  <div className='relative'>
                    <img
                      src={person3}
                      height="200px"
                      className="rounded-lg self-center"
                      alt=""
                    />
                    <div className='w-full absolute bottom-0 p-4'>
                        <div className='flex justify-left'>
                            <button type="button" className='bg-yellow-500 px-3 text-black font-normal text-md rounded-2xl'>Travel</button>
                        
                        <div className='flex text-white px-3 font-normal text-md'>
                            <i className='fa fa-calendar self-center'></i><span>15 sep,2021</span>
                        </div>
                        </div>
<div className=' text-gray-300 font-semibold text-md text-left float-left mt-2 mb-2'>

                   Mauris ullamcorper tortor sed purus interdum, fermentum efficitur dictu.
</div>
<div className='float-left text-gray-300'>Read More <i className='fa fa-arrow-right text-white'></i></div>
</div>
                   
                  </div>
                </div>
              </div>
            </div>

           
          
          </Carousel>

          <div className='mt-5 mb-10'>
          <a
                style={{ margin: "10px !important" }}
                className="view-button-gradient-line rounded-sm bg-transparent text-white m-2 
               hover:bg-white hover:text-black"
              >
                <span className="text-orange-500 text-md font-semibold px-0 ">
                  {" "}
              View All <i className="fa fa-arrow-right text-orange-500 font-normal"></i>
                </span>
              </a>
          </div>
    </div>
</section>

<div className='color-shade float-left'></div>
<div className='color-shade float-right'></div>

<footer id="footer" style={{height:"5.5rem"}}>
      <section className="relative"> 
          <div className=" flex xl:flex-row md:flex-row sm:flex-col flex-col self-center text-center justify-between py-4 relative mx-auto container align">
          <div className='flex flex-col self-center align-middle'>
          <img
                      src={metacruise}
                      height="100" width="100"
                      className="rounded-lg self-center"
                      alt=""
                    />
                    <span className='text-gray-400 text-sm font-normal'>Copyright 2023 MetaCruise<br /> 
                    Templates | All Rights Reserved</span>
          </div>
          <div className='flex flex-col self-center align-middle'>
          <span className='text-xl text-gray-200 mt-5 mb-5 font-semibold'>Subscribe to our newsletter</span>
          <div className='flex flex-row'>
          <input type="text" placeholder="Type..." className='mt-2 py-3 px-2 rounded-3xl bg-white text-gray-600' />  
          <button className='text-white w-full -ml-20 text-md rounded-3xl px-3 py-2 icon-bg font-semibold'>Submit</button>  
          {/* DEFAULT */}
          </div>
          </div>
          <div className='flex flex-col self-center align-middle'>
            <span className='text-xl text-gray-200 mt-5 mb-5 font-semibold'>Follow us</span>
           <div className='flex flex-row'> 
           <a className='icon-bg'> <i className='fa fa-facebook text-white'></i></a>
            <a className='icon-bg'> <i className='fa fa-twitter text-white'></i></a>
            <a className='icon-bg'> <i className='fa fa-instagram text-white'></i></a>
            <a className='icon-bg'> <i className='fa fa-linkedin text-white'></i></a>
            <a className='icon-bg'> <i className='fa fa-youtube text-white'></i></a>
            </div>
          </div>
          </div>
      </section>
    </footer>

  </div>
  )
}

export default Home