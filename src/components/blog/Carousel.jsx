import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const Carousel = () => {
  return (
    <div className={`bg-white m-auto flex w-11/12`}>
      <div className="description relative flex flex-col gap-4 flex_b_50 p-3 py-16">
        <span className="top-0 absolute text-gray-500 underline ">
          Recent posts
        </span>
        {/* field */}
        <div className="slab text-red-600 uppercase">-WebDesign</div>
        {/* title  */}
        <div>
          <h1 className="uppercase text-3xl slab font-medium">
            10 tips about fullstack website design
          </h1>

          {/* date */}
          {/* time */}
          <div className=" italic text-gray-500 my-3 ">12th October 2022</div>
        </div>

        {/* description */}
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ipsa blanditiis labore asperiores vel? Quis debitis nisi cupiditate
          nesciunt incidunt? Alias fugit ipsa consequatur odit laborum quod ea
          debitis, quos suscipit doloremque vitae eius error blanditiis porro
          repellat animi id quia autem esse cum? Soluta natus libero quam
          provident quaerat?
        </p>

        <div className="absolute right-0 left-0 bottom-2 flex justify-center  gap-10">
          <BsArrowLeftCircle className="text-5xl text-gray-500  cursor-pointer hover:text-gray-600" />
          <BsArrowRightCircle className="text-5xl text-gray-500 cursor-pointer hover:text-gray-600" />
        </div>
      </div>
      <div className="">
        <div className="image flex_b_50 bg-gray-200 ">
          <img
            src="https://i.ytimg.com/vi/UoCnsh6x2ls/maxresdefault.jpg"
            alt="fullstack"
            className=" w-full object-cover"
            style={{ height: "550px" }}
          />
        </div>
      </div>
    </div>
  );
};
