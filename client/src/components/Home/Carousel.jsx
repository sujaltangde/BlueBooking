import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Image 1",
    img: "/images/profile.jpg",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, dolor saepe dolorum quisquam illo quo hic sequi quod, ipsum cupiditate, facilis distinctio repudiandae accusamus labore error velit quibusdam explicabo minus. ",
  },
  {
    name: "Image 2",
    img: "/images/profile.jpg",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, dolor saepe dolorum quisquam illo quo hic sequi quod, ipsum cupiditate, facilis distinctio repudiandae accusamus labore error velit quibusdam explicabo minus. ",
  },
  {
    name: "Image 3",
    img: "/images/profile.jpg",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, dolor saepe dolorum quisquam illo quo hic sequi quod, ipsum cupiditate, facilis distinctio repudiandae accusamus labore error velit quibusdam explicabo minus. ",
  },
  {
    name: "Image 4",
    img: "/images/profile.jpg",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, dolor saepe dolorum quisquam illo quo hic sequi quod, ipsum cupiditate, facilis distinctio repudiandae accusamus labore error velit quibusdam explicabo minus. ",
  },
  {
    name: "Image 5",
    img: "/images/profile.jpg",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, dolor saepe dolorum quisquam illo quo hic sequi quod, ipsum cupiditate, facilis distinctio repudiandae accusamus labore error velit quibusdam explicabo minus. ",
  },
  {
    name: "Image 6",
    img: "/images/profile.jpg",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, dolor saepe dolorum quisquam illo quo hic sequi quod, ipsum cupiditate, facilis distinctio repudiandae accusamus labore error velit quibusdam explicabo minus. ",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/googleIcon.png" // Specify the path to your arrow image
      className={className}
      style={{ ...style, display: "block", background: "white", }}
      onClick={onClick}
      alt="Previous"
    />
  );
}

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20 slider-container">
          <Slider {...settings}>
            {data.map((e) => (
              <div className="bg-gray-300 border border-blue-400">
                <div className="rounded-t-xl py-4 bg-indigo-500 flex justify-center items-center">
                  <img
                    src={e.img}
                    alt="image.jpg"
                    className="h-44 w-44 rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl">{e.name}</p>
                  <p>{e.review}</p>
                  <button className="px-3 py-1 text-white bg-blue-600">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
