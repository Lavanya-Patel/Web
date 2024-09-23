import React from 'react'
import Chair from "../Assets/Chair 1.avif"
import Chair2 from "../Assets/Chair 2.avif"

const Chairs = () => {
    return (
        <section className='chairs'>
        <article className='chairs-data d-flex row m-0 mt-4'>
            <div className='d-flex'>
                <section className='col-6'>
                    <h1 className='chair-heading'>Choosing the Perfect Massage Chair</h1>
                    <button className='chair-btn'>Learn More</button>
                    <figure>
                        <img src={Chair} alt="" className='chair-img' />
                    </figure>
                </section>
                <section className='col-6'>
                    <p className='chair-p'>Discover the ultimate relaxation experience with our comprehensive massage chair buyer guide, providing you with invaluable insights and expert advice to make an informed decision.</p>
                    <figure>
                        <img src={Chair2} alt="" className='chair-img2' />
                    </figure>
                </section>
            </div>
        </article>
        <section className='btn-data d-flex container'>
            <p className='p-data'>EXPERIENCE LUXURY ON YOUR TERMS WITH OUR FINANCING OPTIONS, ALLOWING YOU TO PAY IN EASY INSTALLMENT.</p>
            <button className='container-btn'>Shop Now Pay Later With Klarna. LEARN MORE</button>
        </section>
    </section>
    )
}

export default Chairs
