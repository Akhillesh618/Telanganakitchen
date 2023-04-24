import React, { useState } from 'react';
import './menu.css';




function Menu() {

    const [cartItems, setCartItems] = useState(null);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };




  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-items">
        <div className="menu-item">
          <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Chicken Pulav" />
          <h2>Chicken Pulav</h2>
          <p>Price: £ 5.99</p>
          <button className="button" onClick={addToCart} >Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://2.bp.blogspot.com/-R9iw-aeTwOk/XCFpz6y6ZLI/AAAAAAAAVho/_LOtnrJFrEMxpK34f7XVxacU4LamG6l7QCLcBGAs/s1600/20180505_121705.jpg" alt="Mutton Pulav" />
          <h2>Raju Gari Mutton Pulav</h2>
          <p>Price: £ 6.99</p>
          <button className="button" onClick={addToCart} >Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chicken Fry" />
          <h2>Chicken Fry</h2>
          <p>Price: £ 4.99</p>
          <button className="button" onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://kitchenofdebjani.com/wp-content/uploads/2017/08/3-3.jpg.webp" alt="Mutton Ghee Roast" />
          <h2>Mutton Ghee Roast</h2>
          <p>Price: £ 6.99</p>
          <button className="button" onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg" alt="Fried Rice" />
          <h2>Fried Rice (Chicken, Egg, Veg)</h2>
          <p>Price: £ 3.99</p>
          <button className="button" onClick={addToCart} >Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://images.pexels.com/photos/7353379/pexels-photo-7353379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Andhra Chicken Curry" />
          <h2>Andhra Chicken Curry</h2>
          <p>Price: £ 4.99</p>
          <button className="button" onClick={addToCart} >Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://i.ytimg.com/vi/eBI6lBo_bZg/maxresdefault.jpg" alt="Telangana Mutton Curry" />
          <h2>Telangana Mutton Curry</h2>
          <p>Price: £ 5.99</p>
          <button className="button" onClick={addToCart} >Add to Cart</button>
        </div>
      </div>
      <div className="cart-container">
        <button className="OrderNowbutton">Checkout {cartItems}</button>
      </div>
    </div>
  );
}

export default Menu;
