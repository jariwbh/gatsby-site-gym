import React, { Component } from 'react'
import Gallery from '../components/gallery'
import { about_img, about_img1, about_img3, about_img2, about_img4, about_img5, about_img6, about_img7 } from '../components/images'
import Trainelogin from '../components/trainelogin'
import Layout from '../components/Layout'

export class Aboutus extends Component {
    constructor() {
        super();
        // window.scrollTo(0, 0);
    }
    render() {
        return (
            <Layout>
                <div className="main" style={{ background: '#F3F3F3' }}>
                    <div className="about_banner_img"><img src={about_img} className="img-responsive" alt="" /></div>
                    <div className="about_banner_wrap">
                        <h1 className="m_11">About Us</h1>
                    </div>
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row about-top" style={{ margin: '0 auto' }}>
                                <div className="col-md-5">
                                    <img src={about_img1} className="img-responsive" alt="" />
                                </div>
                                <div className="col-md-7 about-left-text">
                                    <h2>Lorem ipsum dolorsit!</h2>
                                    <p>aliquam erat volutpat. Ut wisi enim ad minim veniam, quis <br />nostrud exerci tation ullamcorper suscipit lobortis.</p>
                                    <h4>ullamcorper - <span className="m_12">Gymsport Responsible</span></h4>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="about_trainer">
                            <h3 className="m_2">Our Trainers</h3>
                            <div className="row about_box">
                                <div className="col-md-4">
                                    <div className="box1">
                                        <div className="box1_left">
                                            <img src={about_img3} className="img-responsive" alt="" />
                                            <div className="desc1">
                                                <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
                                                <div className="coursel_list">
                                                    <i className="a_heart"> </i>
                                                    <i className="like1"> </i>
                                                </div>
                                                <div className="coursel_list1">
                                                    <i className="a_twt"> </i>
                                                    <i className="a_fb"> </i>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="box1_right">
                                            <h4>Qualifications</h4>
                                            <p>Lorem ipsum dolor consect adipiscing elit, diamnonu nibh euismod dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim </p>
                                            <h4>Speciality</h4>
                                            <p className="para1">diam nonummy euismod tincidunt ut laoreet dolore magna aliquam volutpat.</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box2">
                                        <div className="box1_left">
                                            <img src={about_img2} className="img-responsive" alt="" />
                                            <div className="desc2">
                                                <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
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
                                        </div>
                                        <div className="box1_right">
                                            <h4 className="right_text">Qualifications</h4>
                                            <p className="right_text1">Lorem ipsum dolor consect adipiscing elit, diamnonu nibh euismod dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim </p>
                                            <h4 className="right_text">Speciality</h4>
                                            <p className="right_text2">diam nonummy euismod tincidunt ut laoreet dolore magna aliquam volutpat.</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box1">
                                        <div className="box1_left">
                                            <img src={about_img4} className="img-responsive" alt="" />
                                            <div className="desc1">
                                                <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
                                                <div className="coursel_list">
                                                    <i className="a_heart"> </i>
                                                    <i className="like1"> </i>
                                                </div>
                                                <div className="coursel_list1">
                                                    <i className="a_twt"> </i>
                                                    <i className="a_fb"> </i>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="box1_right">
                                            <h4>Qualifications</h4>
                                            <p>Lorem ipsum dolor consect adipiscing elit, diamnonu nibh euismod dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim </p>
                                            <h4>Speciality</h4>
                                            <p className="para1">diam nonummy euismod tincidunt ut laoreet dolore magna aliquam volutpat.</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="row about_box1">
                                <div className="col-md-4">
                                    <div className="box2">
                                        <div className="box1_left">
                                            <img src={about_img5} className="img-responsive" alt="" />
                                            <div className="desc2">
                                                <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
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
                                        </div>
                                        <div className="box1_right">
                                            <h4 className="right_text">Qualifications</h4>
                                            <p className="right_text1">Lorem ipsum dolor consect adipiscing elit, diamnonu nibh euismod dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim </p>
                                            <h4 className="right_text">Speciality</h4>
                                            <p className="right_text2">diam nonummy euismod tincidunt ut laoreet dolore magna aliquam volutpat.</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box1">
                                        <div className="box1_left">
                                            <img src={about_img7} className="img-responsive" alt="" />
                                            <div className="desc1">
                                                <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
                                                <div className="coursel_list">
                                                    <i className="a_heart"> </i>
                                                    <i className="like1"> </i>
                                                </div>
                                                <div className="coursel_list1">
                                                    <i className="a_twt"> </i>
                                                    <i className="a_fb"> </i>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        <div className="box1_right">
                                            <h4>Qualifications</h4>
                                            <p>Lorem ipsum dolor consect adipiscing elit, diamnonu nibh euismod dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim </p>
                                            <h4>Speciality</h4>
                                            <p className="para1">diam nonummy euismod tincidunt ut laoreet dolore magna aliquam volutpat.</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box2">
                                        <div className="box1_left">
                                            <img src={about_img6} className="img-responsive" alt="" />
                                            <div className="desc2">
                                                <h3>Lorem Ipsum<br /><span className="m_text">Spinning</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
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
                                        </div>
                                        <div className="box1_right">
                                            <h4 className="right_text">Qualifications</h4>
                                            <p className="right_text1">Lorem ipsum dolor consect adipiscing elit, diamnonu nibh euismod dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim </p>
                                            <h4 className="right_text">Speciality</h4>
                                            <p className="right_text2">diam nonummy euismod tincidunt ut laoreet dolore magna aliquam volutpat.</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <Trainelogin />
                    <div className="testimonial" style={{ padding: '0' }}>
                        <div className="container">
                            <i className="quot"> </i>
                            <p>diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendreri</p>
                            <p className="ceo">Who nostrud,  <span className="ceo1">NORMAL - ULLAMCORPER</span></p>
                        </div>
                    </div>
                    <Gallery />
                </div>
            </Layout>
        )
    }
}

export default Aboutus
