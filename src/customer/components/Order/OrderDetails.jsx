import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="md:px:5 lg:px-20 sm:px-3">
      <div>
        <h1 className="font-bold text-lg py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20 ">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
      {[1, 1, 1, 1].map((item) => (
          
    
        <Grid
          item
          container
          className="shadow-xl p-5 border rounded-md"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6} >
            <div className="flex items-center space-x-4">
              <img
                className="w-[6rem] h-[7rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70"
                alt=""
              />
         
            <div className="space-y-2 ml-5">
              <p className="font-semibold ">Lorem ipsum dolor sit</p>
              <p className="space-x-5 opacity-50 text-xs font-semibold">
                <span>Color : Pink </span>
                <span>Size : M</span>
                
              </p>
              <p>Seller: linaria</p>
                <p>₹9322</p>
            </div>
            </div>
          </Grid>
          <Grid item ><Box sx={{color:deepPurple[500]}}><StarBorderIcon sx={{fontSize:'2rem'}}/>
          <span>Rate & Review Product </span></Box></Grid>
       
        </Grid>
        ))}
      </Grid>
         
   
    </div>
  );
};

export default OrderDetails;
