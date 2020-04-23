import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl';
import {MdLocationOn} from 'react-icons/md';
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
;

class Mapcontact extends Component {
    render() {
        return (
            <div className="mapcontact">
                <Grid className="mapcontact-grid" noSpacing>
                    <Cell gutter={0} col={6} className="mapcontact-map">
                         <MdLocationOn className="footer-icon map"/>
                    </Cell>
                    <Cell gutter={40} col={6}className="mapcontact-contact">
                        <h6>SEND US A MESSAGE</h6>
                        <div>CON<span className="contact-overlay">TACT US ANYT</span>IME</div>
                        <p>You can reach out to us anytime</p>
                        <Form>
                            <Grid>
                                <Cell col={2}></Cell>
                                <Cell col={8}>
                                    <Form.Group className="mapcontact-form">
                                        <Form.Control type="text" placeholder="Your Name" className="inputfield" />    
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword" className="mapcontact-form">
                                        <Form.Control type="text" placeholder="Email Address" className="inputfield" />
                                    </Form.Group>

                                    <Form.Group className="mapcontact-form">
                                        <Form.Control as="textarea" rows="3" type="text" placeholder="Message" className="inputfield"/>
                                    </Form.Group>
                                    <Grid>
                                        <Cell col={8}></Cell>
                                        <Cell col={4}>
                                            <Button type="submit" className="btn-primary">
                                            Submit
                                            </Button>  
                                        </Cell>
                                    </Grid>
                                <Cell col={2}></Cell>
                            
                                </Cell>
                            </Grid>
                           
                        </Form>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Mapcontact
