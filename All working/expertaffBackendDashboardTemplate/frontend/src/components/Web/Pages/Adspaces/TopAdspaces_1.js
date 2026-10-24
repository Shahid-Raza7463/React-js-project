import React from 'react'

export default function TopAdspaces_1() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-3 mx-1 pt-2">
            <div className="col">
                <div className="card">
                    <div className="mx-4 mt-1">
                        <h5 className="net-mnth">Network of the Month</h5>
                    </div>
                    <a href="#"><img src="images/1win2.jpg" className="card-img-top img-fluid img1 px-4" alt="..." /></a>

                    <div className="mt-1 mx-4">
                        <a href="#" className="text-dark">
                            <h5 className="net-title">Network</h5>
                        </a>
                        <div className="rating">
                            <i className="fas fa-3x fa-star"></i>
                            <i className="fas fa-3x fa-star"></i>
                            <i className="fas fa-3x fa-star"></i>
                            <i className="fas fa-3x fa-star"></i>
                            <i className="fas fa-3x fa-star"></i>
                        </div>
                        <p className="net-desc mt-1">Premium Network Premium Network Premium Network Premium Network Premium Network
                            Premium Network</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="#"><img src="images/1win.jpg" className="d-block w-100 rounded" alt="..." /></a>
                        </div>
                        <div className="carousel-item">
                            <a href="#"><img src="images/adsempire.jpg" className="d-block w-100 rounded" alt="..." /></a>
                        </div>
                        <div className="carousel-item">
                            <a href="#"><img src="images/lopollos.png" className="d-block w-100 rounded" alt="..." /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

