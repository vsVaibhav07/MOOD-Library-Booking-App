import React, { lazy, Suspense } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LibraryCard = lazy(() => import('./LibraryCard'));

const LibrariesNearYou = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-3xl ml-10 font-bold my-6">Recommended Libraries</h2>
      <div className="w-[95%] mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Slider {...settings}>
            {[...Array(14)].map((_, idx) => (
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

export default LibrariesNearYou;
