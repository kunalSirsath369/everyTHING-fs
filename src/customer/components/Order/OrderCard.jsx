import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/${5}')} className="p-4 shadow-[rgba(0,_0,_0,_0.20)_5px_5px_10px_5px] hover:scale-105 transition-all ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="space-y-2">Lorem ipsum dolor sit </p>
              <p className="opacity-50 text-sm font-semibold">Size : M</p>
              <p className="opacity-50 text-sm font-semibold">Color : Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹ 199</p>
        </Grid>
        <Grid item xs={4}>
          {true && (<div>
            <p>
            <AdjustIcon sx={{width:"15px" , height:"15px"}} className="text-green-600 mr-2 text-sm"/>
              <span>Delivered on March 03</span>
           
            </p>
            <p className="text-xs"><span>Your item Has Been Delivered</span></p></div>
          )}
          {false && (
            <p>
            <AdjustIcon/>
              <span>Expected Delivery On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
