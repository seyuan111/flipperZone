import React from 'react'
import NavBar from '../components/NavBar'
import {contacts} from '../constants/resources'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <NavBar />
        <div className="mt-20">
        <h2 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider my-8 font-bold">Contact Support</h2>
        <div className="flex flex-wrap justify-center">
          {contacts.map((contact, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 py-2">
              <div className="bg-neutral rounded-md p-6 border text-md border-neutral-600 font-thin">
                <p>{contact.text}</p>
                <div className="flex mt-8 items-start">
                  <div>
                    <h5 className="font-bold text-neutral-500">{contact.helper}</h5>
                    <span className="text-neutral-300">{contact.number}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full border border-neutral-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                    Contact Us
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                        <input type="email" name="email" id="email" placeholder="Doe@gmail.com" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Message</label>
                      <textarea row='4' type="message" name="message" id="message" placeholder="Message here" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="ml-3 text-sm">
                              <label htmlFor="remember" className="text-neutral-300 dark:text-gray-300">1-800-222-1111</label>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">support@gmail.com</p>
                    </div>
                    <button type="submit" className="w-full text-white bg-neutral-600 hover:bg-neutral-800 duration-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                </form>
            </div>
        </div>
    </div>

      </div>
    </div>
  )
}

export default Contact