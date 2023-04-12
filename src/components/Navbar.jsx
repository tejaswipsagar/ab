import React from 'react';
import navIcon from "../pictures/icon.svg";


const Navbar = () => {
  return (
    <div className='sticky-top '> 

                            
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
                    <div className="container-fluid">
                        <a href=""><img src={navIcon} alt="atomizeIcon" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Github</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">For Designers</a>
                            </li>
                            <li className="nav-item">
                                <button className='btn nav-link nav-button'>Documentation</button>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>


    </div>
  )
}

export default Navbar;