import React from "react";
import Carousel from "./components/Carousel";
import Service from "./components/Service";

export const metadata = {
  title: "PATCHA GARDEN : HOME",
};

function page() {
  return (
    <>
      {/* <Carousel /> */}
      <Service />
    </>
  );
}

export default page;
