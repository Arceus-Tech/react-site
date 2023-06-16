import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import { RocketLaunchIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

const items = [
    {
      title: "Real-time Market Data",
      content:
        "Access up-to-the-minute market data to make informed trading decisions.",
      id: 1,
    },
    {
      title: "Advanced Charting Tools",
      content:
        "Visualize market trends and analyze data with customizable charts and technical indicators.",
      id: 2,
    },
    {
      title: "Risk Management",
      content:
        "Set stop-loss and take-profit orders to manage your risk and protect your investments.",
      id: 3,
    },
    {
      title: "Multiple Order Types",
      content:
        "Execute trades using a variety of order types, including market, limit, and stop orders.",
      id: 4,
    },
    ,
    {
      title: "Portfolio Management",
      content:
        "Track your investments and monitor your portfolio performance with ease.",
      id: 5,
    },
    ,
    {
      title: "Mobile Trading",
      content:
        "Trade on-the-go with our user-friendly mobile app, available for iOS and Android devices.",
      id: 6,
    },
  ];

  

function Products() {


    return (
        <>
            <div className="w-full h-fit min-h-screen mx-auto px-5 md:px-16 lg:px-32 py-20 bg-slate-950 flex items-center justify-between">

                <div className="w-full h-full flex flex-col justify-between gap-4 md:gap-8 lg:gap-20 items-center">


                <div>
                        <h1 className="block text-3xl font-bold sm:text-xl lg:text-6xl lg:leading-tight text-white">Trade with Confidence on Our Advanced Trading Platform</h1>
                        <p className="mt-3 text-lg  text-gray-400">Trade smarter with our advanced trading platform - access real-time market data, powerful charting tools, and robust risk management features.</p>

                    </div>

                    <div>
                        <img className="h-full rounded-md object-cover"src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Image Description" />
                    </div>

                    

                </div>
            </div>


            <div className="w-full mx-auto px-5 md:px-16 lg:px-32 py-20 bg-white">
                <div className="aspect-w-16 aspect-h-7">
                    <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" alt="Image Description" />
                </div>
                <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">

                    <div className="lg:col-span-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {items.map((item, index) => (
                             <div className="flex gap-x-5" key={index}>

                                <div className="grow">
                                    <h3 className="text-lg font-semibold text-gray-800 ">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-gray-600 ">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
))}

                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full mx-auto px-5 md:px-16 lg:px-32 py-20 bg-white">
                <div className="relative p-6 md:p-16">

                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl ">
                            Tailored trading solutions to meet your individual needs
                            </h2>



                            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                                <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl  active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                                    <span className="flex">
                                        <RocketLaunchIcon className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "  />
                                    
                                        <span className="grow ml-6">
                                            <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">User-friendly interface</span>
                                            <span className="block mt-1 text-gray-800 ">Trade with a user-friendly interface that's easy to use, even if you're a beginner.</span>
                                        </span>
                                    </span>
                                </button>

                                <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl " id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                                    <span className="flex">
                                    <UserGroupIcon className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "  />
                                    
                                        <span className="grow ml-6">
                                            <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">24/7 customer support</span>
                                            <span className="block mt-1 text-gray-800 ">Get help 24/7 from our customer support team.</span>
                                        </span>
                                    </span>
                                </button>

                                <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                                    <span className="flex">
                                    <WrenchScrewdriverIcon className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "  />
                                    
                                        <span className="grow ml-6">
                                            <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">Advanced trading tools</span>
                                            <span className="block mt-1 text-gray-80">Access real-time market data, charting tools.</span>
                                        </span>
                                    </span>
                                </button>
                            </nav>

                        </div>


                        <div className="lg:col-span-6">
                            <div className="relative">

                                <div>
                                    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                        <img className="shadow-xl shadow-gray-200 rounded-xl " src="https://images.unsplash.com/photo-1616628188506-4ad99d65640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
                                    </div>

                                    <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                                        <img className="shadow-xl shadow-gray-200 rounded-xl " src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
                                    </div>

                                    <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                                        <img className="shadow-xl shadow-gray-200 rounded-xl " src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
                        <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full "></div>
                    </div>

                </div>
            </div>

        </>


    );
}

export default Products;
