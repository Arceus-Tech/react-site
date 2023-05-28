import React from "react";
import classNames from "classnames";
const qt = [
  {
    title: "How secure is your platform?",
    content:
      "We take security seriously and have implemented robust measures to safeguard your financial information. Our platform utilizes state-of-the-art encryption techniques, multi-factor authentication, and regular security audits to ensure the highest level of protection for your sensitive data.",
    id: "one",
    active: true,
  },
  {
    title: "What types of financial services do you offer?",
    content:
      "Our financial tech solution provides a wide range of services tailored to meet your needs. These include budgeting tools, investment management, transaction monitoring, expense tracking, bill payment, and financial goal planning. We strive to offer a comprehensive suite of services to help you achieve your financial goals.",
    id: "two",
    active: false,
  },
  {
    title: "How do you handle customer support?",
    content:
      "We understand the importance of prompt and efficient customer support. Our dedicated support team is available via multiple channels, including phone, email, and live chat. We strive to provide timely responses to your queries and offer personalized assistance to address any concerns or issues you may encounter while using our financial tech solution.",
    id: "three",
    active: false,
  },
  {
    title: "Can I integrate your platform with other financial accounts?",
    content:
      "Absolutely! Our platform is designed to seamlessly integrate with various financial accounts, including bank accounts, credit cards, and investment portfolios. This allows you to have a holistic view of your finances in one place, enabling better financial management and decision-making. We prioritize interoperability to provide you with a comprehensive and unified financial experience.",
    id: "four",
    active: false,
  },
];

function FaqSection() {
  return (
    <div className="w-full mx-auto px-5 md:px-16 lg:px-32 py-20 bg-slate-950">
      <div className="w-full h-full grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 items-center">
        <div className="h-full">

          <img
            className="h-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1473445195779-499faea82cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1209&q=80"
            alt="Image Description"
          />

        </div>

        <div className=" flex flex-col gap-8"> 
        <div>
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
            Your questions, answered
          </h2>
          <p className="mt-1 text-gray-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
          

          <div className="hs-accordion-group">
          {qt.map((item, index) => (
            <div
              className={classNames(
                "hs-accordion rounded-xl p-6 hs-accordion-active:bg-white/[.05]",
                {
                  active: item.active,
                }
              )}
              id={`hs-basic-with-title-and-arrow-stretched-heading-${item.id}`}
              key={index}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition  text-gray-200 hover:text-gray-400"
                aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${item.id}`}
              >
                {item.title}
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 group-hover:text-gray-500 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 group-hover:text-gray-500 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id={`hs-basic-with-title-and-arrow-stretched-collapse-${item.id}`}
                className={classNames(
                  "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
                  {
                    hidden: !item.active,
                  }
                )}
                aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${item.id}`}
              >
                <p className=" text-gray-200">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default FaqSection;
