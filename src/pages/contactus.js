import React, { Component } from 'react'
import Gallery from '../components/gallery'
import { pic, pic7, pic6, pic8 } from '../components/images'
import Layout from '../components/Layout'

export class Contactus extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <Layout>
                <div className="main">
                    <iframe width="100%" height="420" frameBorder="0" scrollinglling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=United+Kingdom&amp;aq=0&amp;oq=un&amp;sll=37.0625,-95.677068&amp;sspn=48.956293,107.138672&amp;ie=UTF8&amp;hq=&amp;hnear=United+Kingdom&amp;ll=55.378051,-3.435973&amp;spn=135.795411,68.554687&amp;t=m&amp;z=2&amp;output=embed"> </iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=United+Kingdom&amp;aq=0&amp;oq=un&amp;sll=37.0625,-95.677068&amp;sspn=48.956293,107.138672&amp;ie=UTF8&amp;hq=&amp;hnear=United+Kingdom&amp;ll=55.378051,-3.435973&amp;spn=135.795411,68.554687&amp;t=m&amp;z=2" style={{ color: '#666', fontSize: '12px', textAlign: 'left' }}> </a></small>
                    <div className="about_banner_wrap">
                        <h1 className="m_11">Contact</h1>
                    </div>
                    <div className="border1"> </div>
                    <div className="rwo contact">
                        <div className="container">
                            <div className="col-md-8 contact-top">
                                <h3>Send us a message</h3>
                                <p className="contact_msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                                <form method="post" action="contact-post.html">
                                    <div className="to">
                                        <input type="text" className="text" placeholder="Name" />
                                        <input type="text" className="text" placeholder="Email" style={{ marginLeft: '20px' }} />
                                        <input type="text" className="text" placeholder="Subject" style={{ marginLeft: '20px' }} />
                                    </div>
                                    <div className="text">
                                        <textarea placeholder="Message:" >Message:</textarea>
                                    </div>
                                    <div className="form-submit1">
                                        <input name="submit" type="submit" id="submit" placeholder="Submit Your Message" /><br />
                                        <p className="m_msg">Make sure you put a valid email</p>
                                    </div>
                                    <div className="clear"></div>
                                </form>
                            </div>
                            <div className="col-md-4 contact-top right">
                                <h3>contact info</h3>
                                <p>diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>
                                <ul className="contact_info">
                                    <li><i className="mobile"> </i><span>+1-900-235-2456</span></li>
                                    <li><i className="message"> </i><span className="msg">info(at)gym.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="trainers_middle_bottom">
                        <div className="container">
                            <div className="col-md-4">
                                <div className="contact_hours">
                                    <ul className="times_contact">
                                        <h3>Opening <span className="opening">Hours</span></h3>
                                        <li><i className="calender"> </i><span className="contact_week">Monday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <li><i className="calender"> </i><span className="contact_week">Tuesday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <li><i className="calender"> </i><span className="contact_week">Wednesday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <li><i className="calender"> </i><span className="contact_week">Thrusday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <li><i className="calender"> </i><span className="contact_week">Friday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <li><i className="calender"> </i><span className="contact_week">Saturday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <li><i className="calender"> </i><span className="contact_week">Sunday</span><div className="hours1">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                                        <h4>Enjoy it!</h4>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3 className="m_2">Next Events</h3>
                                <div className="events">
                                    <div className="event-top">
                                        <ul className="event1">
                                            <h4>26 April, 2014</h4>
                                            <img src={pic} alt="" />
                                        </ul>
                                        <ul className="event1_text">
                                            <span className="m_5">h.12.00-h.13.00</span>
                                            <h4>Aerobics</h4>
                                            <p>Lorem ipsum dolor sit. </p>
                                            <div className="btn2">
                                                <a href="#">Reservation</a>
                                            </div>
                                        </ul>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="event-bottom">
                                        <ul className="event1">
                                            <h4>26 April, 2014</h4>
                                            <img src={pic} alt="" />
                                        </ul>
                                        <ul className="event1_text">
                                            <span className="m_5">h.12.00-h.13.00</span>
                                            <h4>Spinning</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer. </p>
                                            <div className="btn2">
                                                <a href="#">Reservation</a>
                                            </div>
                                        </ul>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3 className="m_2">From the blog</h3>
                                <div className="blog_events">
                                    <ul className="tab-left1">
                                        <span className="tab1-img"><img src={pic7} alt="" /></span>
                                        <div className="tab-text1">
                                            <p><a href="#">nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip</a></p>
                                            <span className="m_date">25 April, 2014</span>
                                        </div>
                                        <div className="clear"></div>
                                    </ul>
                                    <ul className="tab-left1">
                                        <span className="tab1-img"><img src={pic6} alt="" /></span>
                                        <div className="tab-text1">
                                            <p><a href="#">soluta nobis eleifend option congue nihil imperdiet doming id</a></p>
                                            <span className="m_date">25 April, 2014</span>
                                        </div>
                                        <div className="clear"></div>
                                    </ul>
                                    <ul className="tab-last1">
                                        <span className="tab1-img"><img src={pic8} alt="" /></span>
                                        <div className="tab-text1">
                                            <p><a href="#">quod mazim placerat facer possim assum. Typi non habent</a></p>
                                            <span className="m_date">25 April, 2014</span>
                                        </div>
                                        <div className="clear"></div>
                                    </ul>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="contact_bottom">
                                <ul className="join_text">
                                    <h3>Why Join ? <span className="m_26"> eleifend option congue nihil</span></h3>
                                    <p>lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                </ul>
                                <ul className="btn_contact">
                                    <a href="#">Join Today</a>
                                </ul>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
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

export default Contactus
