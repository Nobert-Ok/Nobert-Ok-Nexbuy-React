import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import arrow from '../../assets/images/Path50.png';
import image1 from '../../assets/images/image1.png';
import Modal from 'react-bootstrap/Modal'
// import image2 from '../../assets/images/image2.png';
// import image3 from '../../assets/images/image3.png';
// import ImageUploader from "react-images-upload";
import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import "./style.css";


function Index() {
    const [smShow, setSmShow] = React.useState(false);
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
            <p className="text-center mt-4 mb-0 pb-0 font-weight-bold">Want to grow your business?</p>
            <p className="text-center create mt-1 mb-3 pb-0">Create a store and let Nexbuy take you on a success ride!</p>
            <button className="button1" onClick={() => setSmShow(true)}>Create my store</button>
            <Modal
                size="xs"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-xs"
                
            >
                <Modal.Header closeButton className='my-modal'>
                <Modal.Title id="example-modal-sizes-title-xs" bg="secondary">
                    Create Store
                </Modal.Title>
                </Modal.Header>
                <div className="line"></div>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Store Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter store name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mb-0">Store Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mb-0">Store Name</Form.Label>
                            <Form.Control type="" placeholder="Enter store name" />
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
                        <Form.Label className="mb-0">Category tag</Form.Label>
                            <DropdownMultiselect
                                options={["Men's Shoes", "Men's Clothing", "Men's Accessories", "Men's Jewelry", "Men's Watches", "Female's Clothing",
                                "Slippers", "Women's watches", "Women's Jewelry", "Women's handbag", "Women's accessories", "Mobile phones", "Tablets",
                                 "Phone accessories", "Television", "Camera","Home Appliances","Home Audio","Home & Furniture", "Fragrance","Hair Care"]}
                                name="countries"
                            />
                        </Form.Group>
                        <p className="font-weight-bold pr-2 pl-2 mt-0 mb-0 pb-0">Brands list(e.g)</p>
                        <div className="line1"></div>
                        <p className="mt-1 mb-0 pb-0">Balenciaga</p>
                        <p className="mt-1 mb-1 pb-1">Gucci</p>
                        <div className="line1"></div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mt-3 mb-0 pb-0">Brands</Form.Label>
                            <Form.Control type="" placeholder="Enter brands you will sell(optional)" />
                            <button className="button7 mt-3 float-right">Add Brand</button>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="mt-3 mb-0 pb-0 pt-4">Referral Code</Form.Label>
                            <Form.Control type="" placeholder="Referral Code" />
                        </Form.Group>
                        <div className="line1 mt-4 mb-4"></div>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Please note that by creating an store,
                            you agree to our Terms and Condition and Privacy policy to continue" className="checkbox m-3"/>
                        </Form.Group>
                        <button className="button8">Create Store</button>
                    </Form>
                </Modal.Body>
            </Modal>
            <div className="line mt-3"></div>
            <div className="p-3">
                <p className="bold-color">Stores you follow</p>
                <p className="text-center">You have not followed any store!</p>
            </div>
            <div className='line1'></div>
            <div className="pl-2">
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

export default Index;