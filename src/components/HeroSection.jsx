import React from 'react'

const HeroSection = ({ subHeading, heading, imgUrl }) => {
    return (
        <section className='hero-section'>
            <div className='container-fluid hero-container'>
                <div className='hero-content'>
                    <div className='hero-text-content'>
                        <h5>{subHeading}</h5>
                        <h1>{heading}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio, alias tempore esse libero minus accusantium tenetur asperiores nobis ipsa sint exercitationem blanditiis pariatur iusto aliquid iure soluta unde quam magni obcaecati in mollitia cupiditate veritatis nulla! Aperiam qui eius labore explicabo, error in fuga, ea ipsum, repudiandae consectetur veniam.</p>
                    </div>
                    <div className='hero-bg'>
                        <img src={imgUrl} alt="hero bg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection