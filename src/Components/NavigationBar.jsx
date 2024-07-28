import React, { useState } from 'react';


function NavigationBar({cartCount}) {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  
return(
  <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="#">TRENDY</a>
  <button 
  className="navbar-toggler" 
  type="button" 
  data-toggle="collapse" 
  data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded={!isCollapsed}
  aria-label="Toggle navigation"
  onClick={toggleNavbar}
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className={`nav-item dropdown ${isDropdown ? 'show' : ''}`}>
        <a className="nav-link active dropdown-toggle" href="#" role="button" onClick={toggleDropdown} aria-expanded={isDropdown}>
          Shop
        </a>
        <div className={`dropdown-menu ${isDropdown ? 'show' : ''}`}>
          <a className="dropdown-item" href="#">All Products</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Popular Items</a>
          <a className="dropdown-item" href="#">New Arrivals</a>
        </div>
      </li>
    </ul>
    <form className="d-flex">
      <button className="btn btn-outline-light" type="submit">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart 
        <span></span><span className="badge bg-light text-dark custom-badge rounded-pill">{cartCount}</span>
      </button>
    </form>
  </div>
</nav>

   );
  }
  export default NavigationBar;