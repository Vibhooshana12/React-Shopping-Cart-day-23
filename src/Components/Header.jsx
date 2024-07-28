import React from 'react';

function Header() {

  return (
    <header className="header py-1">
      <div className="container px-3 px-lg-3 my-3 d-flex align-items-center flex-column">
        <img src="trend.png" className="trend img-fluid img-thumbnail mx-auto d-block" alt="Responsive"/>
        <div className="text-center text-dark">
          <h1 className="display-4 fw-bolder">Trendy Style Spot</h1>
          <p className="lead fw-normal text-dark-50 mb-0">"Your go-to for the latest in fashion trends."</p>
        </div>
      </div>
    </header>
  );
}

export default Header;



