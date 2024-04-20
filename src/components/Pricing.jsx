import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {pricingOptions} from '../constants/resources'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="mt-10">
        <h2 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider my-8">Plans</h2>
        <div className="flex flex-wrap">
          {pricingOptions.map((options,index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-10 border border-neutral-600 rounded-xl">
                <p className="text-2xl mb-4 underline">
                {options.title}
                </p>
                <p className="mb-8">
                  <span className="text-xl mr-2 text-neutral-500">{options.price}</span>
                </p>
                <ul>
                  {options.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-wide text-xl hover:bg-blue-700 duration-300 border border-blue-700 rounded-lg transition">Subscribe</Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Pricing