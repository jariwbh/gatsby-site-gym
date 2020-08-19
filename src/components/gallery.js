import React, { Component } from 'react'
import { logo, pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, p1, p2, p3, p4, p5, p6 } from "../components/images"

export class Gallery extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row about" >
                        <div className="col-md-8">
                            <h3 className="m_2">Gallery</h3>
                            <div id="ca-container" className="ca-container">
                                <div className="ca-wrapper">
                                    <div className="ca-item ca-item-1">
                                        <div className="ca-item-main">
                                            <div className="ca-icon"> </div>
                                            <div className="ca-icon1"> </div>
                                        </div>
                                    </div>
                                    <div className="ca-item ca-item-2">
                                        <div className="ca-item-main">
                                            <div className="ca-icon"> </div>
                                            <div className="ca-icon2"> </div>
                                        </div>
                                    </div>
                                    {/* <div className="ca-item ca-item-3">
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
                                    </div> */}
                                    {/* <div className="ca-item ca-item-5">
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
                                    </div> */}
                                </div>
                            </div>
                            {/* <script type="text/javascript">
                                $('#ca-container').contentcarousel();
			                </script> */}
                        </div>
                        <div className="col-md-4">
                            <h3 className="m_2">Partner</h3>
                            <ul className="partner">
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
            </React.Fragment>
        )
    }
}

export default Gallery
