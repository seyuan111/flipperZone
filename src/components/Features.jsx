import React from 'react'
import {features} from '../constants/resources'

const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-blue-400 rounded-full h-6 text-lg font-medium px-2 py-1 tracking-wider">About</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl mt-10 lg:mt-10 tracking-wider">Information on <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"> flippers</span> and <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"> drones</span></h2>    
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:1/2 lg:w-1/3">
                    <div className="flex">
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                            <p className="text-md p-2 mb-10 text-neutral-300">{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features