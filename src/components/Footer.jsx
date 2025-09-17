import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <footer id="footer">
        <div className="contact">
          <div>
            <img src="src/assets/images/9-01.jpg" alt="" className="contact-logo"/>
            <br /><br />
            <h3>contact</h3>
            <address>
              <p><b>address:</b> wellington road, street 32. san francisco</p>
              <p><b>Phone:</b>021-54537688,021134465</p>
              <p><b>Hours:</b>10:00 - 18:00. Mon - Sat</p>
            </address>
            <br/>
              <h3>Follow Us</h3>
               <div className="socials">
                <Link to="/"><i className="fa-brands fa-facebook-square"></i></Link>
                <Link to="/"><i className="fa-brands fa-youtube"></i></Link>
                <Link to="/"><i className="fa-brands fa-telegram"></i></Link>
                <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
              </div>
            </div>
          <div className="about">
            <h3>About</h3>
            <Link to="#">About Us</Link>
            <Link to="#">Delivery Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Condition</Link>
            <Link to="#">Contact Us</Link>
          </div>
          <div className="my-account">
            <h3 >My Account</h3>
            <Link to="#">Sign In</Link>
            <Link to="#">View Cart</Link>
            <Link to="#">My Wishlist</Link>
            <Link to="#">Track My Order</Link>
            <Link to="#">Help</Link>
          </div>
          <div className="install">
            <h3>Install App</h3>
            <p>From App Store OR Google Play</p>
            <div className="download">
              <img src="src/assets/images/app.jpg" alt=""/>
              <img src="src/assets/images/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateway</p>
            <img src="src/assets/images/product_files/pay.png" alt="" className="pay"/>
          </div>
        </div>
      </footer>
      </>
  )
}

export default Footer
