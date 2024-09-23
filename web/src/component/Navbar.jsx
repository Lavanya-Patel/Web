import React, { useState } from 'react';
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContexxt';

const Navbar = () => {
  const { cart, removeFromCart, updateItemQuantity } = useCart(); 
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{width:"100%"}}>
      <h6 className='m-0'>Free Shipping on Select Items - SHOP NOW</h6>
      <div className='main'>
        <div className='navbar d-flex justify-content-around fs-5'>
          <div>
            <IoSearchOutline />
          </div>
          <div className='ps-5'>
            <h1 className='ps-5'>Brookstone</h1>
          </div>
          <div className='text-end d-flex'>
            <GoGift className='ms-2 mt-2' />
            <IoIosHeartEmpty className='ms-4 mt-2' />
            <NavLink to={"/account"}>
              <FaRegUserCircle className='ms-4 text-light' />
            </NavLink>
            <div onClick={toggleCart} style={{ cursor: 'pointer' }} className='ms-4'>
              <IoCartOutline />
              {/* Removed item count display */}
            </div>
          </div>
        </div>

        {isCartOpen && (
          <div className="cart-dropdown">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Display total price */}
                <div>
                  {cart.map((item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                      <img src={item.image} alt={item.title} style={{ width: "150px", height: "150px", marginRight: "10px" }} />
                      <div>
                        <p style={{ margin: 0 }}>Price: ${item.price}</p>
                        <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
                      </div>
                      <div style={{ marginLeft: "auto", display: 'flex', alignItems: 'center' }}>
                        {/* Decrease Quantity Button */}
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "0 9px", marginRight: "5px" }}>-</button>

                        {/* Increase Quantity Button */}
                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "0 8px", marginRight: "5px" }}>+</button>

                        {/* Remove Item Button */}
                        <button onClick={() => removeFromCart(item)} style={{ border: "none", backgroundColor: "transparent", color: "red"}}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className='menu d-flex justify-content-evenly pb-4'>
          <NavLink>NEW</NavLink>
          <NavLink>SLEEP</NavLink>
          <NavLink>WELLNESS</NavLink>
          <NavLink>HOME</NavLink>
          <NavLink>TECH</NavLink>
          <NavLink>OUTDOOR</NavLink>
          <NavLink>GIFTS</NavLink>
          <NavLink>SALE</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;