import React from 'react'
import Big from "../Assets/Big 1.avif"
import Big2 from "../Assets/Big 2.avif"
import Big3 from "../Assets/Big 3.avif"
import Big4 from "../Assets/Big 4.avif"
const Bigcard = () => {
  return (
   <section className='big'>
    <div className='d-flex row m-0'>
        <figure className='col-6'>
            <img src={Big} alt="" className='img-fluid' />
        </figure>
        <figure className='col-6'>
            <img src={Big2} alt="" className='img-fluid' />
        </figure>
        <figure className='col-6 mt-2'>
            <img src={Big3} alt="" className='img-fluid' />
        </figure>
        <figure className='col-6 mt-2'>
            <img src={Big4} alt="" className='img-fluid' />
        </figure>
    </div>
</section>
  )
}

export default Bigcard
