import React from 'react'
import Section from '../components/section'
import Card from '../components/Card'
import Banner from '../components/Banner'
import Card2 from '../components/Card2'
import HeroSlider from '../components/HeroSlider'

function Home() {
  return (
    <>
            <HeroSlider />
            <Section />
            <section className="product-section">
              <h1>Feature Products</h1>
              <p>Summer Collection New Designer Products</p>
            </section>
            <div className="product-cart">
              <Card/>
              <Banner />
              <section className="product-section">
                <h1>Feature Products</h1>
                <p>Summer Collection New Designer Products</p>
              </section>
            </div>
            <Card2 />
            <section className="newsletter">
              <div>
                <h3>Sign Up for Newsletter</h3>
                <h5>get emai updates about our latest shop and <span>special offer</span></h5>
              </div>
              <div className="form">
                <input type="email" placeholder="Enter your email" id="email-id-input"/>
                <button>Sign Up</button>
              </div>
            </section>
          </>
  )
}

export default Home
