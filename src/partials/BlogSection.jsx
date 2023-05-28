import React from "react";

function BlogSection() {
  return (
    <div className="w-full h-fit lg:h-screen mx-auto px-5 md:px-16 lg:px-32 py-20 bg-white">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-slate-950">
          Capital Chronicles
        </h2>
        <p className="mt-1 text-gray-600 ">
          Exploring the Financial Tech Frontier with Secure Insights
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="group overflow-hidden" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image Description"
            />
            <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium  text-white py-1.5 px-3 bg-slate-900">
              Sponsored
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Mastering Personal Finance
            </h3>
            <p className="mt-3 text-gray-800 line-clamp-3">
              Discover expert tips and strategies to take control of your
              personal finances and pave the way to financial independence.
            </p>
            <p className="transition-all mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stokeWidth="2"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </div>
        </a>

        <a className="group overflow-hidden" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://images.unsplash.com/photo-1606189934846-a527add8a77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image Description"
            />
            <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium  text-white py-1.5 px-3 bg-slate-900">
              Sponsored
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Investing in the Digital Age
            </h3>
            <p className="mt-3 text-gray-800 line-clamp-3">
              Dive into the world of digital investments, explore emerging
              trends, and learn how to make informed decisions in the rapidly
              evolving financial landscape.
            </p>
            <p className=" transition-all mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stokeWidth="2"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </div>
        </a>

        <a className="group overflow-hidden" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80"
              alt="Image Description"
            />
            <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium  text-white py-1.5 px-3 bg-slate-900">
              Sponsored
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
              Demystifying Cryptocurrencies
            </h3>
            <p className="mt-3 text-gray-800 line-clamp-3">
              Embark on a journey to understand the fascinating world of
              cryptocurrencies, unravel the complexities, and explore the
              potential of digital assets for your financial future.
            </p>
            <p className=" transition-all mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stokeWidth="2"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogSection;
