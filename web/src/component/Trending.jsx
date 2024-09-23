import React from 'react'
import { BsGift } from "react-icons/bs";
import { MdCardGiftcard } from "react-icons/md";
import { BsPentagon } from "react-icons/bs";
import Trend from "../Assets/trend 1.avif"
import Trend2 from "../Assets/trend 2.avif"
import Trend3 from "../Assets/trend 3.avif"
import Trend4 from "../Assets/trend 4.avif"

const Trending = () => {
  return (
   <section className='trending'>
   <h1 className='trend-h1'>TRENDING CATEGORIES</h1>
   <article className='trend-img d-flex row container'>
       <figure className='col-3'>
           <img src={Trend} alt="" />
           <button className='trend-btn'>Shop New Arrivals</button>
       </figure>
       <figure className='col-3'>
           <img src={Trend2} alt="" />
           <button className='trend-btn'>Shop Wellness</button>
       </figure>
       <figure className='col-3'>
           <img src={Trend3} alt="" />
           <button className='trend-btn'>Shop Fitness</button>
       </figure>
       <figure className='col-3'>
           <img src={Trend4} alt="" />
           <button className='trend-btn'>Shop Wine & Bar</button>
       </figure>
   </article>
   <section className='gift d-flex row'>
       <article className='col-4'>
           <p className='icon'><BsGift /></p>
           <div className='trend-data'>
               <h3>GIFT FINDER</h3>
               <p>Can't decide? Let us help you find the perfect gift!</p>
           </div>
       </article>
       <article className='col-4'>
           <p className='icon'><MdCardGiftcard /></p>
           <div className='trend-data'>
               <h3>REWARDS</h3>
               <p>Join our Loyalty Program for exclusive rewards!</p>
           </div>
       </article>
       <article className='col-4'>
           <p className='icon'><BsPentagon /></p>
           <div className='trend-data'>
               <h3>CORPORATE GIFTING</h3>
               <p>Foster meaningful connections and lasting impressions.</p>
           </div>
       </article>
   </section>
</section>
  )
}

export default Trending
