import React from 'react';
import './components.css';
import ChefHat from './svg/ChefHat';
import House from './svg/House';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav">
        <span>
            אבא<Link to="/admin"><img src={process.env.PUBLIC_URL + "./img/logo.png"} id="logo" alt="logo"/></Link>בורגר
        </span>
        <div className="nav-bottom">
            <div className="nav-btns">
                <Link to="/"><House width={3} fill="#fff" className="nav-btn"/></Link>
                <Link to="/order"><ChefHat width={3} fill="#fff" className="nav-btn"/></Link>
            </div>
        </div>
    </div>
  );
}

export default NavBar;
