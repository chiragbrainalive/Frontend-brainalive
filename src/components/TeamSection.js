import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamMembers from "../constant/members";

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: "10%", 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "8%",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "20%",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
};

const TeamSection = () => {

  return (
    <section className="w-full bg-black text-white py-12 overflow-hidden">
      <h2
        className="text-center mb-12 text-[64px] font-normal leading-[120%] tracking-[0%] w-[316px] h-[77px] mx-auto bg-gradient-to-t from-white via-white/60 to-white/30 bg-clip-text text-transparent font-poppins"
      >
        The Team
      </h2>

      <div className="px-6">
        <Slider {...settings}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className="px-2">
              <div className="h-[400px] rounded-[20px] overflow-hidden relative group mx-auto bg-gradient-to-b from-green-700
               to-custom-green transition-all duration-300 hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 w-[197px] h-[52px] rounded-[24px] bg-black flex items-center justify-between px-2 -translate-x-1/2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="bg-custom-green text-white font-semibold text-sm px-3 py-[10px] rounded-[24px] leading-tight text-left w-max whitespace-nowrap overflow-hidden">
                    <span>{member.name}</span>
                  </div>
                  <span className="text-white text-sm font-medium whitespace-nowrap mr-4">
                    {member.role}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end items-center text-center px-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out pb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm bg-custom-green text-black font-bold px-4 py-1 rounded-full animate-slide-up">
                      {member.name}
                    </span>
                    <span className="text-sm bg-white text-black px-4 py-1 rounded-full animate-slide-up delay-100">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 animate-slide-up delay-200">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
