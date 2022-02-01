import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    },[]);

  return (
  <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img className="nav__logo" 
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png" 
        alt="Netflix Logo" />

        <img className="nav__avatar" 
        src="https://www.hdfstutorial.com/wp-content/uploads/2016/07/default-cloudera-hue-username-password.png" 
        alt="Netflix Logo" />
      </div>
  </div>);
}

export default Nav;
