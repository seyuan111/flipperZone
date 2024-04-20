import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Features from '../components/Features'
import Information from '../components/Information'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
    <NavBar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Main />
      <Features />
      <Information />
      <Pricing />
      <Reviews />
    </div>
    </div>
  )
}

export default Home