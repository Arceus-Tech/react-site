import React from "react";
import Logo from "../assets/logo-white.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 md:px-16 lg:px-32 py-5">
      <div className="max-w-[85rem] py-10 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <div className="h-full w-full flex">
              <img src={Logo} alt="" className="h-20 w-20" />
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <NavLink
                  to="/"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                >
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/products"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                >
                  Products
                </NavLink>
              </p>
              {/* <p><NavLink className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Careers</NavLink> <span className="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span></p> */}
              <p>
                <NavLink
                  to="/faq"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                >
                  FAQ
                </NavLink>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Company</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <NavLink
                  to="/about-us"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                >
                  About Us
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/contact-us"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                >
                  Contact Us
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/privacy-policy"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                >
                  Privacy Policy
                </NavLink>
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                New Fintech or big discounts. Never spam.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              Powered by Secure Sphere Solutions © 2024 Secure Capital Trades .
              All rights reserved.
            </p>
          </div>

          <div>
            <a
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
              href="#"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
