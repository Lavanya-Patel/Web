import React from 'react'
import Most from "../Assets/most 1.avif"
import Most2 from "../Assets/most 2.avif"
import Most3 from "../Assets/most 3.avif"
import Most4 from "../Assets/most 4.avif"
const MostLove = () => {
  return (
    <section className='most-love'>
    <h1>SEE OUR MOST-LOVED ITEMS</h1>
    <article className='most d-flex row container'>
        <figure className='col-3'>
            <img src={Most} alt="" />
            <figcaption>
                <p>Homace Foldable Neck Fan with Cooling and Heating</p>
                <p>$39.00</p>
            </figcaption>
        </figure>
        <figure className='col-3'>
            <img src={Most2} alt="" />
            <figcaption>
                <p>Celliant Performance Sheet Set</p>
                <p>$62.99</p>
            </figcaption>
        </figure>
        <figure className='col-3'>
            <img src={Most3} alt="" />
            <figcaption>
                <p>Quzy-Premium Wireless Neck and Shoulder Massager</p>
                <p>179.99</p>
            </figcaption>
        </figure>
        <figure className='col-3'>
            <img src={Most4} alt="" />
            <figcaption>
                <p>Electric Heated Dry Eye Mask</p>
                <p>$99.99</p>
            </figcaption>
        </figure>
    </article>
    <button className='most-btn'>Shop Best Seller</button>
</section>
  )
}

export default MostLove
