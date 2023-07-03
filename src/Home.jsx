import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext'


const Home = () => {
  const myName = useProductContext();
  return (
    <>
      <h1>  {myName}</h1>
      <HeroSection heading={"BORA BORA"} subHeading={"WELCOME TO"} imgUrl={"/images/hero.jpg"} />
    </>
  )
}

export default Home