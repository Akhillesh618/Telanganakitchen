import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';


function Home() {
    let navigate = useNavigate();

  return (
    <div className="home-page-container" style={{ backgroundImage: `url("https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
    <h1 className="home-page-heading">Welcome to my food delivery startup!</h1>
    <p className="home-page-text">Enjoy authentic Indian food prepared fresh in my home kitchen.</p>
    <button className="OrderNowbutton" onClick={() => navigate('/Menu', { replace: true })}>Place Order</button>
  </div>
  );
}

export default Home;
