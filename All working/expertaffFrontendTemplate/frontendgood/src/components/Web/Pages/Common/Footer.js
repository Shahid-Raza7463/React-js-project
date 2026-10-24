import React from 'react'

export default function Footer() {
    return (
        <>
            {/* <!-- Footer --> */}
            <div className="container" style={{ backgroundColor: '#f3f3f3' }}>
                <div className=" mt-5 mx-5 footer-div">
                    <footer className="footer">
                        <div className="footer-cols">
                            <ul>
                                <li>
                                </li>
                                <li><a href="#">Search Network</a></li>
                                <li><a href="#">Industry News</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                            <ul>
                                <li>
                                    <h5>Industry Friends</h5>
                                </li>
                                <li><a href="#">AffDeal</a></li>
                                <li><a href="#">AffVoice</a></li>
                                <li><a href="/contactUs.html">Contact Us</a></li>
                            </ul>
                            <ul>
                                <li className="p-4" style={{ backgroundColor: '#f3f3f3' }}>
                                    <h5>Connect with us</h5>
                                    <a href="#" className="text-primary">mailto:contact@expertaff.com</a>
                                    <h5 className="mt-4">Advertise on this Site</h5>
                                    <a href="#" className="text-primary">mailto:expertaff@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </footer>

                </div>
            </div>
            <div className="container" style={{ backgroundColor: '#2C1B47' }}>
                <div className="d-flex justify-content-between text-light copyright">
                    <p className="m-1">Copyright © 2023 ExpertAff All rights reserved.</p>
                    <a href="#" className="m-1 text-light">Add Network / Program</a>
                </div>
            </div>
        </>
    )
}
