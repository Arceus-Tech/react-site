import React from 'react'



const qt = [
    {
      title: "How secure is your platform?",
      content:
        "We take security seriously and have implemented robust measures to safeguard your financial information. Our platform utilizes state-of-the-art encryption techniques, multi-factor authentication, and regular security audits to ensure the highest level of protection for your sensitive data.",

    },
    {
      title: "What types of financial services do you offer?",
      content:
        "Our financial tech solution provides a wide range of services tailored to meet your needs. These include budgeting tools, investment management, transaction monitoring, expense tracking, bill payment, and financial goal planning. We strive to offer a comprehensive suite of services to help you achieve your financial goals.",

    },
    {
      title: "How do you handle customer support?",
      content:
        "We understand the importance of prompt and efficient customer support. Our dedicated support team is available via multiple channels, including phone, email, and live chat. We strive to provide timely responses to your queries and offer personalized assistance to address any concerns or issues you may encounter while using our financial tech solution.",

    },
    {
      title: "Can I integrate your platform with other financial accounts?",
      content:
        "Absolutely! Our platform is designed to seamlessly integrate with various financial accounts, including bank accounts, credit cards, and investment portfolios. This allows you to have a holistic view of your finances in one place, enabling better financial management and decision-making. We prioritize interoperability to provide you with a comprehensive and unified financial experience.",

    },
  ];


function FAQPage() {
    return (
        <div>
            <div className="w-full mx-auto px-5 md:px-16 lg:px-32 py-32 bg-white">
                <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">You might be wondering...</h2>
                </div>

                <div className="max-w-2xl mx-auto divide-y divide-gray-200 ">

                {qt.map((item, index) => (
                    <div key={index} className="py-8 first:pt-0 last:pb-0">
                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                            </svg>

                            <div>
                                <h3 className="md:text-lg font-semibold text-gray-800 ">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-gray-500">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </div>

                ))}

                </div>
            </div>
        </div>
    )
}

export default FAQPage