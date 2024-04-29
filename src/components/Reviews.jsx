import React from 'react'
import { testimonials } from '../constants/resources'

const Reviews = () => {
  return (
    <div className="mt-20">
      <h2 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider my-8">Reviews</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 border text-md border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <div>
                  <h5 className="font-bold text-neutral-500">{testimonial.user}</h5>
                  <span className="text-neutral-300">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews