import React, { Component } from 'react'
import Gallery from '../components/gallery'
import Trainelogin from '../components/trainelogin'
import Class_and_price from '../components/class_and_price'
import Classes_box from '../components/classes_box'
import { class_img } from '../components/images'
import Layout from '../components/Layout'

export class Classes extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <Layout>
                <div className="main">
                    <div className="about_banner_img"><img src={class_img} className="img-responsive" alt="" /></div>
                    <div className="about_banner_wrap">
                        <h1 className="m_11">Classes</h1>
                    </div>
                    <div className="border1"> </div>
                    <div className="container">
                        <Classes_box />
                    </div>
                    <Class_and_price />
                    <Trainelogin />
                    <Gallery />
                </div>
            </Layout>
        )
    }
}

export default Classes
