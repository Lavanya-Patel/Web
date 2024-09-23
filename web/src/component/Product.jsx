import React from 'react'
import Audio from "../Assets/category 1.avif"
import Cheir from "../Assets/category 2.avif"
import Massage from "../Assets/category 3.avif"
import Neck from "../Assets/category 4.avif"
import Wine from "../Assets/category 5.avif"
import Light from "../Assets/category 6.avif"
import Pillow from "../Assets/category 7.avif"
import Skin from "../Assets/category 8.avif"
import Therapy from "../Assets/category 9.avif"
import Tech from "../Assets/category 10.avif"
import Kitchen from "../Assets/category 11.avif"
import Out from "../Assets/category 12.avif"
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <section className='product'>
    <h1>SHOP BY CATEGORY</h1>
    <section className='d-flex row product-carousal-image'>
        <div className='col-2'>
            <Link to={"/productpage"}><img src={Audio} alt="" /></Link>
            <p>AUDIO</p>
        </div>
        <div className='col-2'>
            <img src={Cheir} alt="" />
            <p>MASSAGE 
              <br />
              CHAIRS</p>
        </div>
        <div className='col-2'>
            <img src={Massage} alt="" />
            <p>FOOT & LEG <br />
             MASSAGE</p>
        </div>
        <div className='col-2'>
            <img src={Neck} alt="" />
            <p>NECK & BACK <br />
            MASSAGE</p>
        </div>
        <div className='col-2'>
            <img src={Wine} alt="" />
            <p>WINE & BAR</p>
        </div>
        <div className='col-2'>
            <img src={Light} alt="" />
            <p>LIGHTNING</p>
        </div>
        <section className='d-flex row'>
            <div className='col-2'>
                <img src={Pillow} alt="" />
                <p>PILLOWS</p>
            </div>
            <div className='col-2'>
                <img src={Skin} alt="" />
                <p>SKIN CARE</p>
            </div>
            <div className='col-2'>
                <img src={Therapy} alt="" />
                <p>LED LIGHT</p>
            </div>
            <div className='col-2'>
                <img src={Tech} alt="" />
                <p>TECHNOLOGY</p>
            </div>
            <div className='col-2'>
                <img src={Kitchen} alt="" />
                <p>KITCHEN</p>
            </div>
            <div className='col-2'>
                <img src={Out} alt="" />
                <p>OUTDOOR</p>
            </div>
        </section>
    </section>
</section>
  )
}

export default Product
