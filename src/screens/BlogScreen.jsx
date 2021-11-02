import React from "react";
import { Carousel } from "../components/blog";
import { Footer, Navigation } from "../components/home";
import { NavContext } from "../Store";

export const BlogScreen = () => {
  return (
    <>
      <NavContext>
        <Navigation />
      </NavContext>
      <main className=" m-auto">
        <Carousel />

        <div className="blog_body px-12 my-8">
          <h1 className="title slab text-2xl font-medium text-gray-600">
            LATEST POSTS
          </h1>
          <hr className="line h-2 border-none rounded-3xl bg-gray-100  " />
          <div className="posts my-5 gap-6 mx-auto">
            <Post
              className="bg-gray-900"
              img={
                "https://repository-images.githubusercontent.com/130268121/b4fd5300-b585-11ea-8718-1e141e78842e"
              }
              category="design"
              Title={"Designing using Tailwind Css"}
              date={"31st June 2022"}
            />
            <Post
              className="bg-gray-900"
              img={
                "https://assets.website-files.com/601b0eabbce5fc78dc318621/601e985dbe60325095afc7c4_Main%20Post%20Image%206.png"
              }
              category="Photography"
              Title={"Photography Tips and Tricks"}
              date={"19th June 2022"}
            />
            <Post
              className="bg-gray-900"
              img={
                "https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png"
              }
              category="Database"
              Title={"Building And Managing Databases"}
              date={"12th June 2022"}
            />{" "}
            <Post
              className="bg-gray-900"
              img={
                "https://mindlercareerlibrarynew.imgix.net/Game_Development.png"
              }
              category="Gaming"
              Title={"Game Design and Development"}
              date={"18th May 2022"}
            />
            <Post
              className="bg-gray-900"
              img={
                "https://repository-images.githubusercontent.com/130268121/b4fd5300-b585-11ea-8718-1e141e78842e"
              }
              category="design"
              Title={"Designing using Tailwind Css"}
              date={"31st June 2022"}
            />
            <Post
              className="bg-gray-900"
              img={
                "https://assets.website-files.com/601b0eabbce5fc78dc318621/601e985dbe60325095afc7c4_Main%20Post%20Image%206.png"
              }
              category="Photography"
              Title={"Photography Tips and Tricks"}
              date={"19th June 2022"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const Post = ({ img, category, Title, date }) => (
  //image
  <div
    className="bg-black inline-block mb-4"
    style={{ height: "390px", width: "450px", marginLeft: "30px" }}
  >
    <div className="frame relative hover:opacity-90 cursor-pointer h-full">
      <img src={img} alt="" className="image object-cover h-full w-full" />

      <div className="absolute bottom-0 left-0 bg-white w-4/6 p-4 flex flex-col gap-2">
        <span className="category slab text-red-600 uppercase">
          -{category}
        </span>
        <span className="title text-2xl slab text-gray-700">{Title}</span>
        <span className="date text-gray-700 text-sm">{date}</span>
      </div>
    </div>
  </div>
);
