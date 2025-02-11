import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants/resources';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="mt-10">
      <h2 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider my-8">Plans</h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((options, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border-2 border-neutral-600 rounded-xl h-full flex flex-col">
              {/* Title */}
              <p className="text-2xl mb-4 underline">{options.title}</p>

              {/* Price */}
              <p className="mb-4 text-xl text-neutral-500">{options.price}</p>

              {/* Features List */}
              <ul className="flex-grow">
                {options.features.map((feature, i) => (
                  <li key={i} className="mt-4 flex items-center">
                    <CheckCircle2 className="text-green-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <Link
                to="/"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-wide text-xl hover:bg-blue-700 duration-300 border border-blue-700 rounded-lg transition"
              >
                Subscribe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
