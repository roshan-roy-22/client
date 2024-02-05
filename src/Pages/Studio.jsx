import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, Rating } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Studio = () => {
  const [priceBtn, setPricebtn] = useState(false);
  return (
    <>
      <div className="px-8">
        <div className="grid grid-cols-3 max-lg:grid-cols-1">
          <div className="col-span-1">
            <div className="rounded-2xl mx-5 max-md:mx-0 px-7 py-3 my-5 border-4  md:mt-[12px]  opacity-1   lg:sticky    ">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl mb-1 font-medium">Appolo Studio</h1>
                <Rating name="half-rating-read" value={3.5} precision={0.5} />
                <div className="items-center justify-center">
                  <PlaceIcon />
                  <span className="text-gray-400">Thrissur,Kunnamkulam</span>
                </div>
                <div>
                  <i class="fa-solid fa-tag"></i>{" "}
                  <span className="text-red-500">Available offers</span>
                </div>
                <div className="flex justify-between">
                  <span>Per Day Charge </span>
                  <span onClick={(e) => setPricebtn((prev) => !prev)}>
                    Price Info <KeyboardArrowDownIcon />{" "}
                  </span>
                </div>
                {priceBtn && (
                  <div className="flex gap-1 flex-wrap">
                    <div className="flex items-start bg-slate-100 px-2 rounded">
                      <Checkbox defaultChecked />
                      <div className="flex flex-col">
                        <span>Bridal Photography</span>
                        <span>$783</span>
                      </div>
                    </div>
                    <div className="flex items-start bg-slate-100 px-2 rounded">
                      <Checkbox defaultChecked />
                      <div className="flex flex-col">
                        <span>Bridal Photography</span>
                        <span>$783</span>
                      </div>
                    </div>
                    <div className="flex items-start bg-slate-100 px-2 rounded">
                      <Checkbox defaultChecked />
                      <div className="flex flex-col">
                        <span>Bridal Photography</span>
                        <span>$783</span>
                      </div>
                    </div>
                  </div>
                )}
                <button className="py-3 w-full bg-red-600 rounded-lg text-white">
                  Request the price{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="bg-red-500 h-[25rem]">
                <img
                  className="h-[25rem] w-[30rem] object-cover"
                  src="https://images.pexels.com/photos/6596902/pexels-photo-6596902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500 h-[12rem]">
                    <img
                      className="h-[12rem] object-cover"
                      src="https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className="bg-green-500 h-[12rem]">
                    <img
                      className="object-cover h-[12rem]"
                      src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bg-yellow-300 h-[12rem]">
                  <img
                    className="h-[12rem] object-cover w-[30rem]"
                    src="https://images.pexels.com/photos/7580997/pexels-photo-7580997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <section>
              <p className="underline text-xl">About</p>
              <span className="my-2 font-semibold">
                <i class="fa-solid fa-flag-checkered me-2"></i>On Studio.in
                since 2013
              </span>
              <p>
                I am Akshay, the proud owner of Eternal Moments, based in
                Jaipur. Our dedicated team has been passionately capturing the
                essence of love since 2013 and has been part of over 700 joyous
                celebrations. At Eternal Moments, our mission is to create
                emotional, unforgettable, and authentic photographs that
                resonate with your heart. Photography, for us, is a magical
                blend of art and technology, anticipation and spontaneity,
                light, and shadow. It freezes moments in time, preserving them
                so you can relive those cherished memories over and over again.
              </p>
            </section>

            <section class="h-16 flex items-center overflow-x-scroll">
              <ul class="flex gap-4">
                <li class="cursor-pointer border py-2 px-4 rounded-[5px] ">
                  All
                </li>
                <li class="border py-2 px-4 min-w-[12rem] rounded-[5px] cursor-pointer ">
                  Groom Photography
                </li>
                <li class="border py-2 px-4 min-w-[12rem] rounded-[5px] cursor-pointer ">
                  Bridal Photography
                </li>
                <li class="border py-2 px-4 min-w-[12rem] rounded-[5px] cursor-pointer ">
                  Candid Photography
                </li>
                <li class="border py-2 px-4 min-w-[12rem] rounded-[5px] cursor-pointer ">
                  Kids Photography
                </li>
              </ul>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[31rem] overflow-y-scroll">
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://res.cloudinary.com/dmuikdem0/image/upload/v1695149539/Studio%20categoryWise%20Images/rpiwhghfaow0qhdgei2f.jpg"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://res.cloudinary.com/dmuikdem0/image/upload/v1695149541/Studio%20categoryWise%20Images/ymdxselbdtnxwmar7zio.jpg"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/3014859/pexels-photo-3014859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/371312/pexels-photo-371312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/265720/pexels-photo-265720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/1914982/pexels-photo-1914982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/1595388/pexels-photo-1595388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="h-[10rem] w-[12rem] md:w-[18rem]">
                <img
                  className="object-cover w-[18rem] h-[10rem]"
                  src="https://images.pexels.com/photos/1322128/pexels-photo-1322128.jpeg"
                  alt=""
                />
              </div>
            </section>

            <section className="my-7">
              <div className="flex justify-between">
                <h1 className="text-3xl">Reviews and Ratings</h1>
                <button className="text-white rounded bg-blue-600 px-1 py-2">
                  Write Review
                </button>
              </div>
              <div className="overflow-x-scroll flex gap-2 ">
                <div className="flex gap-2 justify-between">
                  <div className="w-[20rem] border-2 h-[25rem] p-3 flex flex-col gap-2 my-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0"
                        className="w-[50px] object-fill h-[50px] rounded-full "
                        alt="profile"
                      />
                      <p className="text-xl font-semibold">KS KSkdkee</p>
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={3.5}
                      precision={0.5}
                    />
                    <p>Amazing Photographers</p>
                    <p className="bottom-3">Posted On 21/2/2024</p>
                  </div>
                  <div className="w-[20rem] border-2 h-[25rem] p-3 flex flex-col gap-2 my-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0"
                        className="w-[50px] object-fill h-[50px] rounded-full "
                        alt="profile"
                      />
                      <p className="text-xl font-semibold">KS KSkdkee</p>
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={3.5}
                      precision={0.5}
                    />
                    <p>Amazing Photographers</p>
                    <p className="bottom-3">Posted On 21/2/2024</p>
                  </div>
                  <div className="w-[20rem] border-2 h-[25rem] p-3 flex flex-col gap-2 my-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0"
                        className="w-[50px] object-fill h-[50px] rounded-full "
                        alt="profile"
                      />
                      <p className="text-xl font-semibold">KS KSkdkee</p>
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={3.5}
                      precision={0.5}
                    />
                    <p>Amazing Photographers</p>
                    <p className="bottom-3">Posted On 21/2/2024</p>
                  </div>
                  <div className="w-[20rem] border-2 h-[25rem] p-3 flex flex-col gap-2 my-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0"
                        className="w-[50px] object-fill h-[50px] rounded-full "
                        alt="profile"
                      />
                      <p className="text-xl font-semibold">KS KSkdkee</p>
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={3.5}
                      precision={0.5}
                    />
                    <p>Amazing Photographers</p>
                    <p className="bottom-3">Posted On 21/2/2024</p>
                  </div>
                  <div className="w-[20rem] border-2 h-[25rem] p-3 flex flex-col gap-2 my-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0"
                        className="w-[50px] object-fill h-[50px] rounded-full "
                        alt="profile"
                      />
                      <p className="text-xl font-semibold">KS KSkdkee</p>
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={3.5}
                      precision={0.5}
                    />
                    <p>Amazing Photographers</p>
                    <p className="bottom-3">Posted On 21/2/2024</p>
                  </div>
                  <div className="w-[20rem] border-2 h-[25rem] p-3 flex flex-col gap-2 my-5">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0"
                        className="w-[50px] object-fill h-[50px] rounded-full "
                        alt="profile"
                      />
                      <p className="text-xl font-semibold">KS KSkdkee</p>
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={3.5}
                      precision={0.5}
                    />
                    <p>Amazing Photographers</p>
                    <p className="bottom-3">Posted On 21/2/2024</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio;
