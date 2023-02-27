import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from './assets/logo.png';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';

function App() {
  const items = useSelector((state) => state.cart);

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="/">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>
          <div className="flex gap-4" onClick={toggleVisibility}>
            <a className="navHome hover:cursor-pointer" id="lws-home">
              Home
            </a>
            <a className="navCart hover:cursor-pointer" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{items.length}</span>
            </a>
          </div>
        </div>
      </nav>
      {isVisible ? <Home /> : <Cart />}
    </>
  );
}

export default App;
