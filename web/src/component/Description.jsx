import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from '../Context/CartContexxt'; // Change to useCart

const Description = () => {
    const { addToCart } = useCart(); // Use the hook to access cart functions
    const [description, setDescription] = useState({});
    const [quantity, setQuantity] = useState(1); // State for quantity
    const params = useParams();

    const getDescription = () => {
        axios.get(`http://localhost:3000/products/${params.id}`)
            .then((res) => setDescription(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getDescription();
    }, []);

    const handleAddToCart = () => {
        addToCart({ ...description, quantity }); 
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <section className='description d-flex row'>
            <header>
                <Navbar />
            </header>
            <div style={{ height: "800px" }} className='d-flex row'>
                <article className='description-img col-9'>
                    <img style={{ marginLeft: "250px", height: "600px", width: "600px", marginTop: "40px" }} src={description.image} alt="" />
                </article>
                <article className='description-data col-3' style={{ paddingTop: "40px" }}>
                    <h3>{description.title}</h3>
                    <p style={{ paddingLeft: "20px", fontSize: "26px" }}>${description.price}</p>
                    
                    <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <button onClick={decreaseQuantity} style={{ width: '30px', height: '30px', border: '1px solid black', backgroundColor: '#fff' }}>-</button>
                        <span style={{ margin: '0 10px', fontSize: '20px' }}>{quantity}</span>
                        <button onClick={increaseQuantity} style={{ width: '30px', height: '30px',  border: '1px solid black', backgroundColor: '#fff' }}>+</button>
                    </div>
                    
                    <button onClick={handleAddToCart} style={{ marginTop: "30%", width: "280px", height: "40px", border: "1px solid black", borderRadius: "20px", color: "white", backgroundColor: "#282726" }}>Add to cart</button>
                </article>
                <h3 style={{ paddingTop: "40px", textAlign: "center" }}>Description</h3>
                <hr />
                <p style={{ paddingTop: "20px", padding: "70px" }}>{description.description}</p>
            </div>
        </section>
    );
};

export default Description;