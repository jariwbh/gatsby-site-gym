import React, { Component } from 'react'
import { logo } from "../components/images"
export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row section group">
                            <div className="col-md-4">
                                <h4 className="m_7">Newsletter Signup</h4>
                                <p className="m_8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</p>
                                <form className="subscribe">
                                    <input type="text" placeholder="Insert Email" />
                                </form>
                                <div className="subscribe1">
                                    <a href="#">Submit Email<i className="but_arrow"> </i></a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="f-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <p className="m_9">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>
                                <p className="address">Phone : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="m_10">(00) 222 666 444</span></p>
                                <p className="address">Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="m_10">info[at]mycompany.com</span></p>
                            </div>
                            <div className="col-md-4">
                                <ul className="list">
                                    <h4 className="m_7">Menu</h4>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Trainers</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <ul className="list1">
                                    <h4 className="m_7">Community</h4>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Forum</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="copy">
                            <p>© 2014 Template by <a href="http://w3layouts.com" target="_blank"> w3layouts</a></p>
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
            </React.Fragment>
        )
    }
}

export default Footer
