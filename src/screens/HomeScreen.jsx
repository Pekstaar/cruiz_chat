import React from "react";
import { About, Cards, Carousel, Testimonials } from "../components/home";
import { Footer, Navigation } from "../components/home";
import { NavContext } from "../Store";

export const HomeScreen = () => {
  const styles = {
    main: "relative",
  };

  const btn = (
    <button
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      className="rounded-full absolute bottom-12 outline-none bg-green-500 z-50 hover:bg-green-600 text-white p-2"
      style={{
        right: "20px",
        float: "right",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );

  return (
    <div id="home" className={styles.main}>
      <NavContext>
        <Navigation />
      </NavContext>
      <Carousel />
      <div className="md:container  mx-auto bg-white p-5">
        <Cards />
        <About />
        <Testimonials />
      </div>
      {btn}
      <Footer />
    </div>
  );
};
