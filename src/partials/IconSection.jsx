import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import ImageOne from "../assets/icons_image_one.svg";

function IconSection() {

  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.3, // Adjust threshold as needed
  });

  const divRef = useRef(null);
  const divRef_2 = useRef(null);
  const divRef_3 = useRef(null);

  useEffect(() => {
    if (inView) {
      divRef_3.current.classList.add("animate-slide-in-p-i");
      divRef.current.classList.add("animate-slide-in-l-r",);
      divRef_2.current.classList.add("animate-slide-in-r-l");
    } else {
      divRef_3.current.classList.remove("animate-slide-in-p-i");
      divRef.current.classList.remove("animate-slide-in-l-r");
      divRef_2.current.classList.remove("animate-slide-in-r-l");
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-fit lg:min-h-screen mx-auto px-5 md:px-16 lg:px-32 py-20 bg-slate-950 flex flex-col items-center justify-center gap-20">

      <div
        ref={divRef_3}
        className={classNames(" text-center transition-all", {
          "opacity-0": !inView,
        })}
      >
        <h2 className="text-3xl font-bold lg:text-4xl text-white">
          Collaborative tools for enhanced user experience in financial tech solutions
        </h2>
        <p className="mt-3 text-gray-400">
          We empower businesses to transform their digital landscape by providing comprehensive financial technology solutions that enable them to thrive.
        </p>
      </div>
      <div className="h-full grid md:grid-cols-2 gap-12 items-center justify-center">


        <div
          ref={divRef}
          className={classNames("flex flex-col gap-5 h-full", {
            "opacity-0": !inView,
          })}
        >

          <div className="space-y-6 lg:space-y-10 h-full flex flex-col items-center justify-between">
            <div className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  shadow-sm mx-auto bg-slate-900 border-gray-700 text-gray-200">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </span>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  Cutting-edge documentation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our extensive documentation and client libraries provide businesses with the resources they need to swiftly implement custom integrations and accelerate development timelines.
                </p>
              </div>
            </div>

            <div className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  shadow-sm mx-auto bg-slate-900 border-gray-700 text-gray-200">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </span>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  Engaged developer community
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We actively support and contribute to the developer community through open-source projects, fostering collaboration and innovation.
                </p>
              </div>
            </div>

            <div className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  shadow-sm mx-auto bg-slate-900 border-gray-700 text-gray-200">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </span>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                  Streamlined and cost-effective
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our solutions offer simplicity and affordability, enabling businesses to securely engage in capital trades and a wide range of financial transactions.
                </p>
              </div>
            </div>


          </div>
        </div>

        <div
          ref={divRef_2}
          className={classNames(" h-full", {
            "opacity-0": !inView,
          })}
        >
          <img className="h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Des" />
        </div>
      </div>
    </div>
  );
}

export default IconSection;
