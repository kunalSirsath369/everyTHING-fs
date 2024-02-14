import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard />
        </div>
        <div>
          <div className="lg:grid grid-cols-3 lg:px-16 relative">
            <div className="col-span-2">
              {[1, 1, , 1].map((item) => (
                <CartItem />
              ))}
            </div>
            <div className="px-5 sticky top-0 h-100vh mt-5 lg:mt-0 ">
              <div className="p-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <p className="uppercase font-bold opacity-60 pb-4">
                  Price Details
                </p>
                <hr />
                <div className="space-y-3 font-semibold">
                  <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>₹9322</span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-600">-₹9322</span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">Free</span>
                  </div>

                  <div className="flex justify-between pt-3  font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹9322</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white mt-5 transition-all duration-200 bg-indigo-500 font-pj rounded-xl mb-10 focus:outline-none hover:bg-opacity-90 w-full"
                >
                  Cheekout
                </button>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
