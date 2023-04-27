import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/GPT-3.png'
import './navbar.css'

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wmx">What is Wmx</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="wmx__navbar">
      <div className="wmx__navbar-links">
        <div className="wmx__navbar-links_logo">
          <img src={logo} alt="Walletmix" />
        </div>
        <div className="wmx__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="wmx__navbar-sign">
        <p>
          <a href="#">Sign in</a>
        </p>
        <button type="button">Sign up</button>
      </div>
      <div className="wmx__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="rotate-center"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="rotate-center"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="wmx__navbar-menu_container scale-up-center">
            <div className="wmx__navbar-menu_container-links">
              <Menu />
              <div className="wmx__navbar-menu_container-links-sign">
                <p>
                  <a href="#">Sign in</a>
                </p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar