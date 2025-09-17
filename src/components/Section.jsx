import React from 'react'
function Section() {
  return (
  <div>
      <section id="hero">
            <h4 className="h4">Trade-in-offer</h4>
            <h2  className="h2">Super value deals</h2>
            <h1  className="h1">on all products</h1>
            <p className="p">save more coupon & upto 70% off!</p>
             <button className="but">shop now</button>
        </section>
         <section  id="features" className="section-p1">
            <div className="f-box">
                <img src="src/assets/images/f.logo/f1.jpg" alt="" className="img"/>
                <h6>Free Delivery</h6>
            </div>
             <div className="f-box">
                <img src="src/assets/images/f.logo/f2.jpg" alt="" className="img"/>
                <h6>Online Order</h6>
            </div>
            <div className="f-box">
                <img src="src/assets/images/f.logo/f3.jpg" alt="" className="img"/>
                <h6>Save Money</h6>
            </div>
            <div className="f-box">
                <img src="src/assets/images/f.logo/f5 (1).jpg" alt="" className="img"/>
                <h6>Promotion</h6>
            </div>
            <div className="f-box">
                <img src="src/assets/images/f.logo/f5 (2).jpg" alt="" className="img"/>
                <h6>Happy Sale</h6>
            </div>
            <div className="f-box">
                <img src="src/assets/images/f.logo/f6.jpg" alt="" className="img"/>
                <h6>24/7 Support</h6>
            </div>
        </section>
  </div>
  )
}

export default Section

