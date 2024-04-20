import React from 'react'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6 flex flex-col items-center mt-6 md:mt-20">
      <h1 className="text-4xl sm:text-5xl text-center tracking-wide">
        About <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">flipperZone</span>.
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Need a flipper? Purchase your flipper online and have them mailed to your home. We sell many kinds of flippers</p>
      <p className="text-lg text-center text-neutral-500 max-w-4xl">Login to FlipperZone and upgrade to premium to get your flipper for free or have it shipped free. You will also get a free drone. We not only sell flippers, we also sell drones as well.</p>
      <p className="text-center text-neutral-500 max-w-4xl">Flipper or Drome broke, no problem, call support, ship it to the address and we can fix it right away for you and we will send it back to your house.</p>
      </div>
    </div>
  )
}

export default About