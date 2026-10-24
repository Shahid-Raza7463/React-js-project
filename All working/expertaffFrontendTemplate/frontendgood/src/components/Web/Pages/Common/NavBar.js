import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setCurrentPage }) => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/" onClick={() => setCurrentPage('home')}>
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/about" onClick={() => setCurrentPage('about')}>
    //         About
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/contact" onClick={() => setCurrentPage('contact')}>
    //         Contact Us
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>

    <>
      <nav className="navbar navbar-expand-lg navbar-dark header-nav">
        <div className="container-fluid nav-text header-div">
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
              <a className="nav-link active" aria-current="page" href="/register.html">Add Network/Program</a>
            </li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-head justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                {/* <a className="nav-link h-nav active" aria-current="page" href="#">Networks</a> */}
                <Link to="/" onClick={() => setCurrentPage('home')} className="nav-link h-nav active">
                  Networks
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/about" onClick={() => setCurrentPage('about')} className="nav-link h-nav">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link h-nav" href="/resources.html">Resources</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link h-nav" href="/reviews.html">Reviews</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link h-nav" href="#">News</a>
              </li>
              {/* <li className="nav-item mx-2">
                <a className="nav-link h-nav" href="/blog.html">Blog</a>
              </li> */}
              <li className="nav-item mx-2">
                <Link to="/dashboard" onClick={() => setCurrentPage('dashboard')} className="nav-link h-nav">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Search Navigation --> */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid search-div">
          <a className="navbar-brand" href="#"><img src="images/Logo.png" className="logo-img img-fluid" /></a>
          <form className="d-flex search-form">
            <div className="input-group">
              <span className="input-group-text search-field" id="basic-addon1"><i className="fa fa-search text-light mx-1" aria-hidden="true"></i></span>
              <input type="text" className="form-control input-text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" fdprocessedid="frpdeh" />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
