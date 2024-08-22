
function Navbar() {
  
  return (
    <>
   <header id="header-bar" className="header-1">
  <div className="container">
    <div className="header-wrap header-wrap1">
      <div className="logo logo-1">
        <a href="index.html">
          <img className="img-fluid" src="images/logo.png" alt="" />
        </a>
      </div>
      <div className="header-contact">
        <div className="header-info">
          <span className="info-circle">
            <i className="fa fa-phone" />
          </span>{" "}
          033333333333
        </div>
        <div className="header-info">
          <span className="info-circle">
            <i className="fa fa-envelope" />
          </span>{" "}
          Ahmi12@iit.edu.pk
        </div>
      </div>
      <div className="nav-button-holder">
        {" "}
        <button type="button" className="nav-button">
          {" "}
          <span className="icon-bar" />{" "}
        </button>
      </div>
    </div>
    <div className="nav-holder nav-holder-1">
      <ul className="menu-nav  menu-nav-1">
        <li className="">
          <a href="/">Home</a>
          
          
        </li>
        <li className="">
          <a href="/practicing">Practicing Area</a>
          
        </li>
        <li className="">
          <a href="/About">About Us</a>
          
        </li>
        <li className="">
          <a href="/Contact">Contact Us</a>
          
        </li>
        <li className="login-item">
      <i className="fa fa-user" />  
      <a href="/Login">Login</a>
    </li>
      
      </ul>
    </div>
  </div>
</header>


  

    </>
  )
}

export default Navbar
