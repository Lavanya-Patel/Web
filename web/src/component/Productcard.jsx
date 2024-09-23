import React from 'react'
import Mask from "../Assets/New 1.avif"
import Cup from "../Assets/New 2.avif"
import Eye from "../Assets/New 3.avif"
import Hair from "../Assets/New 4.avif"


const Productcard = () => {
  return (
<section className='productcard'>
    <h1>SOMETHING NEW FOR EVERYONE</h1>
    <article className='d-flex row'>
        <div className=' product-image col-3'>
            <img src={Mask} alt="" />
            <p>GlasSkin LED Lite Mask</p>
            <p>$282.97</p>
        </div>
        <div className='col-3'>
            <img src={Cup} alt="" />
            <p>Ui 3 Self-Heating Mug Set</p>
            <p>$98.00</p>
        </div>
        <div className='col-3'>
            <img src={Eye} alt="" />
            <p>L'Core Paris 60 Second Eye Lift</p>
            <p>$69.99</p>
        </div>
        <div className='col-3'>
            <img src={Hair} alt="" />
            <p>Adagio Accelerator 2100 Foldable Blow Dryer</p>
            <p>84.99</p>
        </div>
    </article>
    <button className='btn1'>Shop New Arrivals</button>
</section>
  )
}

export default Productcard
