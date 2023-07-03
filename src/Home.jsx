import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'


const Home = () => {

  return (
    <>

      <HeroSection heading={"BORA BORA"} subHeading={"WELCOME TO"} imgUrl={"/images/hero.jpg"} />
      <FeaturedProducts />
    </>
  )
}

export default Home