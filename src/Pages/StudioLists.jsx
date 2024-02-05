// import { Rating } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import StudioCard from "../Components/StudioCard";

const StudioLists = () => {
  return (
    <>
      <section className="grid grid-cols-2 h-60 px-16">
        <div className="p-12">
          <h1 className="text-3xl my-4 font-bold">Search Studios</h1>
          <div className="flex">
            <input
              type="text"
              className="px-5 outline-none  focus:ring-0 focus:outline-none"
            />
            <button className="px-11 py-3 text-white bg-[#DC2626]">Find</button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("https://snapsage.vercel.app/Images/Picsart_23-09-19_18-18-00-295.jpg")`,
            backgroundSize: "cover",
          }}
        ></div>
      </section>

      <section className="flex justify-end px-16 my-6">
        <select
          name=""
          id=""
          className=" outline-none py-3 ms-3 w-[18rem] px-6 "
        >
          <option value="">Choose Category</option>
          <option value="Candid Photography">Candid Photography</option>
          <option value="Kids Photography">Kids Photography</option>
          <option value="Groom Photography">Groom Photography</option>
          <option value="Bridal Photography">Bridal Photography</option>
          <option value="Post wedding ">Post wedding </option>
          <option value="wedding video">wedding video</option>
          <option value="Album">Album</option>
          <option value="Drone shoot">Drone shoot</option>
        </select>
        <select name="" id="cars" class="   ms-3 py-3 w-[18rem] px-6 ring-0 ">
          <option value="">Choose Location</option>
          <option value="kannur">Kannur</option>
          <option value="kozhikode">Kozhikode</option>
          <option value="wayanad">Wayanad</option>
          <option value="thrissur">Thrissur</option>
          <option value="palakkad">Palakkad</option>
          <option value="malappuram">Malappuram</option>
          <option value="ernakulam">Ernakulam</option>
          <option value="idukki">Idukki</option>
          <option value="kollam">Kollam</option>
          <option value="kottayam">Kottayam</option>
          <option value="alappuzha">Alappuzha</option>
          <option value="kasargod">Kasargod</option>
          <option value="pathanamthitta">Pathanamthitta</option>
          <option value="thiruvananthapuram">Thiruvananthapuram</option>
        </select>
      </section>

      <section className="my-9 px-16">
       <StudioCard/>
      </section>
    </>
  );
};

export default StudioLists;
