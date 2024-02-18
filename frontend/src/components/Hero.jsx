import React from "react";
import wave from "../assets/wave.svg";

const Hero = () => {
  return (
    <>
      <div className="w-full flex-none overflow-x-hidden bg-[#4ab0fb]">
        <div className="py-32 px-8">
          <div className="max-w-7xl w-full mx-auto justify-start flex-none">
            <div className="w-full flex space-y-16 md:space-y-0 md:space-x-8 inline-flex items-stretch flex-none flex-col md:flex-row">
              <div className="w-full md:w-6/12 justify-center inline-flex items-start flex flex-col flex-none">
                <h1 className="font-sans text-5xl tracking-tight font-extrabold text-white">
                  Ask Any&nbsp;Doubts.
                </h1>
                <p className="text-white mt-4 mb-8">
                  Mentorius is a one-stop destination for both teachers &
                  students. You will get courses, certificates, study material,
                  all of them arranged by topics & categories. There is no
                  excuse for you to not study.
                </p>
                <a
                  className="bg-white rounded-full p-4 font-bold "
                  href="/findmentor"
                >
                  <span>Get Started!</span>{" "}
                  <span className="font-normal">(as free as air)</span>
                </a>
              </div>
              <div className="w-full md:w-6/12 shadow-2xl flex-none">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                  className="w-[50vw] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={wave}
          alt=""
          className="w-full p-0 m-0 pt-[-100px] mt-[-100px]"
        />
      </div>
    </>
  );
};

export default Hero;
