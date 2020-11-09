import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import arrow from '../../assets/images/Path50.png';
import image1 from '../../assets/images/image1.png';
import Modal from 'react-bootstrap/Modal'
import image2 from '../../assets/images/image2.png';
import pencil from '../../assets/images/pencil.png';
import store from "../../assets/images/store.png";
import heart from "../../assets/images/heart.png";
import order from "../../assets/images/order.png";
import transact from "../../assets/images/transact.png";
import arrow1 from "../../assets/images/arrow.png";
import call from "../../assets/images/call.png";
import atsign from "../../assets/images/atsign.png";
import location from "../../assets/images/location.png";
import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import "./style.css";


function Index() {
    const [smShow, setSmShow] = React.useState(false);
    const [smShow1, setSmShow1] = React.useState(false);
    return (
        <div>
            <Navbar bg="" expand="lg" variant="dark" className="pb-5 navbar">
                <Navbar.Brand href="#" className="d-inline-block navbar1 align-top pt-0 mt-0 mb-5">
                    <a className="mr-5 pr-2">
                        <img src={arrow}  width="13%" height="13%">
                        </img>
                    </a>
                    Account Profile
                </Navbar.Brand>
            </Navbar>
            {/* <div className="line mt-5 pt-3"></div> */}
            {/* <img src={image1} class="rounded-circle" alt="Cinque Terre"> </img> */}
            <Container id="edit" className= "">
                <Row>
                    <Col>
                        <img src={image2} className="image2 profile mb-5"></img>
                        <p className="pt-5 mt-3 mb-0 pb-0 name">Namenamename</p>
                        <p className="name">@name</p>
                    </Col>
                    <Col onClick={() => setSmShow(true)}>
                        <a><img src={pencil} alt="pencil" className="pencil"></img>Edit profile</a>
                    </Col>
                </Row>
            </Container>
            <Modal
                size="xs"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-xs"
                
            >
                <Modal.Header closeButton className='my-modal'>
                <Modal.Title id="example-modal-sizes-title-xs" bg="secondary">
                    Edit Profile
                </Modal.Title>
                </Modal.Header>
                <div className="line"></div>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">First Name</Form.Label>
                            <Form.Control type="" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Last Name</Form.Label>
                            <Form.Control type="" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Store Nickname</Form.Label>
                            <Form.Control type="" placeholder="Enter store nickname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Mobile Number</Form.Label>
                            <Form.Control type="" placeholder="Enter mobile number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Gender</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Country</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Nigeria</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label className="mb-0">Interest Tags</Form.Label>
                            <DropdownMultiselect
                                options={["Men's Shoes", "Men's Clothing", "Men's Accessories", "Men's Jewelry", "Men's Watches", "Female's Clothing",
                                "Slippers", "Women's watches", "Women's Jewelry", "Women's handbag", "Women's accessories", "Mobile phones", "Tablets",
                                 "Phone accessories", "Television", "Camera","Home Appliances","Home Audio","Home & Furniture", "Fragrance","Hair Care"]}
                                name="countries"
                                className="mb-3"
                            />
                        </Form.Group>
                        <div className="line1 mb-4  mt-4"></div>
                        <button className="button8">Save Changes</button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Container>
                <Row>
                    <Col>
                        <Button className="button9 mb-3">Your wallet balance is ₦0</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <button className="button9">Your ref code is: WGVSDr4232</button>
                    </Col>
                </Row>
            </Container>
            <div className="line mt-4 mb-4"></div>
            <Container className="pt-1 pr-4 pl-4 pb-2">
                <Row>
                    <Col xs={7}><a to="" className="words"><img src={store} className="mr-2 icons"></img> My Store</a> </Col>
                    <Col xs={5}><p className="text-center"><img src={arrow1} className="arrow text-center"></img></p></Col>
                </Row>
            </Container>
            <div className="line2"></div>
            <Container className="pt-4 pr-4 pl-4 pb-2">
                <Row>
                    <Col xs={7}><a to="" className="words"><img src={heart} className="mr-2 icons"></img> My Wish List</a> </Col>
                    <Col xs={5}><p className="text-center"><img src={arrow1} className="arrow text-center"></img></p></Col>
                </Row>
            </Container>
            <div className="line2"></div>
            <Container className="pt-4 pr-4 pl-4 pb-2">
                <Row>
                    <Col xs={7}><a to="" className="words"><img src={order} className="mr-2 icons"></img> Order Details</a> </Col>
                    <Col xs={5}><p className="text-center"><img src={arrow1} className="arrow text-center"></img></p></Col>
                </Row>
            </Container>
            <div className="line2"></div>
            <Container className="pt-4 pr-4 pl-4 pb-2">
                <Row>
                    <Col xs={7}><a to="" className="words"><img src={transact} className="mr-2 icons"></img> Transactions</a> </Col>
                    <Col xs={5}><p className="text-center"><img src={arrow1} className="arrow text-center"></img></p></Col>
                </Row>
            </Container>
            <div className="line mt-2 mb-3"></div>
            <Container className="pr-5">
                <Row>
                    <Col xs onClick={() => setSmShow1(true)}
                    ><p className="text-right pencil-text"><img src={pencil} alt="pencil" className="pencil"></img>Edit profile</p>
                    </Col>
                </Row>
            </Container>
            <Modal
                size="xs"
                show={smShow1}
                onHide={() => setSmShow1(false)}
                aria-labelledby="example-modal-sizes-title-xs"
                
            >
                <Modal.Header closeButton className='my-modal'>
                <Modal.Title id="example-modal-sizes-title-xs" bg="secondary">
                    Edit Profile
                </Modal.Title>
                </Modal.Header>
                <div className="line"></div>
                <Modal.Body className="m-0 p-0">
                    <Container className="p-3">
                        <Row>
                            <Col>
                                <p className="p-0">Addresses</p>
                                <div className="line1"></div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="m-0 p-0">
                        <Row>
                            <Col>
                                <p className="mb-1 pl-2 pr-2 graytext">Default Address</p>
                                <div className="line1 mb-4"></div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="line m-0 p-0"></div>
                    <Container className="mt-3 p-0">
                        <Row>
                            <Col>
                                <p className="mb-1 pl-2 pr-2 graytext">All Addresses</p>
                                <div className="line1 mb-3"></div>
                            </Col>
                        </Row>
                    </Container>
                    <Form className="m-0 p-4">
                        <Container className="p-0">
                            <Row>
                                <Col>
                                    <p className="mb-1 pl-2 pr-2">Add a new Address</p>
                                    <div className="line1 mb-4"></div>
                                </Col>
                            </Row>
                        </Container>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Receiver's Name</Form.Label>
                            <Form.Control type="" placeholder="Enter Receiver's Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Country</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Nigeria</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">State Delivery Station</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Enter Delivery Station</option>
                                <option>ABA-ABIA(ABA)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Bus-stop</Form.Label>
                            <Form.Control type="" placeholder="Enter Bus-stop" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Street</Form.Label>
                            <Form.Control type="" placeholder="Enter Number and Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Phone Number</Form.Label>
                            <Form.Control type="" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <div className="line1 mb-4  mt-4"></div>
                        <button className="button8">Add Address</button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Container className="pr-5">
                <Row>
                    <Col xs><p className="ml-3 mr-2"><img src={call} alt="pencil" className="pencil mr-2"></img>+234 810 491 5691</p>
                    </Col>
                </Row>
            </Container>
            <div className="line2"></div>
            <Container className="pr-5">
                <Row>
                    <Col xs><p className="ml-3 mr-2 mt-3"><img src={atsign} alt="pencil" className="pencil mr-2"></img>Itubolite247@gmail.com</p>
                    </Col>
                </Row>
            </Container>
            <div className="line2"></div>
            <Container className="pr-5">
                <Row>
                    <Col xs><p className="ml-3 mr-2 mt-3"><img src={location} alt="pencil" className="pencil mr-2"></img>Nigeria</p>
                    </Col>
                </Row>
            </Container>
            <button className="button10 mt-4 mb-5">Log out</button>
        </div>
    )
}

export default Index;