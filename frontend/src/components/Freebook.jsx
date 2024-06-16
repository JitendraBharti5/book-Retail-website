import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "../utils/axios.jsx";

import Catcard from "./Catcard";


function Freebook() {
  const [cate, setCat] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      try {
        const res = await axios.get("/cate");
        console.log(res.data);
        setCat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCat();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 ">Explore By Category</h1>
          <p>
            Get the book related to your intrested field.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {cate.map((item) => (
              <Catcard item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
