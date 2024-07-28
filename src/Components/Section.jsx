import React, { useState } from 'react';
import Productlist from './Productlist';
import StarRating from './StarRating';

function Section({ onAddToCart, onRemoveFromCart }) {
  const [cartItems, setCartItems] = useState([]);


  const toggleCartStatus = (itemId) => {
    if (cartItems.includes(itemId)) {
      setCartItems(cartItems.filter((id) => id !== itemId));
      console.log("REMOVEIs in Cart:",itemId)
      onRemoveFromCart(itemId);
    } else {
      setCartItems([...cartItems, itemId]);
      console.log("TO ADDIs in Cart:",itemId)
      onAddToCart(itemId);
    }
  };

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Productlist.map((item) => {
              const isInCart = cartItems.includes(item.id);
              return (
                <div className="col mb-4" key={item.id}>
                  <div className="card h-100">
                  {item.isOnSale && (
                      <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                        Sale
                      </div>
                    )}
                    <img className="card-img-top" src={item.image} alt={item.name} />
                    <div className="card-body p-2">
                      <div className="text-center">
                        <h6 className="productname fw-bolder">{item.name}</h6>
                          <div className='text-center' style={{fontSize:"15px"}}>{item.subname}</div>
                          <div><h6 className='price'>{item.price}</h6></div>
                          <StarRating rating={item.rating}/>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => toggleCartStatus(item.id)}
                        >
                          {isInCart ? 'Remove from Cart' : 'Add To Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;

