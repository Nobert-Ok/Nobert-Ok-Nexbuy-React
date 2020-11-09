import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import arrow from '../../assets/images/Path50.png';
import image1 from '../../assets/images/image1.png';
// import image2 from '../../assets/images/image2.png';
// import image3 from '../../assets/images/image3.png';
import "./style.css";

function index() {
    return (
        <div>
            <Navbar bg="secondary" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="#" className="d-inline-block navbar1 align-top mt-1 mb-2">
                    <a className="mr-5 pr-2">
                        <img src={arrow}  width="15%" height="15%">
                        </img>
                    </a>
                    Nexbuy Store
                </Navbar.Brand>
            </Navbar>
            <div className="line mt-5 pt-3"></div>
            <div className="pl-2  mb-4">
                <p className="bold-color pt-2 mb-2">Your Store</p>
                <div>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <img src={image1} height='50px' width="50px"></img>
                            </Col>
                            <Col xs={5}>
                                <p className="storetext1 pb-0 mb-0">Classic Collections</p>
                                <p className="storetext2 pb-0 mb-0">@classiccollections</p>
                            </Col>
                            <Col xs={5}>
                                <button className="button5">Take a glance</button>
                            </Col>
                        </Row>
                     </Container>
                </div>
            </div>
            <div className='line'></div>
            <div className="pl-2 mb-3">
                <p className="bold-color pt-2 mb-2">Stores you follow</p>
                <div>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <img src={image1} height='50px' width="50px"></img>
                            </Col>
                            <Col xs={6}>
                                <p className="storetext1 pb-0 mb-0">Classic Collections</p>
                                <p className="storetext2 pb-0 mb-0">@classiccollections</p>
                            </Col>
                            <Col xs={4}>
                                <button className="button6">Unfollow</button>
                            </Col>
                        </Row>
                     </Container>
                </div>
            </div>
            <div className='line1'></div>
            <div className="pl-2 mb-3">
                <p className="bold-color pt-2 mb-2">Explore</p>
                <div>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <img src={image1} height='50px' width="50px"></img>
                            </Col>
                            <Col xs={6}>
                                <p className="storetext1 pb-0 mb-0">Classic Collections</p>
                                <p className="storetext2 pb-0 mb-0">@classiccollections</p>
                            </Col>
                            <Col xs={4}>
                                <button className="button4">Follow</button>
                            </Col>
                        </Row>
                     </Container>
                </div>
            </div>
        </div>
    )
}

export default index;
