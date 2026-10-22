import React from 'react'

export default function NavBar() {
  return (
    <>

{/* Navigation Bar */}
     <header>
        <nav>
            <div className="companyName">
                <h1>Company</h1>
            </div>
            <ul className="navText">
                <li><a href="">HOME</a></li>
                <li><a href="">SHOP</a></li>
                <li><a href="">PRODUCT</a></li>
                <li><a href="">OSLO PLUS</a></li>
                <li><a href="">PAGES</a></li>
                <li><a href="">BLOG</a></li>
            </ul>
            <div className="option">
                <select name="" className="country">
                    <option value="">USD</option>
                    <option value="">INDIA</option>
                </select>
                <div className="offset"></div>
                <select name="" className="country">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
            <div className="icon-container">
                <i className="fa-sharp fa-solid fa-magnifying-glass align-icon"></i>
                <i className="fa-regular fa-user align-icon"></i>
                <i className="fa-regular fa-heart align-icon"></i>
                <i className="fa-regular fa-envelope align-icon"></i>
            </div>
        </nav>
    </header>
    </>
  )
}
