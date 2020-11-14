import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

        function Nav(){
            return(
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <Link to='/' className="navbar-brand text-danger" ><img className="logo" src="https://res.cloudinary.com/toniaclara/image/upload/v1598723304/august-removebg-preview_f9mau2.png" height="15px" alt=""/>St.Augustine Hospital</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-lg-auto ">
                    <Link to='/' className="nav-link active text-light" >Home <span class="sr-only">(current)</span></Link>
                    <Link to='/about' className="nav-link text-light" >About Us</Link>
                    <Link to='/services' className="nav-link text-light" >Services</Link>
                    <Link to='/contact' className="nav-link text-light"  tabindex="-1" aria-disabled="false">Contact</Link>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
    export default Nav