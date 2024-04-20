import React from 'react'
import FlippersNation from '../assets/FlippersNation.jpg'
import {checklistItems} from '../constants/resources'

const Information = () => {
  return (
    <div className="mt-20">
        <h2 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider mt-10">What we offer in <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"> FlipperZone</span></h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-10 w-full lg:w-1/2">
                <img src={FlippersNation} alt="" />
            </div>
            <div className="pt-6 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-8">
                        <div>
                            <h5 className="mt-2 mb-2 text-2xl underline">{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Information