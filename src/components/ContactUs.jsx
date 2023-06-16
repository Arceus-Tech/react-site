import React, { useState } from "react";
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";


function ContactUs() {


  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isSent, setSent] = useState(false);
  const [isFail, setFail] = useState(false);
  const [isLoading, setLoading] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios({
      method: "POST",
      url: "https://worried-beanie-ant.cyclic.app/send",
      data: {
        first_name,
        last_name,
        email,
        message,
        phone
      }
    }).then((response) => {
      if (response.data.status === "success") {
        setLoading(false)
        setSent(true)
        resetForm();
        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else if (response.data.status === "fail") {
        setLoading(false)
        setFail(true)
        setTimeout(() => {
          setFail(false);
        }, 3000);

      }
    });
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };


  return (

    <div className="w-full mx-auto px-5 md:px-16 lg:px-32 py-20 bg-white">



      <div className="max-w-2xl lg:max-w-5xl mx-auto">

        <div className="grid items-center lg:grid-cols-2 gap-6 lg:gap-16">


          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
              Fill in the form
            </h2>

            <form onSubmit={handleSubmit} method="POST" >
              <div className="grid gap-4">


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                    <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                    <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>


                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                  <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                  <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                  <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="Details" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
              </div>


              <div className="mt-4 grid">
                <button type="submit" disabled={isLoading} className="inline-flex disabled:cursor-not-allowed disabled:bg-blue-400 justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"> {!isLoading ? "Send inquiry" : "Please wait ..."}</button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>


              <div className="fixed bottom-0 right-0 z-[60] sm:max-w-xl w-full mx-auto p-6">
                {isSent && <div id="dismiss-alert" className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-teal-50 border border-teal-200 rounded-md p-4" role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-4 w-4 text-teal-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-teal-800 font-medium">
                        Mail sent successfully.
                      </div>
                    </div>

                    <div className="pl-3 ml-auto">
                      <div className="-mx-1.5 -my-1.5">
                        <button type="button" className="inline-flex bg-teal-50 rounded-md p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-teal-600" data-hs-remove-element="#dismiss-alert">
                          <span className="sr-only">Dismiss</span>
                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}


                {isFail && <div id="dismiss-alert-fail" className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-red-50 border border-red-200 rounded-md p-4" role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-4 w-4 text-red-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.22086 3.98777C6.10304 2.92738 6.93309 2 8 2C9.06691 2 9.89696 2.92738 9.77914 3.98777L9.11043 10.0061C9.04756 10.5719 8.5693 11 8 11C7.4307 11 6.95244 10.5719 6.88957 10.0061L6.22086 3.98777ZM8 14C8.55229 14 9 13.5523 9 13C9 12.4477 8.55229 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-red-800 font-medium">
                        Failed to sent the message.
                      </div>
                    </div>


                    <div className="pl-3 ml-auto">
                      <div className="-mx-1.5 -my-1.5">
                        <button type="button" className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600" data-hs-remove-element="#dismiss-alert-fail">
                          <span className="sr-only">Dismiss</span>
                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                          </svg>
                        </button>
                      </div>
                    </div>


                  </div>
                </div>}
              </div>




            </form>
          </div>
          <div className='h-full flex flex-col justify-between'>

            <div >
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
                Contact us
              </h1>
              <p className="mt-1 text-gray-600 ">
                We'd love to talk about how we can help you.
              </p>

            </div>



            <div className="divide-y divide-gray-200">


              <div className="flex gap-x-7 py-6">
                <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 ">FAQ</h3>
                  <p className="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                  <NavLink to="/faq" className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 " href="#">
                    Visit FAQ
                    <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                    </svg>
                  </NavLink>
                </div>
              </div>


              <div className=" flex gap-x-7 py-6">
                <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 ">Contact us by email</h3>
                  <p className="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                  <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 " href="#">
                    sales@securecaptaltrades.com
                  </a>
                </div>
              </div>

            </div>

          </div>




        </div>
      </div>



    </div>

  )
}

export default ContactUs