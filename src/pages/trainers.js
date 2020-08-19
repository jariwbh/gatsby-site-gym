import React, { Component } from 'react'
import Gallery from '../components/gallery'
import Trainelogin from '../components/trainelogin'
import TrainersMiddle from '../components/trainersMiddle'
import { trine_img } from '../components/images'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Layout from '../components/Layout'

export class Trainers extends Component {
    constructor() {
        super();
        //window.scrollTo(0, 0);
    }
    render() {
        return (
            <Layout>
                <div className="main" style={{ backgroundColor: '#F3F3F3' }}>
                    <div className="about_banner_img"><img src={trine_img} className="img-responsive" alt="" /> </div>
                    <div className="about_banner_wrap">
                        <h1 className="m_11">Timetable</h1>
                    </div>
                    <div className="border1"> </div>
                    <div className="container" style={{ backgroundColor: '#F3F3F3' }}>
                        <div className="sap_tabs">
                            <div id="horizontalTab" style={{ display: 'block', width: '100%', margin: '0px' }}>
                                <Tabs defaultActiveKey="Allclasses" role="tablist">
                                    <Tab className="tab-1 resp-tab-content center" eventKey="Allclasses" title="All classes" role="tab" aria-selected="true" >
                                        <div className="facts">
                                            <ul className="tab-left">
                                                <table className="timetable">
                                                    <thead>
                                                        <tr>
                                                            <th></th>	<th>MONDAY</th>	<th>TUESDAY</th>	<th>WEDNESDAY</th>	<th>THURSDAY</th>	<th>FRIDAY</th>	<th>SATURDAY</th>	<th>SUNDAY</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody><tr className="row_1 row_gray">
                                                        <td>
                                                            05.00 - 06.00
                                                    </td><td className="event"><a href="#" title="Boxing">Boxing</a>05.00 - 06.00</td><td className="event"><a href="#" title="Boxing">Boxing</a>05.00 - 06.00</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_2">
                                                            <td>
                                                                06.00 - 07.00
                                                    </td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 07.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 07.00</td><td className="event" rowSpan="3"><a href="#">Gym Fitness</a>06.00 - 08.30<br /><br /><a href="#" title="Cardio Fitness">Cardio Fitness</a>06.00 - 08.30</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 08.30<br /><br /><a href="#" title="Cardio Fitness">Cardio Fitness</a>06.00 - 08.30</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 08.30<br /><br /><a href="#" title="Cardio Fitness">Cardio Fitness</a>06.00 - 08.30</td><td></td><td></td></tr><tr className="row_3 row_gray">
                                                            <td>
                                                                07.00 - 08.00
                                                    </td><td className="event"><a href="#" title="Cardio Fitness">Cardio Fitness</a>07.00 - 08.00</td><td className="event"><a href="#" title="Cardio Fitness">Cardio Fitness</a>07.00 - 08.00</td><td></td><td></td></tr><tr className="row_4">
                                                            <td>
                                                                08.00 - 09.00
                                                    </td><td></td><td></td><td className="event" rowSpan="2"><a href="#" title="Indoor Cycling">Indoor Cycling</a>08.00 - 09.30</td><td className="event" rowSpan="2"><a href="#" title="Indoor Cycling">Indoor Cycling</a>08.00 - 09.30</td></tr><tr className="row_5 row_gray">
                                                            <td>
                                                                09.00 - 10.00
                                                    </td><td className="event" rowSpan="3"><a href="#" title="Indoor Cycling">Indoor Cycling</a>09.00 - 11.25</td><td className="event" rowSpan="3"><a href="#" title="Indoor Cycling">Indoor Cycling</a>09.00 - 11.25</td><td></td><td className="event"><a href="#" title="Indoor Cycling">Indoor Cycling</a>09.00 - 10.00</td><td className="event"><a href="#" title="Indoor Cycling">Indoor Cycling</a>09.00 - 10.00</td></tr><tr className="row_6">
                                                            <td>
                                                                10.00 - 11.00
                                                    </td><td></td><td className="event" rowSpan="2"><a href="#" title="Cardio Fitness">Cardio Fitness</a>10.00 - 11.30</td><td className="event" rowSpan="2"><a href="#" title="Cardio Fitness">Cardio Fitness</a>10.00 - 11.30</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>10.00 - 11.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>10.00 - 11.00</td></tr><tr className="row_7 row_gray">
                                                            <td>
                                                                11.00 - 12.00
                                                    </td><td></td><td className="event"><a href="#" title="Indoor Cycling">Indoor Cycling</a>11.00 - 12.00</td><td className="event"><a href="#" title="Indoor Cycling">Indoor Cycling</a>11.00 - 12.00</td></tr><tr className="row_8">
                                                            <td>
                                                                12.00 - 13.00
                                                    </td><td></td><td></td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td><td className="event" rowSpan="4"><a href="#" title="Boxing">Boxing</a>12.00 - 15.45</td><td className="event" rowSpan="4"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00<br /><br /><a href="#" title="Boxing">Boxing</a>12.00 - 15.45<br /><br /><a href="#" title="Cardio Fitness">Cardio Fitness</a>14.00 - 16.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td></tr><tr className="row_9 row_gray">
                                                            <td>
                                                                13.00 - 14.00
                                                    </td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_10">
                                                            <td>
                                                                14.00 - 15.00
                                                    </td><td className="event" rowSpan="4"><a href="#" title="Gym Fitness">Gym Fitness</a>14.00 - 16.15<br /><br /><a href="#" title="Indoor Cycling">Indoor Cycling</a>16.00 - 17.30</td><td className="event" rowSpan="4"><a href="#" title="Gym Fitness">Gym Fitness</a>14.00 - 16.15<br /><br /><a href="#" title="Indoor Cycling">Indoor Cycling</a>16.00 - 17.30</td><td></td><td></td><td className="event" rowSpan="2"><a href="#" title="Cardio Fitness">Cardio Fitness</a>14.00 - 16.00</td></tr><tr className="row_11 row_gray">
                                                            <td>
                                                                15.00 - 16.00
                                                    </td><td></td><td></td></tr><tr className="row_12">
                                                            <td>
                                                                16.00 - 17.00
                                                    </td><td></td><td className="event" rowSpan="2"><a href="#" title="Indoor Cycling">Indoor Cycling</a>16.00 - 17.30</td><td className="event" rowSpan="4"><a href="#" title="Indoor Cycling">Indoor Cycling</a>16.00 - 17.30<br /><br /><a href="#" title="Gym Fitness">Gym Fitness</a>17.30 - 20.00<br /><br /><a href="#" title="Boxing">Boxing</a>18.00 - 20.00</td><td></td><td></td></tr><tr className="row_13 row_gray">
                                                            <td>
                                                                17.00 - 18.00
                                                    </td><td></td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>17.00 - 18.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>17.00 - 18.00</td></tr><tr className="row_14">
                                                            <td>
                                                                18.00 - 19.00
                                                    </td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 19.00<br /><br /><a href="#" title="Yoga Pilates">Yoga Pilates</a>18.30 - 20.00</td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 19.00<br /><br /><a href="#" title="Yoga Pilates">Yoga Pilates</a>18.30 - 20.00</td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 20.00<br /><br /><a href="#" title="Yoga Pilates">Yoga Pilates</a>18.30 - 20.00</td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 20.00<br /><br /><a href="#" title="Yoga Pilates">Yoga Pilates</a>18.30 - 20.00</td><td></td><td></td></tr><tr className="row_15 row_gray">
                                                            <td>
                                                                19.00 - 20.00
                                                    </td><td className="event" rowSpan="2"><a href="#" title="Yoga Pilates">Yoga Pilates</a>19.00 - 20.30</td><td className="event" rowSpan="2"><a href="#" title="Yoga Pilates">Yoga Pilates</a>19.00 - 20.30</td></tr><tr className="row_16">
                                                            <td>
                                                                20.00 - 21.00
                                                    </td><td></td><td></td><td></td><td></td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <div className="timetable_small">
                                                    <ul className="items_list"><h3>Monday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Tuesday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Wednesday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Thrusday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Friday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Saturday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Sunday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                </div>
                                            </ul>
                                        </div>
                                    </Tab>
                                    <Tab className="tab-2 resp-tab-content" eventKey="GymFitness" title="Gym Fitness" role="tab" aria-selected="true" >
                                        <div className="facts">
                                            <ul className="tab-left">
                                                <table className="timetable">
                                                    <thead>
                                                        <tr>
                                                            <th></th>	<th>MONDAY</th>	<th>TUESDAY</th>	<th>WEDNESDAY</th>	<th>THURSDAY</th>	<th>FRIDAY</th>	<th>SATURDAY</th>	<th>SUNDAY</th>	</tr>
                                                    </thead>
                                                    <tbody><tr className="row_1 row_gray">
                                                        <td>
                                                            06.00 - 07.00
						</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 07.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 07.00</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 08.30</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 08.30</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>06.00 - 08.30</td><td></td><td></td></tr><tr className="row_2">
                                                            <td>
                                                                07.00 - 08.00
						</td><td></td><td></td><td></td><td></td></tr><tr className="row_3 row_gray">
                                                            <td>
                                                                08.00 - 09.00
						</td><td></td><td></td><td></td><td></td></tr><tr className="row_4">
                                                            <td>
                                                                09.00 - 10.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_5 row_gray">
                                                            <td>
                                                                10.00 - 11.00
						</td><td></td><td></td><td></td><td></td><td></td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>10.00 - 11.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>10.00 - 11.00</td></tr><tr className="row_6">
                                                            <td>
                                                                11.00 - 12.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_7 row_gray">
                                                            <td>
                                                                12.00 - 13.00
						</td><td></td><td></td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td><td></td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>12.00 - 13.00</td></tr><tr className="row_8">
                                                            <td>
                                                                13.00 - 14.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_9 row_gray">
                                                            <td>
                                                                14.00 - 15.00
						</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>14.00 - 16.15</td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>14.00 - 16.15</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_10">
                                                            <td>
                                                                15.00 - 16.00
						</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_11 row_gray">
                                                            <td>
                                                                16.00 - 17.00
						</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_12">
                                                            <td>
                                                                17.00 - 18.00
						</td><td></td><td></td><td></td><td></td><td className="event" rowSpan="3"><a href="#" title="Gym Fitness">Gym Fitness</a>17.30 - 20.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>17.00 - 18.00</td><td className="event"><a href="#" title="Gym Fitness">Gym Fitness</a>17.00 - 18.00</td></tr><tr className="row_13 row_gray">
                                                            <td>
                                                                18.00 - 19.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_14">
                                                            <td>
                                                                19.00 - 20.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <div className="timetable_small">
                                                    <ul className="items_list"><h3>Monday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Tuesday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Wednesday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Thrusday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Friday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Saturday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Sunday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                </div>
                                            </ul>
                                        </div>
                                    </Tab>
                                    <Tab className="tab-3 resp-tab-content" eventKey="Boxing" title="Boxing" role="tab" aria-selected="true">
                                        <div className="facts">
                                            <ul className="tab-left">
                                                <table className="timetable">
                                                    <thead>
                                                        <tr>
                                                            <th></th>	<th>MONDAY</th>	<th>TUESDAY</th>	<th>WEDNESDAY</th>	<th>THURSDAY</th>	<th>FRIDAY</th>	<th>SATURDAY</th>	<th>SUNDAY</th>	</tr>
                                                    </thead>
                                                    <tbody><tr className="row_1 row_gray">
                                                        <td>
                                                            05.00 - 06.00
						</td><td className="event"><a href="#" title="Boxing">Boxing</a>05.00 - 06.00</td><td className="event"><a href="#" title="Boxing">Boxing</a>05.00 - 06.00</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_2">
                                                            <td>
                                                                06.00 - 07.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_3 row_gray">
                                                            <td>
                                                                07.00 - 08.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_4">
                                                            <td>
                                                                08.00 - 09.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_5 row_gray">
                                                            <td>
                                                                09.00 - 10.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_6">
                                                            <td>
                                                                10.00 - 11.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_7 row_gray">
                                                            <td>
                                                                11.00 - 12.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_8">
                                                            <td>
                                                                12.00 - 13.00
						</td><td></td><td></td><td></td><td></td><td className="event" rowSpan="4"><a href="#" title="Boxing">Boxing</a>12.00 - 15.45</td><td className="event" rowSpan="4"><a href="#" title="Boxing">Boxing</a>12.00 - 15.45</td><td></td></tr><tr className="row_9 row_gray">
                                                            <td>
                                                                13.00 - 14.00
						</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_10">
                                                            <td>
                                                                14.00 - 15.00
						</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_11 row_gray">
                                                            <td>
                                                                15.00 - 16.00
						</td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_12">
                                                            <td>
                                                                16.00 - 17.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_13 row_gray">
                                                            <td>
                                                                17.00 - 18.00
						</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr className="row_14">
                                                            <td>
                                                                18.00 - 19.00
						</td><td className="event"><a href="#" title="Boxing">Boxing</a>18.00 - 19.00</td><td className="event"><a href="#" title="Boxing">Boxing</a>18.00 - 19.00</td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 20.00</td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 20.00</td><td className="event" rowSpan="2"><a href="#" title="Boxing">Boxing</a>18.00 - 20.00</td><td></td><td></td></tr><tr className="row_15 row_gray">
                                                            <td>
                                                                19.00 - 20.00
						</td><td></td><td></td><td></td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <div className="timetable_small">
                                                    <ul className="items_list"><h3>Monday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Tuesday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Wednesday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Thrusday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Friday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Saturday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                    <ul className="items_list"><h3>Sunday</h3>
                                                        <li><p><a href>Gym Fitness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cardio Fittness</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Boxing</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Yoga Pilates</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                        <li><p><a href>Cycling</a></p><span className="m_31">10.00 - 20.00</span><div className="clear"></div></li>
                                                    </ul>
                                                </div>
                                            </ul>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        <TrainersMiddle />
                    </div>
                    <Trainelogin />
                    <Gallery />
                </div>
            </Layout>
        )
    }
}

export default Trainers
