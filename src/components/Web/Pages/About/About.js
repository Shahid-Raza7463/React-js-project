import React from 'react';

import Footer from '../Common/Footer';
import NavBar from '../Common/NavBar';
import TopAdspaces_1 from '../Adspaces/TopAdspaces_1';
import TopAdspaces_2 from '../Adspaces/TopAdspaces_2';
import TopAdspaces_3 from '../Adspaces/TopAdspaces_3';



// functional component 
export default function About() {
  return (
    <body>
      {/* <NavBar setCurrentPage={setCurrentPage} /> */}
      <NavBar />

      <div className=" top-div bg-light">

        {/* top adspaces 1*/}
        <TopAdspaces_1 />

        {/* <!-- Nav Tabs --> */}
        <div className="nav-tabs border mx-3">
          <ul className="nav nav-pills nav-grid">
            <li className="nav-item text-center">
              <a href="/index.html" className="nav-link nav-tab-btn border text-dark fw-bold bg-light active">
                <i className="fa-solid fa-diagram-project"></i>
                <span className="f-icon">NETWORK</span>
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="/offers.html" className="nav-link nav-tab-btn border text-dark fw-bold bg-light">
                <i className="fa-sharp fa-solid fa-bars"></i>
                <span className="f-icon">OFFERS</span>
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="/resources.html" className="nav-link nav-tab-btn border text-dark fw-bold bg-light">
                <i className="fa-sharp fa-regular fa-folder-open"></i>
                <span className="f-icon">RESOURCES</span>
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="/reviews.html" className="nav-link nav-tab-btn border text-dark fw-bold bg-light">
                <i className="fa-regular fa-file"></i>
                <span className="f-icon">REVIEWS</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Filter --> */}
        {/* 2222222222222222222222 */}
        <div className="filter-container border mx-3">
          <div className="filter">
            <div className="dropdown d-flex justify-content-between dropdown-grid">
              <h6 className="mt-1 f-text">Filters <i className="fa-solid fa-filter mx-2 filter-icon"></i></h6>
              <select className="form-select dropbtn-color border-0 shadow-sm" aria-label="Default select example"
                onchange="redirectToPage(this)">
                <option selected>Network Categories</option>
                <option value="/filter-network.html">One</option>
                <option value="/filter-network.html">Two</option>
                <option value="/filter-network.html">Three</option>
              </select>
              <select className="form-select dropbtn-color border-0 shadow-sm" aria-label="Default select example"
                onchange="redirectToPage(this)">
                <option selected>Tracking Software</option>
                <option value="/filter-network.html">One</option>
                <option value="/filter-network.html">Two</option>
                <option value="/filter-network.html">Three</option>
              </select>
              <select className="form-select dropbtn-color border-0 shadow-sm" aria-label="Default select example"
                onchange="redirectToPage(this)">
                <option selected>Payment Frequency</option>
                <option value="/filter-network.html">One</option>
                <option value="/filter-network.html">Two</option>
                <option value="/filter-network.html">Three</option>
              </select>
              <select className="form-select dropbtn-color border-0 shadow-sm" aria-label="Default select example"
                onchange="redirectToPage(this)">
                <option selected>Payment Method</option>
                <option value="/filter-network.html">One</option>
                <option value="/filter-network.html">Two</option>
                <option value="/filter-network.html">Three</option>
              </select>
            </div>
          </div>

          {/* <!-- Banner --> */}
          <TopAdspaces_2 />

        </div>

        {/* <!-- find in html text" in react done "" --> */}
        <TopAdspaces_3 />


        <Footer />

      </div>

    </body>
  )
}
