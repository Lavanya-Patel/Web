import React from 'react'
import Discoverimg from "../Assets/Discover.avif"

const Discover = () => {
  return (
    <section className='discover d-flex'>
    <article className='col-6 container'>
        <img className='discover-img ms-5' src={Discoverimg} alt="" />
    </article>
    <article className='discover-data col-6'>
        <h3>Discover more from</h3>
        <h1>Brookstone</h1>
        <p>From innovative gadgets to essential home solutions, each item is meticulously designed to elevate your lifestyle. Explore our array of products and unlock the potential to enhance your daily experiences with the trusted Brookstone brand.</p>
        <button className='discover-btn'>Shop Brookstone Products</button>
    </article>
</section>
  )
}

export default Discover
