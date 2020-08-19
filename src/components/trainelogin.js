import React, { Component } from 'react'

export class Trainelogin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="traine_login" style={{ marginBottombottom: '0 %' }}>
                    <div className="row login_details" style={{ margin: 'auto' }}>
                        <div className="col-md-6">
                            <div className="join">
                                <h3>Why Join ?</h3>
                                <h4>sed diam nonummy nibh euismod</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br /> nibh euismod tincidunt ut laoreet dolore magna . </p>
                                <div className="btn3">
                                    <a href="#">Join Today</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="join-right">
                                <h3>Why Join ?</h3>
                                <h4>sed diam nonummy nibh euismod</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br /> nibh euismod tincidunt ut laoreet dolore magna . </p>
                                <div className="buttons_login">
                                    <div className="btn4">
                                        <a href="login.html">Log In</a>
                                    </div>
                                    <div className="p-ww">
                                        <form>
                                            <input className="date hasDatepicker" id="datepicker" type="text" defaultValue="View Calender" />
                                        </form>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Trainelogin
