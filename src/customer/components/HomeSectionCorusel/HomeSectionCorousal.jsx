import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCorousal = ({data,sectionName}) => {

  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5.5,
    },
  };
 

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className=" ">
    <h2 className="text-3xl xl:text-4xl font-bold text-white p-5 mx-5">{sectionName}</h2>
      <div className="relative ml-2 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
      
          mouseTracking

        />

      </div>
    </div>
  );
};

export default HomeSectionCorousal;
