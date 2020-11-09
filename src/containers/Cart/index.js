// import React from 'react';
import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from '../../assets/images/Path50.png';
import pic3 from '../../assets/images/shirts.png';
// import pic4 from '../../assets/images/bluesneakers.png';
// import pic5 from '../../assets/images/sneakers.png';
// import {Carousel} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import "./style.css";
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      // change code below this line
    
      increment() {
        this.setState({
          count: this.state.count + 1
        });
      };
      
      decrement() {
        this.setState({
          count: this.state.count - 1
        });
      };
    render(){
    return (
        <div>
            <Navbar bg="secondary" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="#" className="d-inline-block navbar1 align-top mt-1 mb-2">
                    <a className="mr-5 pr-5">
                        <img src={arrow}  width="15%" height="15%">
                        </img>
                    </a>
                    Cart
                </Navbar.Brand>
            </Navbar>
            <Container className="mt-5 pt-3 pb-3">
                <Row>
                    <Col xs={6}> 
                        <Image src={pic3} className="image mb-2" rounded>
                        </Image>
                        <button className="button2" onClick={(e) => this.increment(e)}>+</button>
                        {this.state.count}
                        <button className="button2" onClick={(e) => this.decrement(e)}>-</button>
                    </Col>
                    <Col xs={6} >
                        <h2>Jerseys</h2>
                        <p className="text mt-2">Orignal football jerseys. Could be worn for sport 
                           purposes or fashion. Lorem ipsum.
                        </p>
                        <div className="line1 mt-5"></div>
                        <h3>₦5,500</h3>
                    </Col>
                </Row>
                <div className="line1 mt-3"></div>
                <p className="text-right remove" >Remove item</p>
            </Container>
            <Container>
                <Row className="pr-2 pl-2">
                    <Col xs={9}>
                        <p className="total">Total items fee without shipping</p>
                    </Col>
                    <Col xs={2} className='text-right total'>
                        <p>₦5,500</p>
                    </Col>
                </Row>
            </Container>
            <div className="text-center">
                <button className="mb-3 button3">Proceed to Checkout</button>
                <button className="mb-3 button3">Continue Shopping</button>
            </div>
        </div>
    )
}
}
export default index;
