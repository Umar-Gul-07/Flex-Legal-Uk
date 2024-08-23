import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Store } from '../../../Utils/Store';


function Header() {
  const {state} = useContext(Store)
  const {ContactInfo} = state
  const location = useLocation();
  return (

    <>
      <div
        className="navbar custom-navbar wow fadeInDown"
        data-wow-duration="2s"
        role="navigation"
      >
        <div className="container">
          {/* NAVBAR HEADER */}
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              {" "}
              <span className="icon icon-bar" /> <span className="icon icon-bar" />{" "}
              <span className="icon icon-bar" />{" "}
            </button>
            {/* lOGO TEXT HERE */}
            <Link to="/" className="navbar-brand">
              <img src="/assets/website/images/logo-color.png" alt="" />
            </Link>{" "}
          </div>
          {/* NAVIGATION LINKS */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to="/about">About</Link>
              </li>
              <li className={location.pathname === '/services' ? 'active' : ''}>
                <Link to="/services">Services</Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <span className="calltxt">
                  <i className="fa fa-phone" aria-hidden="true" /> {ContactInfo.contact_phone}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header