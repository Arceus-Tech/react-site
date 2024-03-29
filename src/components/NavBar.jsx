import { Fragment, useState } from "react";
import { ChevronDownIcon, Bars3Icon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { Popover, Transition } from "@headlessui/react";

import Logo from "../assets/logo-white.svg";

import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const company = [
  {
    id: "c_1",
    name: "About Us",
    description: "Learn about our company and what we do.",
    href: "/about-us",
    icon: IconOne,
  },
  {
    id: "c_3",
    name: "Contact Us",
    description: "Get in touch with us to learn more or to make a suggestion.",
    href: "/contact-us",
    icon: IconTwo,
  },
];



const navigation = [
  { id: 1, name: "Home", href: "/", current: true, items: null },
  { id: 2, name: "Products", href: "/products", current: false, items: null },
  { id: 3, name: "FAQ", href: "/faq", current: false, items: null },
  { id: 4, name: "Company", href: "/", current: false, items: company },

];

function classNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function NavBar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(activeItem === itemName ? "" : itemName);
};

const [closeNav, setCloseNav] = useState(true);

  return (
    <div>
      {/* Navigation */}

      <div id="application-sidebar-brand"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[120] w-64 bg-blue-700 pt-7 pb-10 overflow-y-auto scrollbar-y ">
        <div className="px-6">
          <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Secure Capital Trades</a>

          <button type="button" className="w-8 h-8 inline-flex justify-center items-center gap-2 rounded-md border border-slate-950 text-slate-950 hover:text-gray-400 transition" data-hs-overlay="#application-sidebar-brand" aria-controls="application-sidebar-brand" aria-label="Toggle navigation">
            <svg className="w-3 h-3" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>


      </div>



      <nav
        id="navbar"
        className="fixed flex flex-wrap md:flex-nowrap w-full shadow-lg bg-slate-950 justify-between text-white items-center px-5 md:px-16 lg:px-32 py-5 z-[100]"
      >


        <div className="flex flex-wrap md:flex-nowrap w-full shadow-lg bg-slate-950 justify-between text-white items-center">

          <div className="sm:hidden">
            <button  type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium  shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm bg-slate-900 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>



          <NavLink to="/" className="flex items-center">
            <img src={Logo} alt="" className="h-8 w-8" />
          </NavLink>

          <div className="sm:ml-6 hidden md:block mt-4 md:mt-0">
            <div className="flex flex-wrap md:flex-nowrap space-x-4">

              {navigation.map((item) => (
                <div key={item.id}>
                  <NavigationItem
                    key={item.id}
                    item={item}
                    activeItem={activeItem}
                    onItemClick={handleItemClick}
                  />
                </div>

              ))}
            </div>
          </div>


          <div className="mt-0">
            <NavLink to="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md inline-flex items-center">
              <ChatBubbleLeftRightIcon className="w-5 h-5 md:mr-2" />
              <span className="hidden md:inline">Get in touch</span>
            </NavLink>
          </div>

        </div>

        {
        
        closeNav && 
        
        <div id="navbar-collapse-with-animation" className="hidden overflow-hidden transition-all duration-300 basis-full grow ">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
              <ul className="space-y-1.5">
                {navigation.map((item , index) => (


                  <li key={index} className="hs-accordion" id="account-accordion">

                    {(item.items && item.items.length > 0) ? (
                    <div className="hs-accordion-toggle flex items-center cursor-pointer justify-between gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-md hover:bg-blue-600"
                      to={item.href}>
                      {item.name}



                      {(item.items && item.items.length > 0) && (
                        <div>
                          <svg className="hs-accordion-active:block  ml-auto hidden w-3 h-3 text-white group-hover:text-white" width="16"
                            height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round"></path>
                          </svg>

                          <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-white group-hover:text-white" width="16"
                            height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </div>
                      )}

                    </div>
                    ) : 
                    
                    (
                      <NavLink className="hs-accordion-toggle flex items-center cursor-pointer justify-between gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-md hover:bg-blue-600"
                      to={item.href}>
                      {item.name}



                      {(item.items && item.items.length > 0) && (
                        <div>
                          <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-white group-hover:text-white" width="16"
                            height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round"></path>
                          </svg>

                          <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-white group-hover:text-white" width="16"
                            height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                              strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </div>
                      )}

                    </NavLink>
                    )
                    
                    
                    }

                    {(item.items && item.items.length > 0) && (

                      <div id="account-accordion-child"
                        className="cursor-pointer hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                        <ul className="pt-2 pl-2">
                          {item.items.map((sub, index) => {
                            return (
                              <li key={index}>
                                <NavLink className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white hover:text-white rounded-md hover:bg-blue-600"
                                  to={sub.href}>
                                  {sub.name}
                                </NavLink>
                              </li>

                            );
                          })}
                        </ul>
                      </div>)}
                  </li>

                ))}


              </ul>
            </nav>

          </div>
        </div>
        
        }

        
      </nav>



    </div>
  );
}


function NavigationItem({ item, activeItem, onItemClick }) {
  const hasItems = item.items && item.items.length > 0;

  const handleClick = () => {
    onItemClick(item.name);
  };

  return (
    <div>
      {hasItems ?
        <Popover>
          <Popover.Button
            onClick={handleClick}
            className={classNames(
              "transition ease-in-out delay-100 rounded-md px-4 py-2 outline-none text-sm font-medium inline-flex justify-center items-end gap-1",
              activeItem === item.name ? "text-blue-500" : "text-slate-400",
              "hover:text-blue-500"
            )}
          >

            {item.name} <ChevronDownIcon className="w-4 h-4 text-slate-400" />
          </Popover.Button>

          
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-blue ring-opacity-5 bg-slate-900">
                  <div className="relative grid gap-8 bg-slate-950 p-7 lg:grid-cols-2">
                    {item.items.map((sub) => {
                      return (
                        <NavLink
                          key={sub.name}
                          to={sub.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <sub.icon/>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-blue-600">
                              {sub.name}
                            </p>
                            <p className="text-sm text-slate-600">
                              {sub.description}
                            </p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
        </Popover>

        : <NavLink onClick={handleClick} className={classNames(
          "transition ease-in-out delay-100 rounded-md px-4 py-2 outline-none text-sm font-medium inline-flex justify-center items-end gap-1",
          activeItem === item.name ? "text-blue-500" : "text-slate-400",
          "hover:text-blue-500"
        )} to={item.href}>{item.name} </NavLink>}
    </div>


  );
}

function IconOne() {
  return (
    <InformationCircleIcon className="w-10 h-10"/>
  );
}


function IconTwo() {
  return (
    <ChatBubbleLeftRightIcon className="w-10 h-10"/>
  );
}
export default NavBar;
