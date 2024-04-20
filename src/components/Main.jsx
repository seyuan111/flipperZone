import React from 'react'
import FlipperZero from '../assets/FlipperZero.jpg'
import FlipperOne from '../assets/FlipperOne.jpg'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div className="flex flex-col items-center mt-6 md:mt-20">
        <h1 className="text-4xl sm:text-5xl text-center tracking-wide">
            FlipperZone sells all kinds of <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">flippers</span>.
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Need a flipper? Purchase your flipper online and have them mailed to your home. We sell many kinds of flippers</p>
        <div className="flex justify-center my-10">
            <Link to="/Purchase" className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4 mx-3 rounded-md">Purchase flipper</Link>
            <Link to="/About" className="py-3 px-4 mx-3 rounded-md border">Learn More</Link>
        </div>
        <div className="flex justify-center my-10">
            <img src={FlipperZero} className="rounded-lg w-1/2 mx-2 my-4" />
            <img src={FlipperOne} className="rounded-lg w-1/2 mx-2 my-4" />
        </div>
    </div>
  )
}

export default Main