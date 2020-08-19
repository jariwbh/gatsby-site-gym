import React, { Component } from 'react'
import { blog_img1, blog_img3, blog_img2, pic4, pic5, p6, p5, p4, p3, p2, p1 } from '../components/images';
import Layout from '../components/Layout'

export class Blog extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <Layout>
                <div className="main">
                    <div className="about_banner_img"><img src={blog_img1} className="img-responsive" alt="" /></div>
                    <div className="about_banner_wrap">
                        <h1 className="m_11">Blog</h1>
                    </div>
                    <div className="border1"> </div>
                    <div className="container">
                        <div className="row single-top">
                            <div className="col-md-8">
                                <div className="blog_box">
                                    <div className="blog_grid">
                                        <h3><a href="blog_single.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </a></h3><i className="document"> </i>
                                        <a href="blog_single.html"><img src={blog_img3} className="img-responsive" alt="" /></a>
                                        <div className="singe_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ni obortis nisl ut aliquip obortis nisl ut aliquip</p>
                                            <div className="comments">
                                                <ul className="links">
                                                    <li><a href="#"><i className="blog_icon1"> </i><br /><span>April 14, 2014</span></a></li>
                                                    <li><a href="#"><i className="blog_icon2"> </i><br /><span>admin</span></a></li>
                                                    <li><a href="#"><i className="blog_icon3"> </i><br /><span>1206</span></a></li>
                                                    <li><a href="#"><i className="blog_icon4"> </i><br /><span>1206</span></a></li>
                                                </ul>
                                                <div className="btn_blog"><a href="#">Read More</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_box">
                                    <div className="blog_grid">
                                        <h3><a href="blog_single.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </a></h3><i className="document1"> </i>
                                        <a href="blog_single.html"><img src={blog_img2} className="img-responsive" alt="" /></a>
                                        <div className="singe_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem </p>
                                            <div className="comments">
                                                <ul className="links">
                                                    <li><a href="#"><i className="blog_icon1"> </i><br /><span>April 14, 2014</span></a></li>
                                                    <li><a href="#"><i className="blog_icon2"> </i><br /><span>admin</span></a></li>
                                                    <li><a href="#"><i className="blog_icon3"> </i><br /><span>1206</span></a></li>
                                                    <li><a href="#"><i className="blog_icon4"> </i><br /><span>1206</span></a></li>
                                                </ul>
                                                <div className="btn_blog"><a href="#">Read More</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_box">
                                    <div className="blog_grid">
                                        <h3><a href="blog_single.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </a></h3><i className="document2"> </i>
                                        <div className="video_player">
                                            <iframe src="//player.vimeo.com/video/68395270?title=0&amp;byline=0&amp;portrait=0&amp;color=ff9933" width="100%" height="350" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                                        </div>
                                        <div className="singe_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip</p>
                                            <div className="comments">
                                                <ul className="links">
                                                    <li><a href="#"><i className="blog_icon1"> </i><br /><span>April 14, 2014</span></a></li>
                                                    <li><a href="#"><i className="blog_icon2"> </i><br /><span>admin</span></a></li>
                                                    <li><a href="#"><i className="blog_icon3"> </i><br /><span>1206</span></a></li>
                                                    <li><a href="#"><i className="blog_icon4"> </i><br /><span>1206</span></a></li>
                                                </ul>
                                                <div className="btn_blog"><a href="#">Read More</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_box">
                                    <div className="blog_grid">
                                        <h3><a href="blog_single.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </a></h3><i className="document3"> </i>
                                        <div className="singe_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                                            <div className="comments">
                                                <ul className="links">
                                                    <li><a href="#"><i className="blog_icon1"> </i><br /><span>April 14, 2014</span></a></li>
                                                    <li><a href="#"><i className="blog_icon2"> </i><br /><span>admin</span></a></li>
                                                    <li><a href="#"><i className="blog_icon3"> </i><br /><span>1206</span></a></li>
                                                    <li><a href="#"><i className="blog_icon4"> </i><br /><span>1206</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="dc_pagination dc_paginationA dc_paginationA06">
                                    <li><a href="#" className="current">Prev</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">19</a></li>
                                    <li><a href="#">20</a></li>
                                    <li><a href="#" className="current">Next</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 ">
                                <ul className="blog-list">
                                    <h4>Categories</h4>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Aerobics</a></li>
                                    <li><a href="#">Crossfit</a></li>
                                    <li><a href="#">Spinning</a></li>
                                    <li><a href="#">news</a></li>
                                </ul>
                                <ul className="recent-list">
                                    <h4>Recent Posts</h4>
                                    <li><a href="#">aliquam erat volutpat</a><br /><span>25 April 2014</span></li>
                                    <li><a href="#">aliquam erat volutpat</a><br /><span>25 April 2014</span></li>
                                    <li><a href="#">aliquam erat volutpat</a><br /><span>25 April 2014</span></li>
                                    <li><a href="#">aliquam erat volutpat</a><br /><span>25 April 2014</span></li>
                                </ul>
                                <ul className="single_times">
                                    <h3>Opening <span className="opening">Hours</span></h3>
                                    <li><i className="calender"> </i><span className="week_class">Monday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                    <li><i className="calender"> </i><span className="week_class">Tuesday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                    <li><i className="calender"> </i><span className="week_class">Wednesday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                    <li><i className="calender"> </i><span className="week_class">Thrusday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                    <li><i className="calender"> </i><span className="week_class">Friday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                    <li><i className="calender"> </i><span className="week_class">Saturday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                    <li><i className="calender"> </i><span className="week_class">Sunday</span><div className="hours_class">h.6:00-h.24:00</div>  <div className="clear"></div></li>
                                </ul>
                                <div className="course_demo">
                                    <ul id="flexiselDemo3">
                                        <li><img src={pic4} />
                                            <div className="desc">
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
                                    </ul>
                                    {/* <script type="text/javascript">
                                        $(window).load(function() {
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

                                            });
                                        </script>
                                    <script type="text/javascript" src="js/jquery.flexisel.js"></script> */}
                                </div>
                                <h3 className="m_14">Membership Prices</h3>
                                <div className="members">
                                    <h4 className="m_3">25% Discount of for all members</h4>
                                    <p>Discount on services and <br />treatments at the GymBase for<br /> all membership cards holders.</p>
                                    <div className="btn1">
                                        <a href="#">More</a>
                                    </div>
                                </div>
                                <ul className="blog-list1">
                                    <h4>Tags</h4>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Html5</a></li>
                                    <li><a href="#">Wordpress</a></li>
                                    <li><a href="#">Logo</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Wordpress</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Html5</a></li>
                                    <li><a href="#">Wordpress</a></li>
                                    <li><a href="#">Logo</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <ul className="archive-list">
                                    <h4>Archive</h4>
                                    <li><a href="#">2014</a></li>
                                    <li><a href="#">2013</a></li>
                                    <li><a href="#">2012</a></li>
                                </ul>
                                <h3 className="m_15">Partner</h3>
                                <ul className="partner_blog">
                                    <li><img src={p6} alt="" /></li>
                                    <li><img src={p5} alt="" /></li>
                                    <li><img src={p4} alt="" /></li>
                                    <li><img src={p3} alt="" /></li>
                                    <li><img src={p2} alt="" /></li>
                                    <li><img src={p1} alt="" /></li>
                                    <div className="clear"></div>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Blog
