import React, { Component } from 'react'
import { Router } from "@reach/router"
import Home from './home'
import Aboutus from './aboutus'
import Trainers from './trainers'
import Contactus from './contactus'
import Pricing from './pricing'
import Classes from './classes'
import Blog from './blog'
import Error from './404'
import Demo from './demo'
//import Layout from '../components/Layout'

export class Default extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <Router>
                <Aboutus path="/aboutus" />
                <Trainers path="/trainers" />
                <Contactus path="/contactus" />
                <Classes path="/classes" />
                <Blog path="/blog" />
                <Pricing path="/pricing" />
                <Error path="/error" />
                <Demo path="/demo" />
                <Home path="/" />
            </Router>
        )
    }
}

export default Default
