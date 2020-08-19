import React, { Component } from 'react'
import { pic, pic1, pic2, pic3 } from "../components/images"
import Header from '../components/header'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import TrainersMiddle from '../components/trainersMiddle'

export class Home extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="container">
                        <div className="header-text">
                            <h1>Perfect Fitness</h1>
                            <h2>Best Choice For your site</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                            <div className="banner_btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="header-arrow">
                            <a href="#menu" className="class scroll"><span> </span> </a>
                        </div>
                    </div>
                </div>
                <Header />
                <div className="main">
                    <div className="container">
                        <div className="row content-top">
                            <div className="col-md-5">
                                <img src={pic} className="img-responsive" alt="" />
                            </div>
                            <div className="col-md-7 content_left_text">
                                <h3>Lorem ipsum dolor sit!</h3>
                                <p>aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row content-middle">
                            <div className="col-md-4">
                                <a href="pricing.html">
                                    <ul className="spinning">
                                        <li className="live">live <span className="m_1">Spinning</span></li>
                                        <li className="room">Room 2</li>
                                        <div className="clear"></div>
                                    </ul>
                                    <div className="view view-fifth">
                                        <img src={pic3} className="img-responsive" alt="" />
                                        <div className="mask">
                                            <div className="info">Read More</div>
                                        </div>
                                    </div>
                                </a></div>
                            <div className="col-md-4"><a href="pricing.html">
                                <ul className="spinning">
                                    <li className="live">live <span className="m_1">Gym</span></li>
                                    <li className="room">Room 1</li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="view view-fifth">
                                    <img src={pic2} className="img-responsive" alt="" />
                                    <div className="mask">
                                        <div className="info">Read More</div>
                                    </div>
                                </div>
                            </a></div>
                            <div className="col-md-4"><a href="pricing.html">
                                <ul className="spinning">
                                    <li className="live">live <span className="m_1">Pilates</span></li>
                                    <li className="room">Room 4</li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="view view-fifth">
                                    <img src={pic1} className="img-responsive" alt="" />
                                    <div className="mask">
                                        <div className="info">Read More</div>
                                    </div>
                                </div>
                            </a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="row about">
                            <div className="col-md-8">
                                <h3 className="m_2">All Classes</h3>
                                <div className="classes">
                                    <div className="cardio_list">
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Cardio Fitness</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Spinning</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Pilates</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Boxing</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <div className="cardio_list1">
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Aerobics</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Kik Boxing</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>CrossFit</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="cardio_sublist">
                                            <ul className="cardio">
                                                <li><i className="clock"> </i><span>Yoga</span></li>
                                            </ul>
                                            <div className="social-media">
                                                <ul>
                                                    <li> <span className="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li>
                                                    <li><span className="simptip-position-bottom simptip-movable" data-tooltip="share"><a href="#" target="_blank"> </a></span></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3 className="m_4">Membership Prices</h3>
                                <div className="members">
                                    <h4 className="m_3">25% Discount of for all members</h4>
                                    <p>Discount on services and <br />treatments at the GymBase for<br /> all membership cards holders.</p>
                                    <div className="btn1">
                                        <a href="#">More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <TrainersMiddle />
                        <Gallery />
                    </div>
                </div>
                <div className="map">
                    <iframe width="100%" height="450" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=United+Kingdom&amp;aq=0&amp;oq=un&amp;sll=37.0625,-95.677068&amp;sspn=48.956293,107.138672&amp;ie=UTF8&amp;hq=&amp;hnear=United+Kingdom&amp;ll=55.378051,-3.435973&amp;spn=135.795411,68.554687&amp;t=m&amp;z=2&amp;output=embed"> </iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=United+Kingdom&amp;aq=0&amp;oq=un&amp;sll=37.0625,-95.677068&amp;sspn=48.956293,107.138672&amp;ie=UTF8&amp;hq=&amp;hnear=United+Kingdom&amp;ll=55.378051,-3.435973&amp;spn=135.795411,68.554687&amp;t=m&amp;z=2" style={{ color: "#666", fontsize: "12px", textalign: "left" }}> </a></small>
                    <div className="opening_hours">
                        <ul className="times">
                            <h3>Opening <span className="opening">Hours</span></h3>
                            <li><i className="calender"> </i><span className="week">Monday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <li><i className="calender"> </i><span className="week">Tuesday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <li><i className="calender"> </i><span className="week">Wednesday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <li><i className="calender"> </i><span className="week">Thrusday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <li><i className="calender"> </i><span className="week">Friday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <li><i className="calender"> </i><span className="week">Saturday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <li><i className="calender"> </i><span className="week">Sunday</span><div className="hours">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                            <h4>Enjoy it!</h4>
                        </ul>
                    </div>
                </div>
                <div className="footer-top">
                    <ul className="twitter_footer">
                        <li>
                            <i className="twt_icon"> </i><p>aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel  <span className="m_6">2 days ago</span></p>
                            <div className="clear"></div>
                        </li>
                    </ul>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default Home
