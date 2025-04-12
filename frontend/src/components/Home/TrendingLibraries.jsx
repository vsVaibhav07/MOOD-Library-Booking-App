import React, { lazy, Suspense } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LibraryCard = lazy(() => import('./LibraryCard'));

const TrendingLibraries = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5, 
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280, // for laptops
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // for tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // for mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-3xl ml-10 font-bold my-6">Trending Libraries</h2>
      <div className="w-[95%] mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Slider {...settings}>
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="px-2">
                <LibraryCard />
              </div>
            ))}
          </Slider>
        </Suspense>
      </div>
    </>
  );
};

export default TrendingLibraries;
