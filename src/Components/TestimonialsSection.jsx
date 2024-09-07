import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientImg1 from "../assets/testimonial-img.png";
import Stars from "../assets/stars.png";

const data = [
  {
    title: "Jeff",
    subtitle: "Marketing Director",
    ClientImg: ClientImg1,
    reviews:"Bharat was a pleasure to work with and I will use him again-",
    Starsimg: Stars,
  },
  {
    title: "Juan",
    subtitle: "Project Account Manager",
    ClientImg: ClientImg1,
    reviews: "Bharat is exceptional at what he does. It was a real pleasure meeting him and working with him. I would highly recommend Bharat for Local SEO needs. We were more than pleased with the work he provided us. Looking forward to working with him again soon.",
    Starsimg: Stars,
  },
  {
    title: "Yashveer",
    subtitle: "Project Manager",
    ClientImg: ClientImg1,
    reviews: "Bharat was very helpful and proactive in doing his job. He took initiatives and delivered really good results.",
    Starsimg: Stars,
  },
  {
    title: "Mario",
    subtitle: "Creative Director",
    ClientImg: ClientImg1,
    reviews:
      "Bharat is fantastic. He took care of everything we needed. After talking to him for 15 minutes and going through his processes during our initial call, you knew that he was more than capable. His completion time and efficiency are also phenomenal. I will definitely be going back to him!",
    Starsimg: Stars,
  },
  {
    title: "Krunal",
    subtitle: "Ecommerce Director",
    ClientImg: ClientImg1,
    reviews:
      "Bharat was extremely knowledgeable and professional. He was thorough in his communication, easy to work with, and great with His management of all deliverables.",
    Starsimg: Stars,
  },
];

function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <div id="reviews" className="w-full h-auto">
      <div className="max-w-[1320px] mx-auto text-white lg:pb-20 lg:py-0 pt-5 pb-10 lg:pt-0 flex flex-col items-start lg:px-0 md:px-8 sm:px-6 px-4">
        
        <div className="testCols grid grid-cols-1">
        <h2 className="lg:text-5xl text-[42px] leading-[1.2em] text-black text-start font-extrabold ">Testimonials</h2>
        <h3 className="lg:text-5xl leading-7 text-[24px] text-black text-start font-medium ">Trusted by over <span className="font-extrabold italic text-[#023c4e]">1000+</span> business owners</h3>
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="shadow-sm border drop-shadow-2xl lg:p-6 p-4 rounded-lg min-h-[420px] lg:mt-10 mt-5"
              >   
                <img src={d.Starsimg} alt="Stars-Img" />
                <p className="text-gray-600 lg:text-[18px] text-[16px] my-8">{d.reviews}</p>
                <div className="clientdetsBox text-black flex items-start gap-5">
                  <div className="clientName">
                    <h5 className="font-bold text-black text-[18px]">{d.title}</h5>
                    <p>{d.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
