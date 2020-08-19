import React, { Component } from 'react'
import { logo, pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, p1, p2, p3, p4, p5, p6 } from "../components/images"
import Carousel from 'react-multi-carousel'

export class Gallery extends Component {
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
                <div className="container">
                    <div className="row about" >
                        <div className="col-md-8">
                            <h3 className="m_2">Gallery</h3>
                            <div id="ca-container" className="ca-container">
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                    autoPlaySpeed={2000}
                                    transitionDuration={500}
                                    containerClass="carousel-container">
                                    <div className="ca-icon"> </div>
                                    <div className="ca-icon1"> </div>
                                    <div className="ca-icon"> </div>
                                    <div className="ca-icon1"> </div>
                                    <div className="ca-icon"> </div>
                                    <div className="ca-icon1"> </div>
                                    <div className="ca-icon"> </div>
                                    <div className="ca-icon3"> </div>
                                    <div className="ca-icon"> </div>
                                    <div className="ca-icon6"> </div>
                                    <div className="ca-icon"> </div>
                                    <div className="ca-icon"> </div>
                                    {/* <div className="ca-wrapper">
                                        <div className="ca-item ca-item-1">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon1"> </div>
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon4"> </div>
                                            </div>
                                        </div> */}
                                    {/* <div className="ca-item ca-item-2">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon2"> </div>
                                            </div>
                                        </div>
                                        <div className="ca-item ca-item-3">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon3"> </div>
                                            </div>
                                        </div>
                                        <div className="ca-item ca-item-4">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon4"> </div>
                                            </div>
                                        </div>
                                        <div className="ca-item ca-item-5">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon5"> </div>
                                            </div>
                                        </div>
                                        <div className="ca-item ca-item-6">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon6"> </div>
                                            </div>
                                        </div>
                                        <div className="ca-item ca-item-7">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon7"> </div>
                                            </div>
                                        </div>
                                        <div className="ca-item ca-item-8">
                                            <div className="ca-item-main">
                                                <div className="ca-icon"> </div>
                                                <div className="ca-icon"> </div>
                                            </div>
                                        </div>*/}
                                </Carousel>
                            </div>
                            {/* <script type="text/javascript">
                                $('#ca-container').contentcarousel();
			                </script> */}
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Gallery
