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
                <div class="main">
                    <div class="about_banner_img"><img src={class_img} class="img-responsive" alt="" /></div>
                    <div class="about_banner_wrap">
                        <h1 class="m_11">Classes</h1>
                    </div>
                    <div class="border1"> </div>
                    <div class="container">
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
