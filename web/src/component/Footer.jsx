import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className='footer d-flex row'>
    <section className='col-4'>
        <h3>SHOP BROOKSTONE.COM</h3>
        <div className='footer-info'>
            <h5>Massage Chair Buyers Guide</h5>
            <h5>FAQ</h5>
            <h5>About Us</h5>
            <h5>Shipping Info</h5>
            <h5>Privacy Policy</h5>
            <h5>Prop 65</h5>
            <h5>Accessibility Statement</h5>
        </div>
    </section>
    <section className='col-4'>
        <h3>CUSTOMER SERVICE</h3>
        <div className='footer-info'>
            <h5>Corporate Gifting</h5>
            <h5>Contact Us</h5>
            <h5>Return Policy</h5>
            <h5>Order Tracking</h5>
            <h5>Product Manuals</h5>
            <h5>Your California Privacy Rights</h5>
            <h5>Accessibility Mode</h5>
        </div>
    </section>
    <section className='col-4'>
        <div className='footer-info'>
            <h3>STAY IN THE LOOP</h3>
            <h5>Join our Mailing List today and be the first to know about deals and new arrivals!</h5>
            <input type="email" placeholder='Email Address' />
            <br />
            <input type="tel" placeholder='Phone Number' />
            <p>By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g., promos, cart reminders) from Brookstone at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Privacy Policy.</p>
            <p>This information will never be shared with a third party.</p>
        </div>
        <button className='footer-btn'>Submit</button>
        <div className='footer-icons d-flex'>
            <FaFacebookF />
            <BsInstagram />
            <FaYoutube />
            <BsTwitterX />
            <FaPinterestP />
        </div>
    </section>
</footer>
  )
}

export default Footer
