import React from 'react'

const Footer = () => {
  return (
    <>
      <section className='footer-section'>
        <div className='container-fluid footer-container'>
          <div className='footer-content'>
            <div className='footer-about'>
              <h1>Bora Bora</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint labore consectetur perferendis itaque
                possimus natus quod numquam similique omnis cupiditate.</p>
            </div>
            <div className='footer-services-columns'>
              <div className='footer-column'>
                <h4>Services</h4>
                <ul>
                  <li>About</li>
                  <li>Products</li>
                  <li>Contact</li>
                  <li>Cart</li>

                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>

  )
}

export default Footer