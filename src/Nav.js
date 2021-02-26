import React, {useEffect, useState} from 'react';
import './Nav.css';
import logo from'./download.png'

function Nav() {

    const [show, setHandleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setHandleShow(true);
        } else {
          setHandleShow(false);
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);



    return (
      <div className={`nav ${show && "nav-black"}`}>
        <img
          className="nav-logo"
          src={logo}
          alt="Netflix Logo"
        />
        <img
          className="nav-avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Avatar"
        />
      </div>
    );
}

export default Nav
