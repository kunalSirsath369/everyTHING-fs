import React from "react";
import img from "./pngwing.com.png"
import "./header.css"
const Header = () => {
  return (
    <div className="header1 h-[100vh] flex ">
  
      <div className="flex justify-center flex-col p-3  ">
     
      <div className="box opacity-40 w-full"></div>
        <h2 className="pt-10 pl-2 text-3xl font-extrabold lg:text-8xl head1 z-10">Welcome to <br/>EveryTHING </h2>
        <h2 className=" text-xl pl-2 lg:text-3xl font-bold mt-5   flex flex-col">
          Your One-Stop Destination for Fashion and Footwear!
        </h2>
        
        <button type="button" class="pl-2 backdrop-filter backdrop-blur-lg z-10 bg-white/10 hover:bg-white/20  shadow-xl trasition ease-in-out duration-500   font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2  w-[200px] mt-5 ">Shop Now</button>
      </div>
      <div>
    
      <img src={img} alt="" className="h-[90vh] mt-[150px] w-full transition-all indent-px shoes" /></div>
    </div>
  );
};

export default Header;
