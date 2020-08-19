import React, { Component } from 'react'
import { pic4, pic5, pic, pic7, pic6, pic8 } from './images'
import Carousel from 'react-multi-carousel'

export class TrainersMiddle extends Component {
    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 500, min: 100 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <React.Fragment>
                <div className="row trainers_middle_bottom">
                    <div className="col-md-4">
                        <h3 className="m_2">Our Trainers</h3>
                        <div className="course_demo">
                            <ul id="flexiselDemo3">
                                <Carousel responsive={responsive}>
                                    <li><img src={pic4} /><div className="desc">
                                        <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                        <p>Lorem ipsum dolor<br /> sit amet, consectetuer.</p>
                                        <div className="coursel_list">
                                            <i className="heart1"> </i>
                                            <i className="like"> </i>
                                        </div>
                                        <div className="coursel_list1">
                                            <i className="twt"> </i>
                                            <i className="fb"> </i>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    </li>
                                    <li><img src={pic5} /><div className="desc">
                                        <h3>Lorem Ipsum<br /><span className="m_text">Kik Boxing</span></h3>
                                        <p>Lorem ipsum dolor<br /> sit amet, consectetuer.</p>
                                        <div className="coursel_list">
                                            <i className="heart2"> </i>
                                            <i className="like1"> </i>
                                        </div>
                                        <div className="coursel_list1">
                                            <i className="twt"> </i>
                                            <i className="fb"> </i>
                                        </div>
                                        <div className="clear"></div>
                                    </div></li>
                                    <li><img src={pic4} /><div className="desc">
                                        <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                        <p>Lorem ipsum dolor<br /> sit amet, consectetuer.</p>
                                        <div className="coursel_list">
                                            <i className="heart2"> </i>
                                            <i className="like1"> </i>
                                        </div>
                                        <div className="coursel_list1">
                                            <i className="twt"> </i>
                                            <i className="fb"> </i>
                                        </div>
                                        <div className="clear"></div>
                                    </div></li>
                                    <li><img src={pic5} /><div className="desc">
                                        <h3>Lorem Ipsum<br /><span className="m_text">Kik Boxing</span></h3>
                                        <p>Lorem ipsum dolor<br /> sit amet, consectetuer.</p>
                                        <div className="coursel_list">
                                            <i className="heart2"> </i>
                                            <i className="like1"> </i>
                                        </div>
                                        <div className="coursel_list1">
                                            <i className="twt"> </i>
                                            <i className="fb"> </i>
                                        </div>
                                        <div className="clear"></div>
                                    </div></li>
                                    <li><img src={pic4} /><div className="desc">
                                        <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                        <p>Lorem ipsum dolor<br /> sit amet, consectetuer.</p>
                                        <div className="coursel_list">
                                            <i className="heart2"> </i>
                                            <i className="like1"> </i>
                                        </div>
                                        <div className="coursel_list1">
                                            <i className="twt"> </i>
                                            <i className="fb"> </i>
                                        </div>
                                        <div className="clear"></div>
                                    </div></li>
                                </Carousel>
                            </ul>
                            {/* {
                                $(window).load(function () {
                                    $("#flexiselDemo3").flexisel({
                                        visibleItems: 4,
                                        animationSpeed: 1000,
                                        autoPlay: true,
                                        autoPlaySpeed: 3000,
                                        pauseOnHover: true,
                                        enableResponsiveBreakpoints: true,
                                        responsiveBreakpoints: {
                                            portrait: {
                                                changePoint: 480,
                                                visibleItems: 1
                                            },
                                            landscape: {
                                                changePoint: 640,
                                                visibleItems: 2
                                            },
                                            tablet: {
                                                changePoint: 768,
                                                visibleItems: 2
                                            }
                                        }
                                    });

                                })} */}
                            {/*   <script type="text/javascript" src="js/jquery.flexisel.js"></script> */}
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
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,. </p>
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
                                    <p>Lorem ipsum dolor sit amet. </p>
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
                </div>
            </React.Fragment>
        )
    }
}

export default TrainersMiddle
