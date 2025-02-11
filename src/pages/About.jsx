import React from 'react';
import NavBar from '../components/NavBar';
import flipperImage from '../assets/Flipper.png'; // Make sure to add a flipper image in the assets folder
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-10 px-6 flex flex-col md:flex-row items-center mt-6 md:mt-20 gap-10">
        {/* Left Side - Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={flipperImage} alt="Flipper Device" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl tracking-wide font-bold">
            About <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">FlipperZone</span>.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl">
            Need a flipper? Purchase your flipper online and have it delivered to your home. We offer a variety of flippers tailored to your needs.
          </p>
          <p className="mt-4 text-lg text-neutral-500 max-w-xl">
            Upgrade to premium and get a free flipper or enjoy free shipping. Premium members also receive a free drone!
          </p>
          <p className="mt-4 text-lg text-neutral-500 max-w-xl">
            If your Flipper or Drone needs repair, our support team is ready to assist. Ship it to us, and we'll fix it right away and send it back.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
