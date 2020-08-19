import React, { Component } from 'react'
import "../Assets/css/style.css"
import { logo } from "../components/images"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-bottom_left">
                            <i className="phone"> </i><span>(+91) 222 666 444</span>
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
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                        <Navbar className="h_menu4" expand="lg" style={{ padding: '0' }}>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ padding: '10px 15px', width: '96%', textAlign: 'center' }}>Menu</Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="nav" >
                                    <li><Link to='/' >Home</Link></li>
                                    <li><Link to='/aboutus'>About</Link></li>
                                    <li><Link to='/trainers'>Trainers</Link></li>
                                    <li><Link to='/classes'>Classes</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/pricing'>Pricing</Link></li>
                                    <li><Link to='/contactus'>Contact</Link></li>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="clear"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
