import React from 'react';

import Footer from '../Common/Footer';
import NavBar from '../Common/NavBar';
import TopAdspaces_1 from '../Adspaces/TopAdspaces_1';
import TopAdspaces_2 from '../Adspaces/TopAdspaces_2';
import TopAdspaces_3 from '../Adspaces/TopAdspaces_3';

export default function Home() {
  return (
    <body>
      {/* // <!-- Header Nav --> */}
      <NavBar />
      {/* 33333333333333333333333333333333 */}
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


          {/* <!-- Filter Table --> */}
          <div className="container mt-4">
            <div className="table-div">
              <div className="d-flex justify-content-between head-div">
                <h6 className="head-1">Sponsored Network</h6>
                <h6 className="head-2">Description</h6>
                <h6 className="head-3">Offers</h6>
                <h6 className="head-4">Join</h6>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="images/network img.jpg" className="img-fluid network-img rounded" />
                  <div className="mx-4 mobile-div">
                    <h6 className="prm-net"><a href="/network.html" className="text-dark">Premium Network</a> <span
                      className="badge spon-badge mx-1">Sponsored</span></h6>
                    <div className="table-icon">
                      <img src="images/Heart.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dating" />
                      <img src="images/Vector.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Game" />
                      <img src="images/Plus 18 Movie.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adult" />
                      <img src="images/First aid kit.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Health/Nutra" />
                    </div>
                    <div className="table-text mt-2">
                      <p>53 Reviews / Trakaff / Weekly</p>
                    </div>
                  </div>
                </div>
                <div className="desc-td">
                  <p className="description mt-2">Premium Network Premium Network Premium Network Premium Network Premium
                    Network Premium Network Premium Network</p>
                </div>

                <div className="m-offer">
                  <p className="fw-bold off-text">552</p>
                </div>

                <div className="m-td">
                  <button type="button" className="btn table-btn mx-3" fdprocessedid="6sljwl">Join Now</button>
                  <div className="mt-2 mx-3">
                    <span className="badge join-badge">4.56</span>
                    <div className="table-rating d-flex">
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!----> */}
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="images/network img.jpg" className="img-fluid network-img rounded" />
                  <div className="mx-4 mobile-div">
                    <h6 className="prm-net"><a href="/network.html" className="  text-dark">Premium Network</a> <span
                      className="badge spon-badge mx-1">Sponsored</span></h6>
                    <div className="table-icon">
                      <img src="images/Heart.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dating" />
                      <img src="images/Vector.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Game" />
                      <img src="images/Plus 18 Movie.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adult" />
                      <img src="images/First aid kit.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Health/Nutra" />
                    </div>
                    <div className="table-text mt-2">
                      <p>53 Reviews / Trakaff / Weekly</p>
                    </div>
                  </div>
                </div>
                <div className="desc-td">
                  <p className="description mt-2">Premium Network Premium Network Premium Network Premium Network Premium
                    Network Premium Network Premium Network</p>
                </div>

                <div className="m-offer">
                  <p className="fw-bold off-text">552</p>
                </div>

                <div className="m-td">
                  <button type="button" className="btn table-btn mx-3" fdprocessedid="6sljwl">Join Now</button>
                  <div className="mt-2 mx-3">
                    <span className="badge join-badge">4.56</span>
                    <div className="table-rating d-flex">
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!----> */}
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="images/network img.jpg" className="img-fluid network-img rounded" />
                  <div className="mx-4 mobile-div">
                    <h6 className="prm-net"><a href="/network.html" className="  text-dark">Premium Network</a> <span
                      className="badge spon-badge mx-1">Sponsored</span></h6>
                    <div className="table-icon">
                      <img src="images/Heart.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dating" />
                      <img src="images/Vector.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Game" />
                      <img src="images/Plus 18 Movie.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adult" />
                      <img src="images/First aid kit.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Health/Nutra" />
                    </div>
                    <div className="table-text mt-2">
                      <p>53 Reviews / Trakaff / Weekly</p>
                    </div>
                  </div>
                </div>
                <div className="desc-td">
                  <p className="description mt-2">Premium Network Premium Network Premium Network Premium Network Premium
                    Network Premium Network Premium Network</p>
                </div>

                <div className="m-offer">
                  <p className="fw-bold off-text">552</p>
                </div>

                <div className="m-td">
                  <button type="button" className="btn table-btn mx-3" fdprocessedid="6sljwl">Join Now</button>
                  <div className="mt-2 mx-3">
                    <span className="badge join-badge">4.56</span>
                    <div className="table-rating d-flex">
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!----> */}
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="images/network img.jpg" className="img-fluid network-img rounded" />
                  <div className="mx-4 mobile-div">
                    <h6 className="prm-net"><a href="/network.html" className="  text-dark">Premium Network</a> <span
                      className="badge spon-badge mx-1">Sponsored</span></h6>
                    <div className="table-icon">
                      <img src="images/Heart.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dating" />
                      <img src="images/Vector.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Game" />
                      <img src="images/Plus 18 Movie.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adult" />
                      <img src="images/First aid kit.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Health/Nutra" />
                    </div>
                    <div className="table-text mt-2">
                      <p>53 Reviews / Trakaff / Weekly</p>
                    </div>
                  </div>
                </div>
                <div className="desc-td">
                  <p className="description mt-2">Premium Network Premium Network Premium Network Premium Network Premium
                    Network Premium Network Premium Network</p>
                </div>

                <div className="m-offer">
                  <p className="fw-bold off-text">552</p>
                </div>

                <div className="m-td">
                  <button type="button" className="btn table-btn mx-3" fdprocessedid="6sljwl">Join Now</button>
                  <div className="mt-2 mx-3">
                    <span className="badge join-badge">4.56</span>
                    <div className="table-rating d-flex">
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!----> */}
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="images/network img.jpg" className="img-fluid network-img rounded" />
                  <div className="mx-4 mobile-div">
                    <h6 className="prm-net"><a href="/network.html" className="  text-dark">Premium Network</a> <span
                      className="badge spon-badge mx-1">Sponsored</span></h6>
                    <div className="table-icon">
                      <img src="images/Heart.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dating" />
                      <img src="images/Vector.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Game" />
                      <img src="images/Plus 18 Movie.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adult" />
                      <img src="images/First aid kit.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Health/Nutra" />
                    </div>
                    <div className="table-text mt-2">
                      <p>53 Reviews / Trakaff / Weekly</p>
                    </div>
                  </div>
                </div>
                <div className="desc-td">
                  <p className="description mt-2">Premium Network Premium Network Premium Network Premium Network Premium
                    Network Premium Network Premium Network</p>
                </div>

                <div className="m-offer">
                  <p className="fw-bold off-text">552</p>
                </div>

                <div className="m-td">
                  <button type="button" className="btn table-btn mx-3" fdprocessedid="6sljwl">Join Now</button>
                  <div className="mt-2 mx-3">
                    <span className="badge join-badge">4.56</span>
                    <div className="table-rating d-flex">
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!----> */}
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="images/network img.jpg" className="img-fluid network-img rounded" />
                  <div className="mx-4 mobile-div">
                    <h6 className="prm-net"><a href="/network.html" className="  text-dark">Premium Network</a> <span
                      className="badge spon-badge mx-1">Sponsored</span></h6>
                    <div className="table-icon">
                      <img src="images/Heart.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dating" />
                      <img src="images/Vector.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Game" />
                      <img src="images/Plus 18 Movie.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adult" />
                      <img src="images/First aid kit.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Health/Nutra" />
                    </div>
                    <div className="table-text mt-2">
                      <p>53 Reviews / Trakaff / Weekly</p>
                    </div>
                  </div>
                </div>
                <div className="desc-td">
                  <p className="description mt-2">Premium Network Premium Network Premium Network Premium Network Premium
                    Network Premium Network Premium Network</p>
                </div>

                <div className="m-offer">
                  <p className="fw-bold off-text">552</p>
                </div>

                <div className="m-td">
                  <button type="button" className="btn table-btn mx-3" fdprocessedid="6sljwl">Join Now</button>
                  <div className="mt-2 mx-3">
                    <span className="badge join-badge">4.56</span>
                    <div className="table-rating d-flex">
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                      <i className="fas fa-3x fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Banner --> */}
        <TopAdspaces_3 />
        {/* <!-- find in html text" in react done "" --> */}

        {/* <!-- Footer --> */}
        <Footer />



      </div>
      {/* 33333333333333333333333333333333 */}
    </body>
  )
}
