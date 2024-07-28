import React, { useState } from 'react'; 
import './App.css'; 
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

function App() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  const removeFromCart = () => {
    setCart((prevCart) => (prevCart > 0 ? prevCart - 1 : 0));
  };

  return (
    <div className="App">
      <NavigationBar cartCount={cart} />
      <div>
        <Header />
        <Section onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;




