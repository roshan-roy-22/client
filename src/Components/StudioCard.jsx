import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import { Rating } from "@mui/material";


const StudioCard = () => {
  return (
    <>
      <div class="relative mx-auto  flex w-80 flex-col rounded-xl  border-1 bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg ">
          <img
            src="https://images.pexels.com/photos/3746149/pexels-photo-3746149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div class="p-6">
          <h1 className="text-2xl mb-1 font-medium">Appolo Studio</h1>
          <Rating name="half-rating-read" value={3.5}  precision={0.5}  />
         <div className="items-center justify-center">
           <PlaceIcon/>
           <span className="text-gray-400">Thrissur,Kunnamkulam</span>
         </div>
          <p>Starting from <span className="text-xl font-semibold italic">$900</span></p>
          <button className="py-2 mt-5 my-1 px-4 border-2 border-[#E36276] text-white w-full bg-[#E36276] hover:bg-white hover:text-[#E36276]  rounded-lg">View Studio</button>
        </div>
      </div>
    </>
  );
};

export default StudioCard;
