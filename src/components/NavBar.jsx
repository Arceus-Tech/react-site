import { Fragment, useState } from "react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { Popover, Transition } from "@headlessui/react";

import Logo from "../assets/logo-white.svg";

const company = [
  {
    name: "About",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Contact",
    description: "Create your own targeted content",
    href: "##",
    icon: IconOne,
  },
];

const resources = [
  {
    name: "Help center",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Customers",
    description: "Create your own targeted content",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Legal Doc",
    description: "Create your own targeted content",
    href: "##",
    icon: IconOne,
  },
];

const navigation = [
  { id: 1, name: "Home", href: "#", current: true, items: null },
  { id: 2, name: "Blog", href: "#", current: false, items: null },
  { id: 3, name: "Company", href: "#", current: false, items: company },
  { id: 4, name: "Resources", href: "#", current: false, items: resources },
];

function classNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function NavBar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(activeItem === itemName ? "" : itemName);
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        id="navbar"
        className="absolute flex flex-wrap md:flex-nowrap w-full bg-slate-950 justify-between text-white items-center px-5 md:px-16 lg:px-32 py-5"
      >
        <div className="md:hidden">
          <Bars3Icon className="text-white h-8 w-8" />
        </div>

        <div className="flex items-center">
          <img src={Logo} alt="" className="h-8 w-8" />
        </div>

        <div className="sm:ml-6 hidden md:block mt-4 md:mt-0">
          <div className="flex flex-wrap md:flex-nowrap space-x-4">
            {navigation.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                activeItem={activeItem}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>

        <div className="hidden  transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-80 border-r pt-7 pb-10 overflow-y-auto scrollbar-y lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y bg-blue-600 border-blue-800">
          <div className="px-6">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              aria-label="Brand"
            >
              Secure Capital
            </a>
          </div>

          <div className="p-6 w-full flex flex-col flex-wrap">
            <ul className="space-y-1.5">
              {navigation.map((item) => (
                <NavSideBar key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md inline-flex items-center">
            <ChatBubbleLeftRightIcon className="w-5 h-5 md:mr-2" />
            <span className="hidden md:inline">Get in touch</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

function NavSideBar({ item }) {
  const hasItems = item.items && item.items.length > 0;
  return (
    <li id="account-accordion">
      <div className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-blue-700 bg-blue-600">
        {item.name}
      </div>
      {hasItems && (
        <div
          className=" w-full overflow-hidden transition-[height] duration-300"
        >
          <ul className="pt-2 pl-2">
            {item.items.map((sub) => {
              return (
                <li>
                  <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md  text-slate-500 hover:text-white ">
                    {sub.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}

function NavigationItem({ item, activeItem, onItemClick }) {
  const hasItems = item.items && item.items.length > 0;

  const handleClick = () => {
    onItemClick(item.name);
  };

  return (
    <Popover>
      <Popover.Button
        onClick={handleClick}
        className={classNames(
          "transition ease-in-out delay-100 rounded-md px-4 py-2 outline-none text-sm font-medium inline-flex justify-center items-end gap-1",
          activeItem === item.name ? "text-blue-500" : "text-slate-400",
          "hover:text-blue-500"
        )}
      >
        {item.name}
        {hasItems && <ChevronDownIcon className="w-4 h-4 text-slate-400" />}
      </Popover.Button>

      {hasItems && (
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
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        <sub.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600">
                          {sub.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          {sub.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  );
}

function IconOne(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default NavBar;
