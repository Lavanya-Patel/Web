import Carousel from 'react-bootstrap/Carousel';
import Image from "../Assets/Image 1.avif"
import Image2 from "../Assets/Image 2.avif"
import Image3 from "../Assets/Image 3.avif"
import Image4 from "../Assets/Image 4.avif"

function DarkVariantExample() {
  return (
    <div className='slider-image'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
         
          src={Image}
        />
        <Carousel.Caption>
          <h1 style={{ color: "white" }}>New Arrivals , New Experiences</h1>
          <p style={{ color: "white", textAlign: "center" }}>Discover Something New And Elevate Your Lifestyle With Brookstone's Cutting-Edge Products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src={Image2}
        />
        <Carousel.Caption className='text'>
          <h1 style={{ color: "black" }}>Wrap Yourself In Cozy</h1>
          <p style={{ color: "black", textAlign: "center" }}>Indulge In Luxurious Warmth And Supreme Comfort With Our Range of High-Quality Heated Blankets.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       
          src={Image3}
        />
        <Carousel.Caption>
          <h1 style={{ color: "white" }}>Illuminate Your Skin</h1>
          <p style={{ color: "white", textAlign: "center" }}>Introducing Our Revolutionary LED Light Therapy Solutions Just For You.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src={Image4}

        />
        <Carousel.Caption>
          <h1 style={{ color: "black" }}>Revitalize Your Body</h1>
          <p style={{ color: "black", textAlign: "center" }}>Powerful Solutions To Melt Away Tension And Rejuvenate Your Muscles Effortlessly At Your Fimgertips</p>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;