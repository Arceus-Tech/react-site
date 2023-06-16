import React from 'react'
import { Link, NavLink } from "react-router-dom";


function ContactUsPage() {
  return (

    
<div className="w-full mx-auto px-5 md:px-16 lg:px-32 py-32 bg-white">
<div className=" items-center text-center">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
        Contact us
      </h1>
      <p className="mt-1 text-gray-600 ">
        We'd love to talk about how we can help you.
      </p>
    </div>

  <div className='w-full grid md:grid-cols-2 mt-12 gap-10'>
  <div className=''
        >
          <img
            className="h-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559030623-0226b1241edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
            alt="Image Description"
          />
        </div>

  <div className="">
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
      <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
        Fill in the form
      </h2>

      <form>
        <div className="grid gap-4 lg:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="block text-sm text-gray-700 font-medium ">First Name</label>
              <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "/>
            </div>

            <div>
              <label htmlFor="hs-lastname-contacts-1" className="block text-sm text-gray-700 font-medium ">Last Name</label>
              <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label htmlFor="hs-email-contacts-1" className="block text-sm text-gray-700 font-medium ">Email</label>
              <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "/>
            </div>

            <div>
              <label htmlFor="hs-phone-number-1" className="block text-sm text-gray-700 font-medium ">Phone Number</label>
              <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "/>
            </div>
          </div>

          <div>
            <label htmlFor="hs-about-contacts-1" className="block text-sm text-gray-700 font-medium ">Details</label>
            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "></textarea>
          </div>
        </div>
        <div className="mt-6 grid">
          <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 ">Send inquiry</button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
  </div>

  </div>
  

  <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-4 lg:gap-8">

    <a className="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 " href="#">
      <svg className="w-9 h-9 text-gray-800 mx-auto " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
      </svg>
      <div className="grow">
        <h3 className="text-lg font-semibold text-gray-800 ">Knowledge base</h3>
        <p className="mt-1 text-gray-500">We're here to help with any questions or code.</p>
        <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 ">
          Contact support
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <NavLink to="/faq" className="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 " href="#">
      <svg className="w-9 h-9 text-gray-800 mx-auto " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      <div className="grow">
        <h3 className="text-lg font-semibold text-gray-800">FAQ</h3>
        <p className="mt-1 text-gray-500">Search our FAQ htmlFor answers to anything you might ask.</p>
        <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 ">
          Visit FAQ
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </NavLink>

  </div>
</div>
  )
}

export default ContactUsPage