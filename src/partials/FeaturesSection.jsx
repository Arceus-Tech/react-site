import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import ImageOne from '../assets/fearture_image_one.svg'
function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Adjust threshold as needed
  });

  const divRef = useRef(null);
  const divRef_2 = useRef(null);

  useEffect(() => {
    if (inView) {
      divRef.current.classList.add("animate-slide-in-t-b");
      divRef_2.current.classList.add("animate-slide-in-r-l");
    } else {
      divRef.current.classList.remove("animate-slide-in-t-b");
      divRef_2.current.classList.remove("animate-slide-in-r-l");
    }
  }, [inView]);

  return (

<div  ref={ref} className="w-full mx-auto px-5 md:px-16 lg:px-32 py-20 bg-white">

  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div
          ref={divRef}
          className={classNames("h-full transition-all", {
            "opacity-0": !inView,
          })}
        >
      <img className="h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image Description" />
    </div>

    <div
          ref={divRef_2}
          className={classNames("mt-5 sm:mt-10 lg:mt-0 transition-all", {
            "opacity-0": !inView,
          })}
        >
      <div className="space-y-6 sm:space-y-8">

        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
          We address the unique challenges faced by fintech start-ups.
          </h2>
          <p className="text-gray-500">
          In addition to collaborating with start-up enterprises as a digitalization partner, we have developed cutting-edge enterprise products specifically tailored to address common pain points encountered in the financial technology sector.</p>
        </div>

        <ul role="list" className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">

            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>


            <span className="text-sm sm:text-base text-gray-500">
              <span className="font-bold">Streamlined & efficient </span> design process
            </span>
          </li>

          <li className="flex space-x-3">
   
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>


            <span className="text-sm sm:text-base text-gray-500">
            Robust features for  <span className="font-bold">financial operations</span>
            </span>
          </li>

          <li className="flex space-x-3">

            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>


            <span className="text-sm sm:text-base text-gray-500">
            Optimized User Experience Design
            </span>
          </li>
        </ul>

      </div>
    </div>

  </div>

</div>

  )
}

export default FeaturesSection