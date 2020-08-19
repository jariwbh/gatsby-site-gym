import React, { Component } from 'react'
import Gallery from '../components/gallery'
import { tick, price, tick1 } from '../components/images'
import Class_and_price from '../components/class_and_price'
import Layout from '../components/Layout'

export class Pricing extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <Layout>
                <div className="main">
                    <div className="about_banner_img"><img src={price} className="img-responsive" alt="" /></div>
                    <div className="about_banner_wrap">
                        <h1 className="m_11">Pricing</h1>
                    </div>
                    <div className="border1"> </div>
                    <div className="container">
                        <div className="row1 price_plans">
                            <h3 className="m_2">Pricing and plans</h3>
                            <div className="price_plans_box">
                                <div className="col-md-3" style={{ maxWidth: '25%', float: 'left' }}>
                                    <ul className="price1">
                                        <h4>One day training</h4>
                                        <h3>Free</h3>
                                        <ul className="price_list">
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <a className="popup-with-zoom-anim" href="#small-dialog"><li className="price_but">Buy Now</li></a>
                                            {/* <div id="small-dialog" className="mfp-hide">
                                                <div className="pop_up">
                                                    <div className="payment-online-form-left">
                                                        <form>
                                                            <h4><span className="shipping"> </span>Shipping</h4>
                                                            <ul>
                                                                <li><input className="text-box-dark" type="text" placeholder="Frist Name" /></li>
                                                                <li><input className="text-box-dark" type="text" placeholder="Last Name" /></li>
                                                            </ul>
                                                            <ul>
                                                                <li><input className="text-box-dark" type="text" placeholder="Email" /></li>
                                                                <li><input className="text-box-dark" type="text" placeholder="Company Name" /></li>
                                                            </ul>
                                                            <ul>
                                                                <li><input className="text-box-dark" type="text" placeholder="Phone" /></li>
                                                                <li><input className="text-box-dark" type="text" placeholder="Address" /></li>
                                                                <div className="clear"> </div>
                                                            </ul>
                                                            <div className="clear"> </div>
                                                            <ul className="payment-type">
                                                                <h4><span className="payment"> </span> Payments</h4>
                                                                <li>
                                                                    <span className="col_checkbox">
                                                                        <input id="3" className="css-checkbox1" type="checkbox" />
                                                                        <label htmlFor="3" name="demo_lbl_1" className="css-label1"> </label>
                                                                        <a className="visa" href="#"> </a>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="col_checkbox">
                                                                        <input id="4" className="css-checkbox2" type="checkbox" />
                                                                        <label htmlFor="4" name="demo_lbl_2" className="css-label2"> </label>
                                                                        <a className="paypal" href="#"> </a>
                                                                    </span>
                                                                </li>
                                                                <div className="clear"> </div>
                                                            </ul>
                                                            <ul>
                                                                <li><input className="text-box-dark" type="text" placeholder="Card Number" /></li>
                                                                <li><input className="text-box-dark" type="text" placeholder="Name on card" /></li>
                                                                <div className="clear"> </div>
                                                            </ul>
                                                            <ul>
                                                                <li><input className="text-box-light hasDatepicker" type="text" id="datepicker" placeholder="Expiration Date" /><em className="pay-date" /></li>
                                                                <li><input className="text-box-dark" type="text" placeholder="Security Code" /></li>
                                                                <div className="clear"> </div>
                                                            </ul>
                                                            <ul className="payment-sendbtns">
                                                                <li><input type="reset" defaultValue="Cancel" /></li>
                                                                <li><input type="submit" defaultValue="Process order" /></li>
                                                            </ul>
                                                            <div className="clear"> </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="clear"></div>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="col-md-3" style={{ maxWidth: '25%', float: 'left' }}>
                                    <ul className="price1">
                                        <h4>6 months membership</h4>
                                        <h2 className="m_25">$33<small>.33</small></h2>
                                        <ul className="price_list">
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <a className="popup-with-zoom-anim" href="#small-dialog"><li className="price_but">Buy Now</li></a>
                                            <div className="clear"></div>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="col-md-3" style={{ maxWidth: '25%', float: 'left' }}>
                                    <ul className="price2">
                                        <h4>3 months membership</h4>
                                        <h2 className="m_26">$59<small>.00</small></h2>
                                        <ul className="price_list1">
                                            <p><img src={tick1} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick1} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick1} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick1} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick1} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <a className="popup-with-zoom-anim" href="#small-dialog"><li className="price_but1">Buy Now</li></a>
                                            <div className="clear"></div>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="col-md-3" style={{ maxWidth: '25%', float: 'left' }}>
                                    <ul className="price1">
                                        <h4>12 months membership</h4>
                                        <h2 className="m_25">$120<small>.00</small></h2>
                                        <ul className="price_list">
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <p><img src={tick} alt="" align="middle" width="16" height="14" /><a href="#">soluta nobis eleifend</a></p>
                                            <a className="popup-with-zoom-anim" href="#small-dialog"><li className="price_but">Buy Now</li></a>
                                            <div className="clear"></div>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <ul className="price_question">
                        <div className="container">
                            <li className="question_left"><h4>Have a question</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p></li>
                            <li className="question_right">1-300-248-2456</li>
                            <div className="clear"></div>
                        </div>
                    </ul>
                    <Class_and_price />
                    <Gallery />
                </div>
                <div className="footer-top">
                    <ul className="twitter_footer">
                        <li>
                            <i className="twt_icon"> </i><p>aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel  <span className="m_6">2 days ago</span></p>
                            <div className="clear"></div>
                        </li>
                    </ul>
                </div>
            </Layout>
        )
    }
}

export default Pricing
