import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from '../../assets/images/Path50.png';
import pic3 from '../../assets/images/shirts.png';
import pic4 from '../../assets/images/bluesneakers.png';
import pic5 from '../../assets/images/sneakers.png';
import {Carousel} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import "./style.css";




function index() {
    return (
        <div>
            <Navbar fixed="top" bg="secondary" expand="lg" variant="dark" >
                <Navbar.Brand href="#" className="d-inline-block navbar1 align-top mt-1 mb-2">
                    <a className="mr-5 pr-3">
                        <img src={arrow}  width="12%" height="12%">
                        </img>
                    </a>
                    Product Details
                </Navbar.Brand>
            </Navbar>
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic3}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic4}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic5}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="line"></div>
            <Container center>
            <Row>
                <Col xs>
                    <div className="text-center">0</div>
                    <div className="text-center">Reviews</div>
                </Col>
                <Col xs>
                    <div className="text-center">0</div>
                    <div className="text-center">Ratings</div>
                </Col>
                <Col xs>
                    <div className="text-center">4</div>
                    <div className="text-center">Followers</div>
                </Col>
            </Row>
            </Container>
            <div className="line"></div>
            <div fluid="xs" className="p-2">
                <h5 className="titlename">Jerseys</h5>
                <div className="line1"></div>
                <p>Original football jerseys. Could be worn for 
                sport purpose on fashion
                </p>
            </div>
            <div className="line"></div>
            <div fluid="xs" className="p-2">
                <h5 className="titlename">Product Sizes</h5>
                <div className="line1"></div>
                <p>Pick a Small</p>
                <Button>25</Button>
                <Button>20</Button>
            </div>
            <div className="line"></div>
            <div fluid="xs" className="p-2">
                <p>You can negotiate the price with the seller!</p>
                <div className="line1 mb-4"></div>
                <p>Suggest your price</p>
                <Container>
                    <Row className="mb-3">
                        <Col xs={8}>
                            <InputGroup className="mb-3" size="sm">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">NGN</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                placeholder="5000"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={2}>
                            <Button size="sm">Negotiate</Button>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <p>Quantity</p>
                    <Button>+</Button> 1 <Button>-</Button>
                </div>
            </div>
            <div className="line"></div>
            <div fluid="xs" className="p-2">
                <h5 className="titlename">Time to deliver</h5>
                <div className="line1"></div>
                <p>Your item will be delivered to you in 25 to 29 
                days
                </p>
            </div>
            <div className="line"></div>
            <div fluid="xs" className="p-2">
                <h5 className="titlename">Ok with the deal?</h5>
                <div className="line1 mb-3"></div>
                <Container>
                    <Row>
                        <Col xs={5}><Button>Add to cart</Button></Col>
                        <Col xs={7}><Button>Add to wishlist</Button></Col>
                    </Row>
                </Container>
            </div>
            <div className="line"></div>
            <p>Would you like to rate this product?<a>Click Here</a></p>
            <div className="line"></div>
        </div>
    )
}

export default index;
