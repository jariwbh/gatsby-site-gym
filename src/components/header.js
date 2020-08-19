import React, { Component } from 'react'
import "../Assets/css/style.css"
import { logo } from "../components/images"
import { Link } from 'gatsby'
//import { paths } from '../pages/index'

const Header = () => (
    <React.Fragment>
        <div className="header-bottom">
            <div className="container">
                <div className="header-bottom_left">
                    <i className="phone"> </i><span>1-200-346-2986</span>
                </div>
                <div className="social">
                    <ul>
                        <li className="facebook"><a href="#"><span> </span></a></li>
                        <li className="twitter"><a href="#"><span> </span></a></li>
                        <li className="pinterest"><a href="#"><span> </span></a></li>
                        <li className="google"><a href="#"><span> </span></a></li>
                        <li className="tumblr"><a href="#"><span> </span></a></li>
                        <li className="instagram"><a href="#"><span> </span></a></li>
                        <li className="rss"><a href="#"><span> </span></a></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </div>

        <div className="menu" id="menu">
            <div className="container">
                <div className="logo">
                    <a href="index.html"><img src={logo} alt="" /></a>
                </div>
                <div className="h_menu4">
                    <a className="toggleMenu" href="#">Menu</a>
                    <ul className="nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutus'>About</Link></li>
                        <li><Link to='/trainers'>Trainers</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/contactus'>Contact</Link></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    </React.Fragment>
)

export default Header
